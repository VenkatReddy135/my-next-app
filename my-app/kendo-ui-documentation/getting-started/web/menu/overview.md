---
title: Overview
meta_title: Overview of Menu UI widget | Kendo UI Documentation
meta_description: Steps that help you initialize the Menu widget using JSON data object and customize animation.
slug: gs-web-menu-overview
relatedDocs: api-web-menu
tags: getting-started,web
publish: true
---

# Menu Overview

The **Menu** displays hierarchical data as a multi-level menu. It provides rich styling for unordered lists
of items, and can be used for both navigation and executing JavaScript commands. Items can be defined and
initialized from HTML, or the API can be used to add and remove items.


## Getting Started

### Create a HTML hierarchical list of items

    <ul id="menu">
        <li>Normal Item
            <ul>
                <li><span class="k-sprite icon-class"></span>Item with a Sprite</li>
                <li><img src="Icons/contacts.gif" />Item with an Icon</li>
            </ul>
        </li>
        <li><a href="http://www.google.com">Navigation Item</a></li>
        <li class="k-state-active">Active Item</li>
        <li>Template Item
            <div class="k-group k-content">
                Test button - <a class="k-button">Button</a>
            </div>
        </li>
    </ul>

Initialization of a **Menu** should occur after the DOM is fully loaded. It is recommended that
initialization the **Menu** occur within a handler is provided to $(document).ready().

### Initialize a Menu using a selector within $(document).ready()

    $(document).ready(function() {
        $("#menu").kendoMenu();
    });

### Initialize the Menu using JSON data object

    $(document).ready(function() {
     $("#menu").kendoMenu({
      dataSource:
        [{
            text: "Item 1",
            cssClass: "myClass",                         // Add custom CSS class to the item, optional, added 2012 Q3 SP1.
            url: "http://www.kendoui.com"                // Link URL if navigation is needed, optional.
        },
        {
            text: "<b>Item 2</b>",
            encoded: false,                              // Allows use of HTML for item text
            content: "text"                              // content within an item
        },
        {
            text: "Item 3",
            imageUrl: "http://www.kendoui.com/test.jpg", // Item image URL, optional.
            items: [{                                    // Sub item collection
                 text: "Sub Item 1"
            },
            {
                 text: "Sub Item 2"
            }]
        },
        {
            text: "Item 4",
            spriteCssClass: "imageClass3"                // Item image sprite CSS class, optional.
        }]
     })
    });

## Customizing Menu Animations


By default, the **Menu** uses a slide animation to expand and
reveal sub-items as the mouse hovers. Animations can be easily
customized using configuration properties, changing the animation
style and delay. Menu items can also be configured to open on click
instead of on hover.

### Changing Menu animation and open behavior

    $("#menu").kendoMenu({
        animation: {
            open: { effects: "fadeIn" },
            duration: 500
        },
        openOnClick: true
    });

## Dynamically configuring Menu items


The **Menu** API provides several methods for dynamically adding
or removing Items. To add items, provide the new item as a JSON
object along with a reference item that will be used to determine the
placement in the hierarchy.



A reference item is simply a target Menu Item HTML element that
already exists in the Menu. Any valid jQuery selector can be used to
obtain a reference to the target item. For examples, see the
[Menu API demos](http://demos.kendoui.com/web/menu/api.html).
Removing an item only requires a reference to the target element that
should be removed.

### Dynamically add a new root Menu item

    var menu = $("#menu").kendoMenu().data("kendoMenu");
    menu.insertAfter(
        { text: "New Menu Item" },
        menu.element.children("li:last")
    );

## Accessing an Existing Menu


You can reference an existing **Menu** instance via
[jQuery.data()](http://api.jquery.com/jQuery.data/).
Once a reference has been established, you can use the API to control
its behavior.

### Accessing an existing Menu instance

    var menu = $("#menu").data("kendoMenu");

## Keyboard Navigation

The Menu provides keyboard navigation once it gains focus (either programmatically or as a result of a user click). Initially, the first root item is activated.
The following keys and user actions are supported:

* Left and right arrow keys move the active item left and right on the root level of horizontal Menus.
* Up and down arrow keys move the active item up and down of vertical Menu item groups.
* Down arrow opens an item group a horizontal Menu.
* Right arrow opens an item group of a vertical Menu.
* Left arrow closes an item group.
* Right arrow moves the active state to the next root item of a horizontal Menu, if the previous active item has been inside an item group.
* Escape closes an item group.
* (Shift+) Tab blurs the Menu and moves focus to the next (previous) focusable page element.
