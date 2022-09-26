---
title: Javascript Dependencies
meta_title: Javascript Dependencies
meta_description: A list of scripts that Kendo UI widgets require to work, detailed explanation about all JavaScript files
slug: gs-javascript-dependencies
publish: true
---

# JavaScript files used by Kendo UI

Every Kendo UI widget needs its JavaScript files to be included in order to work properly. This help topic lists the JavaScript files required by each widget.

## Combined Scripts

The following combined scripts are provided in order to simplify development and deployment.

*   **kendo.all.min.js** contains a minified version of all scripts (Web, DataViz and Mobile).

> **Important**: kendo.all.min.js is available in the Kendo UI Complete, Kendo UI Complete for ASP.NET MVC, Kendo UI Complete for JSP and Kendo UI Complete for PHP distributions. The contents of
**kendo.aspnetmvc.min.js** are **not** included in kendo.all.min.js - you need to include kendo.aspnetmvc.min.js in addition to kendo.all.min.js or use the
[custom download builder tool](http://www.kendoui.com/custom-download).

*   **kendo.web.min.js** contains a minified version of all scripts from Kendo UI Web.
*   **kendo.dataviz.min.js** contains a minified version of all scripts from Kendo UI DataViz.
*   **kendo.mobile.min.js** contains a minified version of all scripts from Kendo UI Mobile.

> **Important:** Only one of the **web**, **dataviz**, **mobile** and **all** combined JavaScript files can be included at a time, because they contain some shared scripts. If widgets from
different Kendo UI suites will be used simultaneously, one should either use **kendo.all.min.js** or create a custom combined JavaSript file via the [custom download builder tool](http://www.kendoui.com/custom-download).
In addition, each of the combined script files should not be registered together with an individual widget script from the same suite. For example, `kendo.grid.js` should not be registered together with
`kendo.web.js` or `kendo.all.js`, because they already include the Grid scripts. **Registering duplicate scripts may cause Javascript errors and unexpected behavior.**

## Custom Combined Scripts

Users who own a commercial license can use the [custom download builder tool](http://www.kendoui.com/custom-download)
to create a single JavaScript file which contains only the required widgets and features.

## CDN

The minified versions of all JavaScript files are also available via CDN

    http://cdn.kendostatic.com/<version>/js/<filename>.min.js

**e.g.** `http://cdn.kendostatic.com/2012.2.710/js/kendo.all.min.js`

> **Important:** in order to use HTTPS, you need to directly access the CloudFront CDN

    https://da7xgjtj801h2.cloudfront.net/<version>/js/<filename>.min.js

## jQuery version

The current official version of Kendo UI requires **jQuery 1.9.1**. There are occasions in which a new jQuery version is released, which introduces breaking changes and is not compatible with existing Kendo UI versions.
In such cases we recommend using the previous jQuery version until the next official Kendo UI release that resolves the problems. We normally do not change the jQuery version that is shipped
with Kendo UI for service packs. We can do this for major releases. The following list provides compatibility information about previous major Kendo UI releases:

* Kendo UI 2013.2.716 (Q2 2013) - jQuery 1.9.1
* Kendo UI 2013.1.319 (Q1 2013) - jQuery 1.9.1
* Kendo UI 2012.3.1114 (Q3 2012) - jQuery 1.8.2
* Kendo UI 2012.2.710 (Q2 2012) - jQuery 1.7.1
* Kendo UI 2012.1.322 (Q1 2012) - jQuery 1.7.1
* Kendo UI 2011.3.1129 (Q3 2011) - jQuery 1.7.1

There should be no problem to use another minor jQuery version instead of the specified above, e.g. 1.7.2 instead of 1.7.1.

> Registering a new jQuery instance after the Kendo UI script files will delete all Kendo UI jQuery plugins and Javascript errors will occur.
For more information, please refer to the [Troubleshooting page](/getting-started/troubleshooting#javascript-error-that-jquery-is-unavailable-or-undefined).

## Script tag placement

There is a general recommendation to place `script` tags before the closing `body` tag, so that the scripts are loaded and executed after the HTML markup. The Kendo UI widget
initialization statements are executed in the document.ready event via a jQuery handler. This means that the jQuery must be registered before any Kendo UI initialization statements. When using
the pure client-side-only Kendo UI widgets one can control the initialization statements' placement, so the jQuery script file can be registered at the bottom of the page. The Kendo UI widgets'
server wrappers are self-initialized, which means that each initialization script is rendered right after the widget's HTML markup. In this case the Kendo UI scripts can still be registered
at the end of the page, but the jQuery script must be registered in the `body` before the first Kendo UI widget on the page, or in the page `head`.

## Individual scripts

If more granular control is required, the following script files, either minified or not,
can be included on a per-widget basis.

## Framework

Shared components providing behaviors, data access and other services

### MVVM
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.binder.js

### Core
1. jquery.js
1. kendo.core.js

### Data source
1. jquery.js
1. kendo.core.js
1. kendo.data.odata.js (OData feature)
1. kendo.data.xml.js (XML feature)
1. kendo.data.js

### Effects
1. jquery.js
1. kendo.core.js
1. kendo.fx.js

### Router
1. jquery.js
1. kendo.core.js
1. kendo.router.js

### View
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.binder.js
1. kendo.view.js


## Web

Desktop UI Widgets for mobile-ready Web Sites and Applications

### AutoComplete
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.popup.js
1. kendo.list.js
1. kendo.autocomplete.js

### Calendar
1. jquery.js
1. kendo.core.js
1. kendo.calendar.js

### Color tools
1. jquery.js
1. kendo.core.js
1. kendo.popup.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.slider.js
1. kendo.colorpicker.js

### ComboBox
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.popup.js
1. kendo.list.js
1. kendo.combobox.js

### DatePicker
1. jquery.js
1. kendo.core.js
1. kendo.calendar.js
1. kendo.popup.js
1. kendo.datepicker.js

### DateTimePicker
1. jquery.js
1. kendo.core.js
1. kendo.calendar.js
1. kendo.popup.js
1. kendo.datepicker.js
1. kendo.timepicker.js
1. kendo.datetimepicker.js

### DropDownList
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.popup.js
1. kendo.list.js
1. kendo.dropdownlist.js

### Editor
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.popup.js
1. kendo.list.js
1. kendo.combobox.js
1. kendo.dropdownlist.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.window.js
1. kendo.slider.js
1. kendo.colorpicker.js
1. kendo.selectable.js (Image Browser feature)
1. kendo.listview.js (Image Browser feature)
1. kendo.upload.js (Image Browser feature)
1. kendo.imagebrowser.js (Image Browser feature)
1. kendo.editor.js

### Grid
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.calendar.js (Editing feature)
1. kendo.popup.js (Editing feature)
1. kendo.datepicker.js (Editing feature)
1. kendo.userevents.js (Editing feature)
1. kendo.numerictextbox.js (Editing feature)
1. kendo.validator.js (Editing feature)
1. kendo.binder.js (Editing feature)
1. kendo.editable.js (Editing feature)
1. kendo.draganddrop.js (Editing feature)
1. kendo.window.js (Editing feature)
1. kendo.calendar.js (Filtering feature)
1. kendo.popup.js (Filtering feature)
1. kendo.datepicker.js (Filtering feature)
1. kendo.userevents.js (Filtering feature)
1. kendo.numerictextbox.js (Filtering feature)
1. kendo.list.js (Filtering feature)
1. kendo.dropdownlist.js (Filtering feature)
1. kendo.filtermenu.js (Filtering feature)
1. kendo.popup.js (Column menu feature)
1. kendo.calendar.js (Column menu feature)
1. kendo.datepicker.js (Column menu feature)
1. kendo.userevents.js (Column menu feature)
1. kendo.numerictextbox.js (Column menu feature)
1. kendo.list.js (Column menu feature)
1. kendo.dropdownlist.js (Column menu feature)
1. kendo.filtermenu.js (Column menu feature)
1. kendo.menu.js (Column menu feature)
1. kendo.columnmenu.js (Column menu feature)
1. kendo.userevents.js (Grouping feature)
1. kendo.draganddrop.js (Grouping feature)
1. kendo.groupable.js (Grouping feature)
1. kendo.pager.js (Paging feature)
1. kendo.userevents.js (Selection feature)
1. kendo.selectable.js (Selection feature)
1. kendo.sortable.js (Sorting feature)
1. kendo.userevents.js (Column reordering feature)
1. kendo.draganddrop.js (Column reordering feature)
1. kendo.reorderable.js (Column reordering feature)
1. kendo.userevents.js (Column resizing feature)
1. kendo.draganddrop.js (Column resizing feature)
1. kendo.resizable.js (Column resizing feature)
1. kendo.grid.js

### ListView
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.calendar.js (Editing feature)
1. kendo.popup.js (Editing feature)
1. kendo.datepicker.js (Editing feature)
1. kendo.userevents.js (Editing feature)
1. kendo.numerictextbox.js (Editing feature)
1. kendo.validator.js (Editing feature)
1. kendo.binder.js (Editing feature)
1. kendo.editable.js (Editing feature)
1. kendo.userevents.js (Selection feature)
1. kendo.selectable.js (Selection feature)
1. kendo.listview.js

### Menu
1. jquery.js
1. kendo.core.js
1. kendo.popup.js
1. kendo.menu.js

### MultiSelect
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.popup.js
1. kendo.list.js
1. kendo.multiselect.js

### NumericTextBox
1. jquery.js
1. kendo.core.js
1. kendo.userevents.js
1. kendo.numerictextbox.js

### PanelBar
1. jquery.js
1. kendo.core.js
1. kendo.panelbar.js

### Scheduler
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.popup.js
1. kendo.list.js
1. kendo.dropdownlist.js
1. kendo.calendar.js
1. kendo.datepicker.js
1. kendo.userevents.js
1. kendo.numerictextbox.js
1. kendo.validator.js
1. kendo.binder.js
1. kendo.editable.js
1. kendo.multiselect.js
1. kendo.draganddrop.js
1. kendo.window.js
1. kendo.scheduler.recurrence.js
1. kendo.scheduler.view.js
1. kendo.scheduler.dayview.js (Scheduler Day View feature)
1. kendo.scheduler.agendaview.js (Scheduler Agenda View feature)
1. kendo.scheduler.monthview.js (Scheduler Month View feature)
1. kendo.scheduler.js

### Slider
1. jquery.js
1. kendo.core.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.slider.js

### Splitter
1. jquery.js
1. kendo.core.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.resizable.js
1. kendo.splitter.js

### TabStrip
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.tabstrip.js

### TimePicker
1. jquery.js
1. kendo.core.js
1. kendo.popup.js
1. kendo.timepicker.js

### Tooltip
1. jquery.js
1. kendo.core.js
1. kendo.popup.js
1. kendo.tooltip.js

### TreeView
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.treeview.js

### Upload
1. jquery.js
1. kendo.core.js
1. kendo.upload.js

### Validator
1. jquery.js
1. kendo.core.js
1. kendo.validator.js

### Window
1. jquery.js
1. kendo.core.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.window.js


## DataViz

Data Visualization Widgets for Desktop and Mobile web apps
### Barcode
1. jquery.js
1. kendo.core.js
1. kendo.dataviz.core.js
1. kendo.dataviz.svg.js
1. kendo.dataviz.barcode.js

### Output: Canvas
1. jquery.js
1. kendo.core.js
1. kendo.dataviz.core.js
1. kendo.dataviz.canvas.js

### Chart
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.userevents.js
1. kendo.dataviz.core.js
1. kendo.dataviz.svg.js
1. kendo.dataviz.chart.js (Polar & Radar feature)
1. kendo.dataviz.chart.polar.js (Polar & Radar feature)
1. kendo.dataviz.chart.js

### Core
1. jquery.js
1. kendo.core.js
1. kendo.dataviz.core.js

### Gauge
1. jquery.js
1. kendo.core.js
1. kendo.dataviz.core.js
1. kendo.dataviz.svg.js
1. kendo.dataviz.gauge.js

### QRCode
1. jquery.js
1. kendo.core.js
1. kendo.dataviz.core.js
1. kendo.dataviz.svg.js
1. kendo.dataviz.qrcode.js

### Sparkline
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.userevents.js
1. kendo.dataviz.core.js
1. kendo.dataviz.svg.js
1. kendo.dataviz.chart.js
1. kendo.dataviz.sparkline.js

### StockChart
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.userevents.js
1. kendo.dataviz.core.js
1. kendo.dataviz.svg.js
1. kendo.dataviz.chart.js
1. kendo.dataviz.stockchart.js

### Themes
1. jquery.js
1. kendo.core.js
1. kendo.dataviz.core.js
1. kendo.dataviz.themes.js

## Mobile

Framework and Widgets for Mobile Applications

### ActionSheet
1. jquery.js
1. kendo.core.js
1. kendo.popup.js
1. kendo.fx.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.mobile.scroller.js
1. kendo.mobile.view.js
1. kendo.mobile.loader.js
1. kendo.mobile.pane.js
1. kendo.router.js
1. kendo.mobile.application.js
1. kendo.mobile.popover.js
1. kendo.mobile.shim.js
1. kendo.mobile.actionsheet.js

### Application
1. jquery.js
1. kendo.core.js
1. kendo.fx.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.mobile.scroller.js
1. kendo.mobile.view.js
1. kendo.mobile.loader.js
1. kendo.mobile.pane.js
1. kendo.router.js
1. kendo.mobile.application.js

### Button
1. jquery.js
1. kendo.core.js
1. kendo.fx.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.mobile.scroller.js
1. kendo.mobile.view.js
1. kendo.mobile.loader.js
1. kendo.mobile.pane.js
1. kendo.router.js
1. kendo.mobile.application.js
1. kendo.mobile.button.js

### ButtonGroup
1. jquery.js
1. kendo.core.js
1. kendo.fx.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.mobile.scroller.js
1. kendo.mobile.view.js
1. kendo.mobile.loader.js
1. kendo.mobile.pane.js
1. kendo.router.js
1. kendo.mobile.application.js
1. kendo.mobile.buttongroup.js

### Drawer
1. jquery.js
1. kendo.core.js
1. kendo.fx.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.mobile.scroller.js
1. kendo.mobile.view.js
1. kendo.mobile.loader.js
1. kendo.mobile.pane.js
1. kendo.router.js
1. kendo.mobile.application.js
1. kendo.mobile.drawer.js

### ListView
1. jquery.js
1. kendo.core.js
1. kendo.data.js
1. kendo.fx.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.mobile.scroller.js
1. kendo.mobile.view.js
1. kendo.mobile.loader.js
1. kendo.mobile.pane.js
1. kendo.router.js
1. kendo.mobile.application.js
1. kendo.mobile.listview.js

### ModalView
1. jquery.js
1. kendo.core.js
1. kendo.popup.js
1. kendo.mobile.shim.js
1. kendo.fx.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.mobile.scroller.js
1. kendo.mobile.view.js
1. kendo.mobile.loader.js
1. kendo.mobile.pane.js
1. kendo.router.js
1. kendo.mobile.application.js
1. kendo.mobile.modalview.js

### NavBar
1. jquery.js
1. kendo.core.js
1. kendo.fx.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.mobile.scroller.js
1. kendo.mobile.view.js
1. kendo.mobile.loader.js
1. kendo.mobile.pane.js
1. kendo.router.js
1. kendo.mobile.application.js
1. kendo.mobile.navbar.js

### PopOver
1. jquery.js
1. kendo.core.js
1. kendo.popup.js
1. kendo.fx.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.mobile.scroller.js
1. kendo.mobile.view.js
1. kendo.mobile.loader.js
1. kendo.mobile.pane.js
1. kendo.router.js
1. kendo.mobile.application.js
1. kendo.mobile.popover.js

### Scroller
1. jquery.js
1. kendo.core.js
1. kendo.fx.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.mobile.scroller.js

### ScrollView
1. jquery.js
1. kendo.core.js
1. kendo.fx.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.mobile.scroller.js
1. kendo.mobile.view.js
1. kendo.mobile.loader.js
1. kendo.mobile.pane.js
1. kendo.router.js
1. kendo.mobile.application.js
1. kendo.mobile.scrollview.js

### SplitView
1. jquery.js
1. kendo.core.js
1. kendo.fx.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.mobile.scroller.js
1. kendo.mobile.view.js
1. kendo.mobile.loader.js
1. kendo.mobile.pane.js
1. kendo.router.js
1. kendo.mobile.application.js
1. kendo.mobile.splitview.js

### Switch
1. jquery.js
1. kendo.core.js
1. kendo.fx.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.mobile.scroller.js
1. kendo.mobile.view.js
1. kendo.mobile.loader.js
1. kendo.mobile.pane.js
1. kendo.router.js
1. kendo.mobile.application.js
1. kendo.mobile.switch.js

### TabStrip
1. jquery.js
1. kendo.core.js
1. kendo.fx.js
1. kendo.userevents.js
1. kendo.draganddrop.js
1. kendo.mobile.scroller.js
1. kendo.mobile.view.js
1. kendo.mobile.loader.js
1. kendo.mobile.pane.js
1. kendo.router.js
1. kendo.mobile.application.js
1. kendo.mobile.tabstrip.js

### Touch
1. jquery.js
1. kendo.core.js
1. kendo.userevents.js
1. kendo.touch.js