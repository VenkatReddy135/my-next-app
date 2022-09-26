---
title: kendo.mobile.ui.ModalView
meta_title: Configuration, methods and events of Kendo UI Mobile ModalView
meta_description: Set height and width of the Kendo UI Mobile ModalView container in pixels, use methods to open and close it.
slug: api-mobile-modalview
relatedDocs: gs-mobile-modalview
tags: api,mobile
publish: true
---

# kendo.mobile.ui.ModalView

Represents the Kendo UI Mobile ModalView widget. Inherits from [kendo.mobile.ui.Widget](/api/framework/mobilewidget).

## Example
    <div data-role="view">
      <a href="#my-modal" data-rel="modalview" data-role="button">Open Modal</a>
    </div>

    <div data-role="modalview" id="my-modal" style="width: 200px; height: 200px;">
      Hello!
    </div>

    <script>
    new kendo.mobile.Application();
    </script>

## Configuration

### height `Number`

The height of the ModalView container in pixels. If not set, the element style is used.

#### Example
    <div data-role="view">
      <a href="#my-modal" data-rel="modalview" data-role="button">Open Modal</a>
    </div>

    <div data-role="modalview" id="my-modal" style="width: 200px; height: 200px;">
      Hello!
    </div>

    <script>
    new kendo.mobile.Application();
    </script>

### modal `Boolean`*(default: true)*

When set to false, the ModalView will close when the user taps outside of its element.

#### Example
    <div data-role="view">
      <a href="#my-modal" data-rel="modalview" data-role="button">Open Modal</a>
    </div>

    <div data-role="modalview" id="my-modal" data-width="200" data-height="200" data-modal="false">
      Hello!
    </div>

    <script>
    new kendo.mobile.Application();
    </script>

### width `Number`

The width of the ModalView container in pixels. If not set, the element style is used.

#### Example
    <div data-role="view">
      <a href="#my-modal" data-rel="modalview" data-role="button">Open Modal</a>
    </div>

    <div data-role="modalview" id="my-modal" style="width: 200px; height: 200px;">
      Hello!
    </div>

    <script>
    new kendo.mobile.Application();
    </script>

## Methods

### close

Close the ModalView

#### Example

    <div data-role="view">
        <a data-role="button"  data-click="openModal">open</a>
    </div>

    <div data-role="modalview" id="foo" style="width: 200px; height: 200px">
        <a data-role="button"  data-click="closeModal">Close</a>
    </div>

    <script>
    function openModal() {
       $("#foo").data("kendoMobileModalView").open();
    }

    function closeModal() {
       $("#foo").data("kendoMobileModalView").close();
    }

    new kendo.mobile.Application();
    </script>

### destroy

Prepares the **ModalView** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.

> **Important:** This method does not remove the ModalView element from DOM.

### open

Open the ModalView

#### Example

    <div data-role="view">
        <a data-role="button"  data-click="openModal">open</a>
    </div>

    <div data-role="modalview" id="foo" style="width: 200px; height: 200px">
        <a data-role="button"  data-click="closeModal">Close</a>
    </div>

    <script>
    function openModal() {
       $("#foo").data("kendoMobileModalView").open();
    }

    function closeModal() {
       $("#foo").data("kendoMobileModalView").close();
    }

    new kendo.mobile.Application();
    </script>

#### Parameters

##### target `jQuery`

(optional) The target of the ModalView

## Events

### close

Fired when the mobile ModalView is closed by the user.

#### Example

    <div data-role="view">
        <a data-role="button" href="#foo" data-rel="modalview">Foo</a>
    </div>

    <div data-role="modalview" id="foo" data-close="onClose">
        Foo
    </div>

    <script>
    function onClose(e) {
        // handle event
    }

    new kendo.mobile.Application();
    </script>

#### Event Data

##### e.sender `kendo.mobile.ui.ModalView`

The widget instance which fired the event.

### init

Fired when the mobile ModalView and its child widgets are initialized.

#### Example

    <div data-role="view">
        <a data-role="button" href="#foo" data-rel="modalview">Foo</a>
    </div>

    <div data-role="modalview" id="foo" data-init="onInit">
        Foo
    </div>

    <script>
    function onInit(e) {
        console.log(e.target); // <a href="#foo" ...
    }

    new kendo.mobile.Application();
    </script>

#### Event Data

##### e.sender `kendo.mobile.ui.ModalView`

The widget instance which fired the event.

### open

Fires when the ModalView is shown.

#### Example

    <div data-role="view">
        <a data-role="button" href="#foo" data-rel="modalview">Foo</a>
    </div>

    <div data-role="modalview" id="foo" data-open="logTarget">
        Foo
    </div>

    <script>
    function logTarget(e) {
        console.log(e.target); // <a href="#foo" ...
    }

    new kendo.mobile.Application();
    </script>

#### Event Data

##### e.target `jQuery`

The invocation target of the ModalView.
