---
title: Indexed List View Custom Widget
slug: kendo-mobile-music-store-indexedlistview-widget
tags: Tutorial
publish: true
---

# Tutorial: Kendo Mobile Music Store: Indexed List View Custom Widget

![artists-view](images/artists-view.png)

The code and styling for this custom widget can be found in:
* kendo/js/kendo.indexedlistview.js
* kendo/styles/kendo.indexedlistview.css

The Indexed ListView is a custom widget that extends from the default Kendo [ListView](http://demos.kendoui.com/mobile/listview/index.html) widget and adds a side-bar on the right that the user can move to quickly navigate between groups.
It is designed to work with a ListView widget that is in grouped mode, meaning that its underlying data source contains a grouping.
The index along the right edge will repeat the group headers, fitting them in the vertical space available.

## Extending a widget.

In the Web version of the Kendo Music Store, we showed a way to create a [custom composite widget](http://docs.kendoui.com/tutorials/ASP.NET/Kendo%20Music%20Store/Music%20Store%20Web/kendo-music-store-web-cart-menu-widget) that was composed of 1 or more other widgets.
The Indexed ListView widget is instead an extension of an existing widget.
To do this, we start by simply extending the default widget:

    var base = kendo.mobile.ui.ListView;
    var that;
    
    var IndexedListView = base.extend({
        init: function(element, options) {
            that = this;

            base.fn.init.call(that, element, options);
        },

        options: $.extend(base.options, {
            name: "IndexedListView"
        }),

        refresh: function (e) {
            base.fn.refresh.call(that, e);
        }
    });
    
    kendo.mobile.ui.plugin(IndexedListView);

This starts by setting the `base` variable to `kendo.mobile.ui.ListView` which is the widget we want to extend.
Then the widget is extended with a new object that redefines the `init`, `options`, and `refresh` function and fields from the original widget by calling `base.extend()`.
The `init` and `refresh` functions call the base implementation so that the original ListView widget code is still run for these two functions.
The `options.name` field is replaced with "IndexedListView" which will be the new name of our widget.
If this name was not changed, then it would have remained "ListView" and we would have risked overriding all ListView widgets to this new one.

## Adding Init Code

The `init()` function works like the constructor for the widget.
We add our custom initialization code here.
In the case of hte IndexedListView widget, we want to add a new `km-indexedlistview` class to the element for styling purposes, get all the group headers, and create the index list.

        init: function(element, options) {
            that = this;

            base.fn.init.call(that, element, options); // call base ListView widget init()
            $(element).addClass("km-indexedlistview"); // add class to element for styling

            // onResize() is fired when the device moved between horizontal and vertical screen rotations.
            if (that._scroller()) {
                kendo.onResize(function() {
                    _sizeIndexList(that.headers.length);
                });
            }

            // add index list to right edge and a card that will display the current letter
            _scrollWrapper = $(element).closest(".km-scroll-wrapper");
            _scrollWrapper.prepend(_indexList);
            $("body").prepend(_indexCard);

           // bind to touch events
            that.userEvents = new kendo.UserEvents(_indexList, {
                stopPropagation: true,
                press: function (e) { _onIndexDragStart(); _onIndexDragMove(e); },
                tap: _onIndexDragEnd,
                start: function () { that.userEvents.capture(); _onIndexDragStart(); },
                move: _onIndexDragMove,
                end: _onIndexDragEnd
            });
        }

## Creating the Indexd List Items

When `refresh()` is called the idex list items are recreated.
The widget starts by checking if the DataSource contains groupings.
It then takes the first grouping (the widget assumes only the first level of groupings contributes to the index) and builds the index from the group items.

        refresh: function (e) {
            base.fn.refresh.call(that, e);

            if (that.dataSource.group()[0]) {
                _indexList.empty();
                _sizeIndexList(e.items.length);
                _createIndexList(e.items);
            }
        }

The first step is to empty the `_indexList` if it already contained elements from the last refresh.
Then the widget determines the optimal font size for the index items in the `_sizeIndexList()` function.
Finally the widget adds the index list elements to the DOM in the `_createIndexList()` function.

## Determining the Index Size

The `_sizeIndexList()` function determines the height of the index list element, divides it by the number of index items, and uses this as a pixel size for the fonts.
This way the index list will use as much vertical space as possible.

    var _sizeIndexList = function (itemCount) {
        var lineHeight = Math.floor((_scrollWrapper.height() - 20) / itemCount);
        _indexList.css("line-height", lineHeight + "px");
        _indexList.css("font-size", (lineHeight - 1) + "px");
    };

## Adding the Index Elements to the DOM

The `_createIndexList()` function loops through each of the items in the grouping and adds an element to the index to represent the group.
It creates the elements using jQuery and appends them to the index list element.

    var _createIndexList = function (items) {
        $.each(items, function (index, item) {
            var newElement = $('<li data-index="' + index + '">' + item.value + '</li>');
            _indexList.append(newElement);
        });
    };

## Handing Touch Events

This is the most difficult part of the widget.
The desired functionality was to move immidiately to an index item when it was tapped and move to another index as the user's finger was dragged over the items.
This was acheived by using the `kendo.UserEvents` object.
The `UserEvents` is considered an internal/private piece of Kendo and should not normally be used, but since this is an isolated custom widget it was decided that it was OK to use in this scenario.
`UserEvents` provides a high-level touch event handler on top of the standard DOM events and PhoneGap events.

    that.userEvents = new kendo.UserEvents(_indexList, {
        stopPropagation: true,
        press: function (e) { _onIndexDragStart(); _onIndexDragMove(e); },
        tap: _onIndexDragEnd,
        start: function () { that.userEvents.capture(); _onIndexDragStart(); },
        move: _onIndexDragMove,
        end: _onIndexDragEnd
    });

The `stopPropogation` property was important to set to `true` because it prevented the events on the index list from bubbling down to the underlying ListView elements.
Without this property set, the ListView would scroll slightly as the user dragged their finger over the index list, since the `move` events would bubble down.
Functions were specified as delegates for each of the desired touch events.

    var _onIndexDragMove = function (e) {
        _indexSelected(e.touch.x.location, e.touch.y.location);
    };

    var _onIndexDragStart = function () {
        _prevIndex = undefined;
        _indexList.addClass("km-ontouch");
    };

    var _onIndexDragEnd = function () {
        _indexCard.hide();
        _prevIndex = undefined;
        _indexList.removeClass("km-ontouch");
    };
