---
title: Use the ListView of Kendo UI Mobile with endless scrolling
slug: howto-use-the-mobile-listview-with-endless-scrolling
tags: How-To
publish: true
---

# How-To: Use the ListView of Kendo UI Mobile with endless scrolling

In this how-to, we will examine how to use the [ListView](http://docs.kendoui.com/api/mobile/listview) of Kendo UI Mobile with endless scrolling.

The Kendo Mobile ListView widget is used to display flat or grouped list of items. It can be either used in unbound mode by enhancing an HTML ul element, or bound to a DataSource instance.

Rendering a lot of data at once will lead to a performance issues with the application. One way to solve this problem is to use "endless scrolling".
Endless scrolling provides a way to load additional content dinamically. When the user scrolls down the listview and reaches the end of the list, more content is being loaded without a page refresh.

## Create a Mobile ListView with endless scrolling

** In order to proceed with this "How-to", you will need to know how to build [Kendo Mobile application](http://docs.kendoui.com/howto/build-apps-with-kendo-ui-mobile).

First step is to decide what will be the best way to get the additional data. Here are the possible ways:

- **local** - The whole data is serialized on the client. Only the first page will be rendered. Next page is rendered when the user reaches the end of the list.
- **remote** - Only the first page of the data will serialized and rendered on the client. When the user reaches the end of the list an Ajax request will be made to fetch the next portion of the data.

### Bind the Mobile ListView to a local data

Let's see how the Mobile ListView works by building a simple example that uses locally generated data.

First, we'll define a target HTML element such as a list:

    <ul id="localListView"></ul>

Next we will define a function, which will return a list of generated data:

        //generate local data
        function getData() {
            var data = [], idx = 0;
            for (; idx < 1000; idx) {
                data.push({
                    name: "Name" + idx
                });
            }

            return data;
        }

Next task is to create a DataSource instance. Please note that the pageSize is required:

        //define the DataSource
        var dataSource = new kendo.data.DataSource({
            pageSize: 20, //defines page size. Required by the "Endless scrolling"
            data: getData()
        });

Finally, we will initialize the Mobile ListView:

        //initialize the Mobile ListView
        $("#listView").kendoMobileListView({
            dataSource: dataSource,
            template: "#: name #",

            endlessScroll: true,

            scrollTreshold: 30 //treshold in pixels
        });

Here's the live example of the representation (above):

<a class="jsbin-embed" href="http://jsbin.com/iyodux/2/embed?live">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

### Bind the Mobile ListView to a remote data

For this example we will use the Twitter API. Lest define a HTML UL element:

    <ul id="remoteListView"></ul>

Next, we will need to define a DataSource instance, which will fetch the data from Twitter:

    var dataSource = new kendo.data.DataSource({
        pageSize: 30,
        serverPaging: true, //specifies whether the paging should be handled by the service
        transport: {
            read: {
                url: "http://search.twitter.com/search.json", // the remote service url
                dataType: "jsonp" // JSONP (JSON with padding) is required for cross-domain AJAX
            },
            parameterMap: function(options) {
                var parameters = {
                    q: "javascript", //additional parameters sent to the remote service
                    rpp: options.pageSize,
                    page: options.page //next page
                };

                return parameters;
            }
        },
        schema: { // describe the result format
            data: "results" // the data which the DataSource will be bound to is in the "results" field
        }
    });

Initialize the Mobile ListView:

    $("#listView").kendoMobileListView({
        dataSource: dataSource,
        template: "#: from_user #",
        endlessScroll: true
    });

Here's the live example of the representation (above):

<a class="jsbin-embed" href="http://jsbin.com/isaqaw/2/embed?live">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

## Send additional parameters

The Mobile ListView provides a way to define [endlessScrollParameters](http://docs.kendoui.com/api/mobile/listview#endlessscrollparameters-function) function, which will add its result to the data send to the server.
These data will be available in the DataSource's [parameterMap](http://docs.kendoui.com/api/framework/datasource#transportparametermap-function) function.

Let's modify the above example to send [an additional parameter](https://dev.twitter.com/docs/api/1.1/get/search/tweets#api-param-max_id) to the Twitter service:

    $("#listView").kendoMobileListView({
        dataSource: dataSource,
        template: "#: from_user #",
        endlessScroll: true,
        endlessScrollParameters: function(firstItem) {
            if (firstItem) {
                return {
                    max_id: firstItem.id_str
                };
            }
        }
    });

Now we can use this additional parameter in the parameterMap function of the DataSource:

    var dataSource = new kendo.data.DataSource({
        serverPaging: true,
        pageSize: 10,
        transport: {
            read: {
                url: "http://search.twitter.com/search.json", // the remove service url
                dataType: "jsonp" // JSONP (JSON with padding) is required for cross-domain AJAX
            },
            parameterMap: function(options) {
                return {
                    q: "javascript",
                    page: options.page,
                    rpp: options.pageSize,
                    max_id: options.max_id //additional parameters sent to the remote service
                };
            }
        },
        schema: { // describe the result format
            data: "results" // the data which the data source will be bound to is in the "results" field
        }
    });

Here's the live example of the above example:

<a class="jsbin-embed" href="http://jsbin.com/upajoc/1/embed?live">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

### ListView bound to dynamic remote data

In some cases, the total size of the remote data cannot be defined statically. In this scenario, the endless scroll will not be disabled until the developer stops it. In other words,
when the last page is served the user still be able to scroll the ListView and it will perform requests for additional content. This could lead into duplication of the rendered data.
The developer can solve this problem using the [stopEndlessScrolling](http://docs.kendoui.com/api/mobile/listview#stopEndlessScrolling) method of the ListView. We will modify the last example in order to show a possible resolution of the issue:

1. Wire the change event of the DataSource and check whether it has data:

        var dataSource = new kendo.data.DataSource({
            pageSize: 30,
            serverPaging: true, //specifies whether the paging should be handled by the service
            change: function() {
                //check whether any data is returned
                if (!this.view()[0]) {

                }
            },
            transport: {
                read: {
                    url: "http://search.twitter.com/search.json", // the remote service url
                    dataType: "jsonp" // JSONP (JSON with padding) is required for cross-domain AJAX
                },
                parameterMap: function(options) {
                    var parameters = {
                        q: "javascript", //additional parameters sent to the remote service
                        rpp: options.pageSize,
                        page: options.page //next page
                    };

                    return parameters;
                }
            },
            schema: { // describe the result format
                data: "results" // the data which the DataSource will be bound to is in the "results" field
            }
        });

2. If there is no data (the condition could be other) get reference to the ListView and stop endless scrolling:

        change: function() {
            //check whether any data is returned
            if (!this.view()[0]) {
                //disable endless scroll
                $("#ListView").data("kendoMobileListView").stopEndlessScroll();
            }
        }
