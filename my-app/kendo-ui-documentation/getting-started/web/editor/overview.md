---
title: Overview
meta_title: Overview of Editor UI widget | Kendo UI Documentation
meta_description: The documentation guide will help you initialize Kendo web editor and proceed with its configuration.
slug: gs-web-editor-overview
relatedDocs: api-web-editor
tags: getting-started,web
ordinal: 1
publish: true
---

# Editor Overview

The Editor allows users to create rich text content by means of a WYSIWYG interfance. The generated widget value is an XHTML markup.

## Getting Started

### Creating an **Editor** from existing HTML element

      <textarea id="editor" rows="10" cols="30"></textarea>

### Initialize the Kendo Editor

      $(document).ready(function(){
          $("#editor").kendoEditor();
      });

## Configuring the Editor

The editor tools can be configured through the [`tools` configuration option](/api/web/editor#tools).

### Specifying a set of Editor tools

       $(document).ready(function(){
          $("#editor").kendoEditor({
             tools: [
                 "bold",
                 "italic",
                 "underline",
                 "foreColor"
             ]
          });
      });

If no specific tools are defined, the Editor will create its default set of tools for text formatting.

## Specifying custom tools

The Editor functionality can be extended through custom tools, defined in the `tools` array alongside built-in tools.

### Adding a custom tool button

       $("#editor").kendoEditor({
           tools: [
               {
                   name: "toolName",
                   tooltip: "Custom editor tool",
                   exec: function(e) {
                       var editor = $(this).data("kendoEditor");

                       // execute command
                   }
               }
           ]
       });

The custom buttons get a **k-toolName** CSS class to allow styling. (where `toolName` is the name specified in the custom tool configuration)

## Sizing

Until version **2012.3.1114 (Q3 2012)** the Editor assumed the pixel offset width of the `textarea` from which it was created. From this moment on, the widget behaves in the following way:

* If explicit width or height is set to the `textarea` via inline style, the Editor will apply the same
* Otherwise, the Editor will be 100% wide and will apply its default height of 250px

If the `textarea` has width and height applied via external CSS styles, a similar approach should be used for the Editor, e.g. by using its `k-editor` CSS class.

Textarea `cols` and `rows` attributes are required and they also can incluence the dimensions of a `textarea` element, however, these attributes are not applied in a consistent manner by browsers,
so the Editor ignores them when determining its size.
