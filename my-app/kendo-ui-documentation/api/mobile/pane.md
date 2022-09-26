---
title: kendo.mobile.ui.Pane
meta_title: Configuration, methods and events of Kendo UI Mobile Pane
meta_description: See how to easily configure the id of the initial mobile View to display, the default Pane layout, loading popup text, default View transition and more.
slug: api-mobile-pane
relatedDocs: gs-mobile-pane
tags: api,mobile
publish: true
---

# kendo.mobile.ui.Pane

## Configuration

### initial `String`

The id of the initial mobile View to display.

#### Example
    <div data-role="splitview">
        <div data-role="pane" data-initial="#bar">

          <div data-role="view" id="foo">
            Foo
          </div>

          <div data-role="view" id="bar">
            Bar
          </div>
        </div>
     </div>

    <script>
    new kendo.mobile.Application();
    </script>

### layout `String`

The id of the default Pane Layout.

#### Example
    <div data-role="splitview">
      <div data-role="pane" data-initial="#bar" data-layout="my">
          <div data-role="view" id="foo">
            Foo
          </div>

          <div data-role="view" id="bar">
            Bar
          </div>

        <div data-role="layout" data-id="my">
          <div data-role="header">Layout Header</div>
        </div>
      </div>
    </div>

    <script>
    new kendo.mobile.Application();
    </script>

### loading `String` *(default: "Loading...")*

The text displayed in the loading popup. Setting this value to false will disable the loading popup.

#### Example

    <div data-role="splitview">
      <div data-role="pane" id="my-pane" data-loading="Wait!">
          <div data-role="view" id="foo" data-show="showLoading">
            Foo
          </div>
        </div>
     </div>

    <script>
    new kendo.mobile.Application();

    function showLoading(e) {
      $("#my-pane").data("kendoMobilePane").showLoading();
    }
    </script>

### portraitWidth `Number`

Sets the pane width in pixels when the device is in portrait position.

### transition `String`

 The default View transition.

#### Example

    <div data-role="splitview">
      <div data-role="pane" data-transition="slide">
          <div data-role="view" id="foo"> <a data-role="button" href="#bar">Bar</a> </div>
          <div data-role="view" id="bar"> <a data-role="button" href="#foo">Foo</a> </div>
        </div>
     </div>

    <script>
    new kendo.mobile.Application();
    </script>

## Methods

### destroy
Prepares the **Pane** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.

> **Important:** This method does not remove the Pane element from DOM.

### hideLoading

Hide the loading animation.

#### Example

    <div data-role="splitview">
      <div data-role="pane" id="my-pane" data-loading="Wait!">
          <div data-role="view" id="foo" data-show="showLoading">
            Foo
          </div>
        </div>
     </div>

    <script>
    new kendo.mobile.Application();

    function showLoading(e) {
      $("#my-pane").data("kendoMobilePane").showLoading();

      setTimeout(function() {
          $("#my-pane").data("kendoMobilePane").hideLoading();
      }, 1000);
    }
    </script>

### navigate

Navigate the local or remote view.

#### Navigate to a remote view

    <div data-role="splitview">
        <div data-role="pane" id="main-pane">
            <div data-role="view">
                <a data-role="button" data-click="goToSettings">Settings</a>
            </div>
        </div>
    </div>

    <script>
    function goToSettings() {
        var pane = $("#main-pane").data("kendoMobilePane");
        pane.navigate("settings.html");
    }

    new kendo.mobile.Application();
    </script>

#### Navigate to a local view

    <div data-role="splitview">
        <div data-role="pane" id="main-pane">
            <div data-role="view"> <a data-role="button" data-click="goToSettings">Settings</a> </div>
            <div data-role="view" id="settings">Settings View</div>
        </div>
    </div>

    <script>
    function goToSettings() {
        var pane = $("#main-pane").data("kendoMobilePane");
        pane.navigate("#settings");
    }

    new kendo.mobile.Application();
    </script>

#### Parameters

##### url `String`

The id or URL of the view.

##### transition `String`

The transition to apply when navigating. See [View Transitions](/getting-started/mobile/application#view-transitions) for more information.

### showLoading

Show the loading animation.

#### Example

    <div data-role="splitview">
      <div data-role="pane" id="my-pane" data-loading="Wait!">
          <div data-role="view" id="foo" data-show="showLoading">
            Foo
          </div>
        </div>
     </div>

    <script>
    new kendo.mobile.Application();

    function showLoading(e) {
      $("#my-pane").data("kendoMobilePane").showLoading();

      setTimeout(function() {
          $("#my-pane").data("kendoMobilePane").hideLoading();
      }, 1000);
    }
    </script>

### view

Get a reference to the current view.

#### Example

    <div data-role="splitview">
      <div data-role="pane" data-init="showLoading" id="my-pane" data-loading="Wait!">
          <div data-role="view" id="foo">
            <a data-click="getView" data-role="button">Get View</a>
          </div>
        </div>
     </div>

    <script>
    new kendo.mobile.Application();

    function getView(e) {
     console.log($("#my-pane").data("kendoMobilePane").view());
    }
    </script>

#### Returns

`kendo.mobile.ui.View` the view instance.

## Events

### navigate

Triggered when pane navigates to a view.

#### Example

    <div data-role="splitview">
      <div data-role="pane" data-navigate="onNavigate">
          <div data-role="view" id="foo"> <a data-role="button" href="#bar">Bar</a> </div>
          <div data-role="view" id="bar"> <a data-role="button" href="#foo">Foo</a> </div>
        </div>
     </div>

    <script>
    function onNavigate(e) {
        console.log(e);
    }

    new kendo.mobile.Application();
    </script>

#### Event Data

##### e.url `jQuery`

The URL of the view

### viewShow

Triggered after the pane displays a view.

#### Example

    <div data-role="splitview">
      <div data-role="pane" data-view-show="viewShown">
          <div data-role="view" id="foo"> <a data-role="button" href="#bar">Bar</a> </div>
          <div data-role="view" id="bar"> <a data-role="button" href="#foo">Foo</a> </div>
        </div>
     </div>

    <script>
    function viewShown(e) {
        console.log(e);
    }
    new kendo.mobile.Application();
    </script>

#### Event Data

##### e.view `kendo.mobile.ui.View`

The displayed view
