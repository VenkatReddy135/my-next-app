---
title: Project Organization
slug: kendo-mobile-music-store-organization
tags: Tutorial
publish: true
ordinal: 02
---

# Tutorial: Kendo Music Store: Project Layout and Organization

As with any real-world application, it is important to consider the overall project organization.
If this is not considered up front your application can quickly become difficult to navigate and maintain.
For the Mobile Music Store it was decided to use [require.js](http://requirejs.org/) to set up dependencies between JavaScript files, and load them dynamically.
There is a more in-depth writeup of the steps taken to set up require.js on Jeff Valore's blog: [Making a Well Structured Kendo UI Mobile App in Icenium with Require.js](http://codingwithspike.wordpress.com/2012/11/30/making-a-well-structured-kendo-ui-mobile-app-in-icenium-with-require-js/)

## Application Entry Point and Initialization

The "root" of the application's JavaScript code is contained in `scripts/main.js`. There `require.js` is configured and the main "app" variable is assigned in global scope:

    var app; // global 'gateway' object
    require(["jQuery", "app"], function($, application) {
        $(function() {
            app = application
            application.init();
        });
    });

require.js will then automatically import and run the code in the `app.js` file.
The code in `app.js` then performs the application setup and initialization and returns the main object that will be referenced by the Kendo widgets.

## JS File per View

Each view is given its own file that follows the naming of the view element in HTML. So for example, given the view:

    <div data-role="view" id="artists-view">...</div>

The JavaScript code that works with this view is placed in the file `scripts/artists-view.js`

## Global Error Handler

In a normal web site, you may not care if some JavaScript happens to throw an exception. The web browser will show the error in the console and move on.
However, in a Kendo UI app a JS exception will break execution of the JavaScript and the application may stop responding, appearing to "lock up" to the user.
This is not good for user experience.
At the minimum, we should at least notify the user that an error has occured.
This can be done by using the `window.onerror` event provided by the DOM.
In `app.js` you can see we wire up this global error handler, and have it display an error popup if an exception is caught.

    var _onError = function (error, url, line) {
        utils.showError(error); // show the error message to the user.
    };
    
    window.onerror = _onError;

## Non-view Specific Utility Functions

There are some functions that are used in several places in the application and don't belong to a specific view.
These functions have been placed in the file `scripts/utils.js`

## Views and Layouts per Platform

All views and layouts are contained in `index.html`.
Many of the views have different layouts between iOS and Android to demonstrate the ability to vary the items contained in a layout based on the platform.
These views and layouts generally follow the structure:

    <div id="some-view" data-role="view" layout="some-layout">...</div>
    
    <div data-role="layout" data-id="some-layout">...</div>
    <div data-role="layout" data-id="some-layout" data-platform="android">...</div>

This splits Android to a different set of layout elements leaving iOS and others (Blackberry) on the first layout where no platform is specified.
This is not neccecary for most projects but allowed the Mobile Music Store to better follow the Android 4.x style guide, placing an "Action Bar" at the top of the screen.

## Separating Data from Views

To keep propper separation of concerns, the code used to set up the Kendo DataSources was separated from the view code.
In this case, all DataSources are contained in `scripts/data.js`.
