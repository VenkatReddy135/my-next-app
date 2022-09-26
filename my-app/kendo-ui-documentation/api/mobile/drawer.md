---
title: kendo.mobile.ui.Drawer
meta_title: Configuration, methods and events of Kendo UI Mobile Drawer
meta_description: Set direction of the Kendo UI Mobile Drawer container, use methods to show and hide it.
slug: api-mobile-drawer
relatedDocs: gs-mobile-drawer
tags: api,mobile
publish: true
---

# kendo.mobile.ui.Drawer

Represents the Kendo UI Mobile Drawer widget. Inherits from [kendo.mobile.ui.View](/api/framework/view).

## Configuration

### position `String` *(default: 'left')*

The position of the drawer. Can be `left` (default) or `right`.

#### Right positioned drawer

    <div data-role="view" id="drawer-settings">
        <h1>Settings</h1>
    </div>

    <div data-role="drawer" id="my-drawer" data-position="right">
        Hi!
    </div>

    <script>
    new kendo.mobile.Application();
    </script>

### title `String`

The text to display in the Navbar title (if present).

### views `Array`

A list of the view ids on which the drawer will appear. If omitted, the drawer can be revealed on any view in the application.

#### Example

    <div data-role="view" id="drawer-settings">
        <h1>Settings</h1>
        <a href="#bar" data-role="button">Go to bar</a>
    </div>

    <div data-role="view" id="bar">
        Drawer will not work here
        <a href="#drawer-settings" data-role="button">Back to settings</a>
    </div>

    <div data-role="drawer" id="my-drawer" data-views='["drawer-settings"]'>
        Hi!
    </div>

    <script>
    new kendo.mobile.Application();
    </script>

## Methods

### destroy

Prepares the **Drawer** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.

> **Important:** This method does not remove the Drawer element from DOM.

#### Example

    <div data-role="view" id="drawer-settings">
        <h1>Settings</h1>
        <a data-role="button" data-click="destroyDrawer">Destroy Drawer</a>
    </div>

    <div data-role="drawer" id="my-drawer">
        Hi!
    </div>

    <script>
    new kendo.mobile.Application();
    function destroyDrawer() {
        $("#my-drawer").data("kendoMobileDrawer").destroy();
    }
    </script>

### hide

Hide the Drawer

#### Example

    <div data-role="view" id="drawer-settings">
        <h1>Settings</h1>
    </div>

    <div data-role="drawer" id="my-drawer">
        Hi!
        <a data-click="hideDrawer" data-role="button">Hide me</a>
    </div>

    <script>
    new kendo.mobile.Application();
    function hideDrawer() {
        $("#my-drawer").data("kendoMobileDrawer").hide();
    }
    </script>

### show

Show the Drawer

#### Example

    <div data-role="view" id="drawer-settings">
        <h1>Settings</h1>
        <a data-click="showDrawer" data-role="button">Show drawer</a>
    </div>

    <div data-role="drawer" id="my-drawer">
        Hi!
    </div>

    <script>
    new kendo.mobile.Application();

    function showDrawer() {
        $("#my-drawer").data("kendoMobileDrawer").show();
    }
    </script>


## Events

### beforeShow

Fires before the mobile Drawer is revealed. The event can be prevented by calling the `preventDefault` method of the event parameter.

#### Example

    <div data-role="view" id="drawer-settings">
        <h1>Settings</h1>
    </div>

    <div data-role="drawer" data-before-show="prevent">
        I will not be displayed
    </div>

    <script>
    new kendo.mobile.Application();

    function prevent(e) {
        e.preventDefault();
    }
    </script>

### hide

Fired when the mobile Drawer is closed by the user.

#### Example

    <div data-role="view" id="drawer-settings">
        <h1>Settings</h1>
    </div>

    <div data-role="drawer" id="foo" data-hide="onHide">
        Foo
    </div>

    <script>
    new kendo.mobile.Application();

    function onHide(e) {
        console.log(e);
    }
    </script>

#### Event Data

##### e.sender `kendo.mobile.ui.Drawer`

The widget instance which fired the event.

### init

Fired when the mobile Drawer and its child widgets are initialized.

#### Example

    <div data-role="view" id="drawer-settings">
        <h1>Settings</h1>
    </div>

    <div data-role="drawer" id="foo" data-init="onInit">
        Foo
    </div>

    <script>
    new kendo.mobile.Application();

    function onInit(e) {
        console.log(e);
    }
    </script>

#### Event Data

##### e.sender `kendo.mobile.ui.Drawer`

The widget instance which fired the event.

### show

Fires when the Drawer is shown.

#### Example

    <div data-role="view" id="drawer-settings">
        <h1>Settings</h1>
    </div>

    <div data-role="drawer" id="foo" data-show="onShow">
        Foo
    </div>

    <script>
    new kendo.mobile.Application();

    function onShow(e) {
        console.log(e);
    }
    </script>

#### Event Data

##### e.sender `kendo.mobile.ui.Drawer`

The widget instance which fired the event.
