---
title: Artists View
slug: kendo-mobile-music-store-artists-view
tags: Tutorial
publish: true
---

# Tutorial: Kendo Mobile Music Store: Artists View

![artists-view](images/artists-view.png)

The artists view is simmilar to the genres view in that it is a simple list of the available Artists. The HTML for the view is a single &lt;ul&gt; element that is used as a ListView widget.

    <div data-role="view" id="artists-view" data-layout="home-layout" data-title="Albums" data-model="app.artistsView.viewModel" class="km-insetcontent" style="display: none;">
        <ul data-role="indexedlistview" data-bind="source: artists" data-template="artist-list-template" data-fixed-headers="true"></ul>
    </div>

This view uses MVVM bindings against a view model, specified by the attribute `data-model="app.artistsView.viewModel"`.
This view model consists only of the artists data.

    viewModel: kendo.observable({
        artists: data.artistsList
    })

Each genre is rendered into the ListView from the `artist-list-template` template:

    <script id="artist-list-template" type="text/x-kendo-template">
        <a href="\#albums-view?field=ArtistId&operator=eq&value=#=ArtistId#&title=#:encodeURIComponent(Name).replace("'", "%27")#">#=Name#</a>
    </script>

Each artist is an anchor tag that will navigate to the `albums-view` and demonstrates some parameter passing.
In this case we are passing `field` `operator` and `value` parameters to the albums-view that will later be used as a DataSource filter to narrow the results to only this artist.

## Indexed ListView Widget

There was a desire to display an index along the right edge of the ListView to allow the user to fast-scroll through the list.
This was done with a custom widget named the `IndexedListView`. More information on this widget can be found on the `Indexed ListView` page.
