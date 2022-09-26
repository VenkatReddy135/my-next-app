---
title: kendo.ui.Draggable
slug: api-framework-draggable
tags: api,framework
meta_title: Draggable UI Widget | Kendo UI API Documentation
meta_description: Configuration steps and types of events which are triggered in Kendo UI Draggable.
publish: true
---

# kendo.ui.Draggable

## Configuration

### axis `String`*(default: null)*

 Constrains the hint movement to either the horizontal (x) or vertical (y) axis. Can be set to either "x" or "y".

#### Example - initialize horizontally draggable element

    <div id="draggable"></div>

    <script>
      $("#draggable").kendoDraggable({
        hint: function(element) {
          return element.clone();
        },
        axis: "x"
      });
    </script>
    <style>
      #draggable {
        width: 50px;
        height: 50px;
        background-color: orange;
        border: 2px solid green;
      }
    </style>

### container `jQuery`

If set, the hint movement is constrained to the container boundaries.

#### Example

    <div id="container">
      <div id="draggable"></div>
    </div>

    <script>
      $("#draggable").kendoDraggable({
        hint: function(element) {
          return element.clone();
        },
        container: $("#container")
      });
    </script>
    <style>
      #container {
        width: 200px;
        height: 200px;
        border: 1px dashed red;
      }
      #draggable {
        width: 50px;
        height: 50px;
        background-color: orange;
        border: 2px solid green;
      }
    </style>

### cursorOffset `Object`*(default: null)*

 If set, specifies the offset of the hint relative to the mouse cursor/finger.
By default, the hint is initially positioned on top of the draggable source offset. The option accepts an object with two keys: `top` and `left`.

#### Example

    <div id="draggable"></div>

    <script>
      $("#draggable").kendoDraggable({
        hint: function(element) {
          return element.clone();
        },
        cursorOffset: { top: 30, left: 100 }
      });
    </script>
    <style>
      #draggable {
        width: 50px;
        height: 50px;
        background-color: orange;
        border: 2px solid green;
      }
    </style>

### distance `Number`*(default: 5)*

 The required distance that the mouse should travel in order to initiate a drag.

#### Example

    <div id="draggable"></div>

    <script>
      $("#draggable").kendoDraggable({
        hint: function(element) {
          return element.clone();
        },
        distance: 50
      });
    </script>
    <style>
      #draggable {
        width: 50px;
        height: 50px;
        background-color: orange;
        border: 2px solid green;
      }
    </style>

### filter `Selector`

Selects child elements that are draggable if a widget is attached to a container.

#### Example

    <div id="container">
      <div class="draggable"></div>
      <div class="static"></div>
      <div class="static"></div>
      <div class="static"></div>
      <div class="draggable"></div>
    </div>
    <script>
      $("#container").kendoDraggable({
        filter: ".draggable",
        hint: function(element) {
          return element.clone();
        }
      });
    </script>
    <style>
      .draggable, .static {
        width: 50px;
        height: 50px;
        border: 2px solid green;
        margin: 5px;
      }
      .draggable { background-color: orange; }
      .static{ background-color: purple; }
    </style>

### group `String`*(default: "default")*

 Used to group sets of draggable and drop targets. A draggable with the same group value as a drop target will be accepted by the drop target.

#### Example - grouping draggable elements

    <div class="orange"></div>
    <div class="orange"></div>
    <div class="purple"></div>
    <div class="purple"></div>
    <div id="orangeArea"></div>
    <div id="purpleArea"></div>

    <script>
      $(".orange").kendoDraggable({
        group: "orangeGroup",
        hint: function(element) {
          return element.clone();
        }
      });

      $(".purple").kendoDraggable({
        group: "purpleGroup",
        hint: function(element) {
          return element.clone();
        }
      });

      $("#orangeArea").kendoDropTarget({ group: "orangeGroup", drop: onDrop });
      $("#purpleArea").kendoDropTarget({ group: "purpleGroup", drop: onDrop });

      function onDrop(e) {
        e.draggable.destroy();
        e.draggable.element.remove();
      }
    </script>
    <style>
      .orange, .purple{
        width: 50px;
        height: 50px;
        border: 2px solid green;
        margin: 5px;
      }
      #orangeArea, #purpleArea {
        width: 200px;
        height: 200px;
        border: 2px solid green;
        margin: 5px;
      }
      .orange, #orangeArea { background-color: orange; }
      .purple, #purpleArea { background-color: purple; }
    </style>

### hint `Function | jQuery`

Provides a way for customization of the drag indicator. If a function is supplied, it receives one argument - the draggable element's jQuery object.

#### Example - customizing draggable tooltip

    <div id="draggable"></div>

    <script>
      $("#draggable").kendoDraggable({
        hint: function(element) {
          var hintElement = $("<div id='hint'></div>");
          hintElement.css({
            "background-image": "url('http://www.kendoui.com/image/kendo-logo.png')",
            "width": "230px",
            "height": "80px"
          });
          return hintElement;
        }
      });
    </script>
    <style>
      #draggable {
        width: 50px;
        height: 50px;
        background-color: orange;
        border: 2px solid green;
      }
    </style>

## Events

### drag

Fires while dragging.

#### Example - bind during the initialization

    <div id="draggable"></div>

    <script>
      $("#draggable").kendoDraggable({
        hint: function(element) {
          return element.clone();
        },
        drag: function(e) {
          console.log("x: ", e.screenX, "y: ", e.screenY);
        }
      });
    </script>
    <style>
      #draggable {
        width: 50px;
        height: 50px;
        background-color: orange;
        border: 2px solid green;
      }
    </style>

#### Example - hook up to the event via bind method after initialization

    <div id="draggable"></div>

    <script>
      $("#draggable").kendoDraggable({
        hint: function(element) {
          return element.clone();
        }
      });

      $("#draggable").data("kendoDraggable").bind("drag", function(e) {
        console.log("x: ", e.screenX, "y: ", e.screenY);
      });
    </script>
    <style>
      #draggable {
        width: 50px;
        height: 50px;
        background-color: orange;
        border: 2px solid green;
      }
    </style>

### dragcancel

Fires when item drag is canceled by pressing the Escape key.

#### Example

    <div id="draggable"></div>

    <script>
      $("#draggable").kendoDraggable({
        hint: function(element) {
          return element.clone();
        },
        dragcancel: function(e) {
          console.log("'Esc' key pressed! Dragging is cancelled.");
        }
      });
    </script>
    <style>
      #draggable {
        width: 50px;
        height: 50px;
        background-color: orange;
        border: 2px solid green;
      }
    </style>

### dragend

Fires when item drag ends.

#### Example - show draggable element on dragend

    <div id="draggable"></div>

    <script>
      $("#draggable").kendoDraggable({
        hint: function(element) {
          return element.clone();
        },
        dragstart: function(e) {
          e.currentTarget.hide();
        },
        dragend: function(e) {
          e.currentTarget.show();
        }
      });
    </script>
    <style>
      #draggable {
        width: 50px;
        height: 50px;
        background-color: orange;
        border: 2px solid green;
      }
    </style>

### dragstart

Fires when item drag starts.

#### Example - hide draggable element on dragend

    <div id="draggable"></div>

    <script>
      $("#draggable").kendoDraggable({
        hint: function(element) {
          return element.clone();
        },
        dragstart: function(e) {
          e.currentTarget.hide();
        },
        dragend: function(e) {
          e.currentTarget.show();
        }
      });
    </script>
    <style>
      #draggable {
        width: 50px;
        height: 50px;
        background-color: orange;
        border: 2px solid green;
      }
    </style>
