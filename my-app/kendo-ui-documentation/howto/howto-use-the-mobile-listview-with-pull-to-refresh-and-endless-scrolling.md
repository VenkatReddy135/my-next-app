---
title: Use the ListView of Kendo UI Mobile with pull-to-refresh and endless scrolling
slug: howto-use-the-mobile-listview-with-pull-to-refresh-and-endless-scrolling
tags: How-To
publish: true
---

# How-To: Use the ListView of Kendo UI Mobile with pull-to-refresh and endless scrolling

In this how-to, we will examine how to use the [ListView](http://docs.kendoui.com/api/mobile/listview) of Kendo UI Mobile to display dynamic data.

[Check this link to find more information about dynamic data](http://en.wikipedia.org/wiki/Dynamic_data). An excellent example for dynamic data is a Tweet [search](https://dev.twitter.com/docs/api/1.1/get/search/tweets) for [#javascript](http://search.twitter.com/search.json?q=javascript). If we bound the ListView to the Twitter seach API we will show the latest tweets about JavaScript. Because of the dynamic nature of the data these tweets will be outdated and we will
need to update the list. This can be achieved using the 'pull to refresh' pattern invented by [Loren Bricher](https://twitter.com/lorenb). It allows to retrieve the data by pulling the list. The Twitter API on the other hand can return older tweets. They can be shown using the 'endless scrolling' pattern. It allows to load a subset of data when the end of the ListView is reached. Let's implement such mobile application.

## Create a Mobile ListView with pull-to-refresh and endless scrolling

Q: What problem will cause the usage of 'pull to refresh' and 'endless scrolling'?

A: Difficulty to get the correct subset of data.

Here is how the ListView should behave:

1. The ListView loads first page.
2. The users pulls the ListView to update the list. The Twitter search API requires the id of the first data item to dermine whether there are newer tweets. We can send it using the [pullParameters](http://docs.kendoui.com/api/mobile/listview#pullparameters-function) callback.
3. After the update the user decides to scroll down to see older tweets. Here we will need to send the id of the first shown data item, not the newly rendered. Thus the service will return the correct page and will avoid any duplication. First argument of the [endlessScrollParameters](http://docs.kendoui.com/api/mobile/listview#endlessscrollparameters-function) callback exactly this data item.

Let's implement the aforementioned scenario:

** In order to proceed with this "How-to", you will need to know how to build [Kendo Mobile application](http://docs.kendoui.com/howto/build-apps-with-kendo-ui-mobile)

First, we'll define a target HTML element such as a list:

    <ul id="localListView"></ul>

    <script id="pull-to-refresh-template" type="text/x-kendo-template">
        <div class="tweet">
            <img class="pullImage" src="#= profile_image_url #" alt="#= from_user #" />#= text #
            <div class="metadata">
                <a class="sublink" target="_blank" href="http://twitter.com/\\#!/#= from_user #/status/#= id_str #" rel="nofollow">#= kendo.toString(new Date(Date.parse(created_at)), "dd MMM HH:mm") #</a>
                |
                <a class="sublink" href="http://twitter.com/#= from_user #" rel="nofollow">#= from_user #</a>
            </div>
        </div>
    </script>

Next, we will initialize the Mobile ListView by referring the template and defining the pullParameters and endlessScrollParameters callbacks:

    $("#pull-to-refresh-listview").kendoMobileListView({
        dataSource: dataSource,
        pullToRefresh: true,
        appendOnRefresh: true,
        template: $("#pull-to-refresh-template").text(),
        pullParameters: function(item) {
            //item is the first data item in the ListView
            return {
                since_id: item.id_str, //id of the first item in the ListView
                page: 1
            };
        },
        endlessScroll: true,
        endlessScrollParameters: function(firstItem, lastItem) {
            // firstItem - first data item shown in the ListView on initial load
            // lastItem - last data item shown in the ListView on initial load

            if (firstItem) {
                return {
                    max_id: firstItem.id_str
                };
            }
        }
    });

Finally, we will use the additional parameters in the DataSource's parameterMap function:

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
                    since_id: options.since_id, //available when the ListView is pulled.
                    max_id: options.max_id //avaliable when the ListView scrolled down.
                };
            }
        },
        schema: { // describe the result format
            data: "results" // the data which the data source will be bound to is in the "results" field
        }
    });

Here's the live example of the representation (above):

<a class="jsbin-embed" href="http://jsbin.com/ivawam/1/embed?live">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>
