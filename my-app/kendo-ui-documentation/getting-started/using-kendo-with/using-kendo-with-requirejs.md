---
title: Using Kendo With RequireJS
slug: gs-using-kendo-with-requirejs
tags: 101, Getting Started, RequireJS
publish: true
---

# Using Kendo with RequireJS

The production (minified) builds of Kendo UI are designed to work with [RequireJS](http://requirejs.org/).  Therefore if you need to use only a few components instead of loading the full "kendo.all.js", you can now declare only the components you need and RequireJS will take care to load any needed dependencies.

For example, supposing you need to use a grid and a menu, your code could look like this (replace VERSION with the Kendo UI version that you want to use):

    <script data-main="http://cdn.kendostatic.com/VERSION/js/jquery.min.js"
            src="http://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.1/require.min.js"></script>
    <script>
      require([ "kendo.menu.min", "kendo.grid.min" ], initApp);
      function initApp() {
          // here it's safe to use kendo.menu and kendo.grid widgets
      }
    </script>

and you don't need to worry about which other files are necessary for the grid and menu widgets.

## Configuring RequireJS

Above we load RequireJS from a CDN, and configure it to load Kendo UI files from the Kendo CDN by using the "data-main" attribute (which also loads jQuery).

In practice, if you use RequireJS you will probably have some files of your own that need to be loaded and those will reside in a different location than Kendo files.  Here is a more complete example of how you could organize things:

    <!-- first, load RequireJS -->
    <script src="require.js"></script>

    <!-- configure RequireJS with two logical paths:
         - "app/" will be used for your files
         - "k/" will be for Kendo UI modules -->

    <script>
      requirejs.config({
          paths: {
              app: "/path/to/your/files",
              k: "http://cdn.kendostatic.com/VERSION/js"
          }
      });

      require([
          "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",
          "app/foo",
          "app/bar",
          "k/kendo.menu.min",
          "k/kendo.grid.min"
      ], initApp);

      function initApp() {
         // main entry point of your application
      }
    </script>

For more information about RequireJS please [visit the website](http://requirejs.org/).

## Not for the bundles!

If you want to use the bundles such as `kendo.web.min.js` or `kendo.all.min.js`, just use a plain `<script>` tag and do the same for any culture files that you might need.

### Rationale

Support for RequireJS in Kendo UI is designed for loading individual components, like `kendo.listview.min.js` -- because, after all, that's what RequireJS is all about.  You can `require([ "kendo.listview.min.js" ])` and it will load automatically any needed dependencies.

If you plan on using the bundles you should not use RequireJS because the bundles already include all the components and RequireJS will be confused about what code is already loaded.  Typical fail scenario:

    require([ "kendo.web.min.js",
              "cultures/kendo.culture.fr.min.js" ], initApp);

The culture files depend on `kendo.core.min.js`.  The contents of this one is already bundled in `kendo.web.min.js` but RequireJS has no way of knowing about that, and will make a request to load `kendo.core`. If it can find it, the only downside is that it'll be loaded twice (which is definitely a bad idea) but if the file is not there it will complain with an error and won't execute your `initApp` function.
