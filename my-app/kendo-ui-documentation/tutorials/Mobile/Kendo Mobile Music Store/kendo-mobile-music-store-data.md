---
title: Retreiving Data
slug: kendo-mobile-music-store-data
tags: Tutorial
publish: true
ordinal: 03
---

# Tutorial: Kendo Music Store: Retreiving Data

The Kendo Mobile Music Store project has all its data access functionality contained in the file `scripts/config.js`.

## Configuration Reuse

Since most of the data is being pulled from the WCF OData services provided by the Kendo Music Store (web) there was an opportunity to reuse the same DataSource configuration over and over.
This was done by creating a `DataSourceConfig` constructor function that would create objects that could be used as the `options` parameter into the Kendo DataSource.

    var DataSourceConfig = function (url, sortField, options) {
        this.transport = {
            read: url
        };
        this.sort = {
            field: sortField,
            dir: "asc"
        };
        $.extend(this, options || {});
    };
    
    DataSourceConfig.prototype = {
        type: "odata",
        schema: {
            data: _wcfSchemaData,
            total: _wcfSchemaTotal
        },
        requestStart: function () { if (this.pageSize() === undefined || this.page() === 1) { utils.showLoading(); }}, //infinite scrolling has its own, less obtrusive indicator
        requestEnd: function () { utils.hideLoading(); },
        error: function () { utils.hideLoading(); utils.showError("There was an error loading the data from the server. Please close the app and try again."); }
    };

Given this code, we could now create Kendo `DataSource`s with a small amount of code:

        genresList = new kendo.data.DataSource(new DataSourceConfig(config.genresUrl, "Name"));
        artistsList = new kendo.data.DataSource(new DataSourceConfig(config.artistsUrl, "Name"));

If a DataSource needed to add or change configuration properties from the default it could be done with the 3rd parameter to the constructor.

        albumsList = new DataSource(new DataSourceConfig(config.albumsUrl + "?$expand=Artist", "Title", {
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
            pageSize: 20
        }));

This helped to drastically reduce the amount of duplicated code in `data.js`.

## Limitations of DataSource with ListView Endless Scrolling

One of the nice parts of Kendo Mobile's ListView widget is its ability to perform "endless scrolling" which works by loading the next page of data when the user scrolls to the bottom of the list.
Unfortunately, there is an issue when this is used in conjunction with MVVM bindings.
The issue is that when the ListView scrolls to the bottom it tells its underlying DataSource to load the next page.
The default behavior of the DataSource is to remove the current page of data held in memory and load the next page from the server.
When the previous page of data is removed fromt he DataSource's memory, any existing MVVM bindings now loose their reference to the data and instead become bound to the newly loaded data.
The result is that the MVVM bindings for the data higher in the list that belong to the previously loaded pages start being updated to show the newly loaded page's data instead.

To work around this limitation, we need to alter the DataSource to keep the previous pages in memory, and instead of replacing them with the new page, just append the new page of data to the existing array.

The method chosen in this sample project is not reccommended because it overrides a "private" function of the DataSource, but does demonstrate one way to do this wil fairly minimal code.
All DataSources that need to use endless scrolling are created from the `EndlessScrollDataSource` constructor function which extends the main Kendo DataSource.

    var EndlessScrollDataSource = kendo.data.DataSource.extend({
        _observe: function(data) {
            if(this._page > 1) {
                this._data.push.apply(this._data, data);
                return this._data;
            }
            return kendo.data.DataSource.prototype._observe.call(this, data);
        }
    });

The `EndlessScrollDataSource` overrides the `_observe` private function. Its new functionality simply calls the original `DataSource._observe(data)` function for the first page of data.
For pages of data other than the first, the newly loaded data is pushed onto the existing data array instead of replacing it.

Again, this workaround was only needed beacuse of the use of MVVM bindings in a ListView with endless scrolling and server paging enabled. It would not have been neccecary under other conditions.
