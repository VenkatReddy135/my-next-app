---
title: kendo.ui.Editor
meta_title: Configuration, methods and events of Kendo UI Editor
meta_description: Help guide for proper configuration of Editor UI widget, and how to use methods and events.
slug: api-web-editor
relatedDocs: gs-web-editor-overview
tags: api,web
publish: true
---

# kendo.ui.Editor

Represents the Kendo UI Editor widget. Inherits from [Widget](/api/framework/widget).

## Configuration

### encoded `Boolean` *(default: true)*

Indicates whether the Editor should submit encoded HTML tags. By default, the submitted value is encoded.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      value: "<p>foo</p>",
      encoded: false
    });
    console.log($("#editor").val()); // logs "<p>foo</p>"
    </script>

### messages `Object`

Defines the text of the labels that are shown within the editor. Used primarily for localization.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      messages: {
        bold: "Bold",
        italic: "Italic",
        underline: "Underline",
        strikethrough: "Strikethrough",
        superscript: "Superscript",
        subscript: "Subscript",
        justifyCenter: "Center text",
        justifyLeft: "Align text left",
        justifyRight: "Align text right",
        justifyFull: "Justify",
        insertUnorderedList: "Insert unordered list",
        insertOrderedList: "Insert ordered list",
        indent: "Indent",
        outdent: "Outdent",
        createLink: "Insert hyperlink",
        unlink: "Remove hyperlink",
        insertImage: "Insert image",
        insertHtml: "Insert HTML",
        fontName: "Select font family",
        fontNameInherit: "(inherited font)",
        fontSize: "Select font size",
        fontSizeInherit: "(inherited size)",
        formatBlock: "Format",
        formatting: "Format",
        style: "Styles",
        emptyFolder: "Empty Folder",
        uploadFile: "Upload",
        orderBy: "Arrange by:",
        orderBySize: "Size",
        orderByName: "Name",
        invalidFileType: "The selected file \"{0}\" is not valid. Supported file types are {1}.",
        deleteFile: "Are you sure you want to delete \"{0}\"?",
        overwriteFile: "A file with name \"{0}\" already exists in the current directory. Do you want to overwrite it?",
        directoryNotFound: "A directory with this name was not found.",
        imageWebAddress: "Web address",
        imageAltText: "Alternate text",
        linkWebAddress: "Web address",
        linkText: "Text",
        linkToolTip: "ToolTip",
        linkOpenInNewWindow: "Open link in new window",
        dialogInsert: "Insert",
        dialogUpdate: "Update",
        dialogButtonSeparator: "or",
        dialogCancel: "Cancel"
      }
    });
    </script>

### stylesheets `Array`

Allows custom stylesheets to be included within the editing area.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      stylesheets: [
        "base.css",
        "theme.css"
      ]
    });
    </script>

### tools `Array`

A collection of tools that are used to interact with the Editor.
Tools may be switched on by specifying their name.
Custom tools and tools that require configuration are defined as objects.

The available editor commands are:

*   Basic text formatting
        - **bold**, **italic**, **underline**, **strikethrough**, **subscript**, **superscript**
*   Font and color
        - **fontName**, **fontSize**, **foreColor**, **backColor**
*   Alignment
        - **justifyLeft**, **justifyCenter**, **justifyRight**, **justifyFull**
*   Lists
        - **insertUnorderedList**, **insertOrderedList**, **indent**, **outdent**
*   Links and images
        - **createLink**, **unlink**, **insertImage**
*   Table editing
        - **createTable**, **addColumnLeft**, **addColumnRight**, **addRowAbove**, **addRowBelow**, **deleteRow**, **deleteColumn**
*   Structural markup and styles
        - **formatting**
*   Snippets
        - **insertHtml**
*   HTML code view
        - **viewHtml**

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      tools: [
        "bold", "italic", "underline"
      ]
    });
    </script>

### tools.name `String`

When specifying a tool as an object, a tool name is required.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      tools: [
        { name: "custom" }
      ]
    });
    </script>

### tools.tooltip `String`

The text which will be displayed when the end-user hovers the tool button with the mouse.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      tools: [
        { name: "bold", tooltip: "Bold the selected text" }
      ]
    });
    </script>

### tools.exec `Function`

The JavaScript function which will be executed when the end-user clicks the tool button.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      tools: [
        {
          name: "custom",
          exec: function(e) {
            var editor = $(this).data("kendoEditor");
            // ...
          }
        }
      ]
    });
    </script>

### tools.items `Array`

For tools that display a list of items (fontName, fontSize, formatting), this option specifies the items in the shown list.

#### Example - specify custom font families

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      tools: [
        {
          name: "fontName",
          items: [
            { text: "Arial/Verdana", value: "Arial,Verdana,sans-serif" }
          ]
        }
      ]
    });
    </script>

### tools.items.text `String`

The string that the popup item will show.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      tools: [
        {
          name: "fontName",
          items: [
            { text: "Default site font", value: "Arial,Verdana,sans-serif" },
            { text: "Monospaced font", value: "monospace" }
          ]
        }
      ]
    });
    </script>

### tools.items.value `String`

The value that will be applied by the tool when this item is selected.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      tools: [
        {
          name: "fontSize",
          items: [
            { text: "12px", value: "12px" },
            { text: "24px", value: "24px" }
          ]
        }
      ]
    });
    </script>

### tools.items.context `String`

Only applicable for the formatting tool. Specifies the context in which the option will be available.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      tools: [
        {
          name: "formatting",
          items: [
            { text: "Title", value: "h1" },

            // will be shown only when selection is in H1
            { text: "Note", value: "span.note", context: "h1" }
          ]
        }
      ]
    });
    </script>

### tools.template `String`

The kendo template that will be used for rendering the given tool.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      tools: [
        {
          name: "custom",
          template: "<button class='k-button'>Save draft</button>"
        }
      ]
    });
    </script>

### imageBrowser `Object`

Configuration for image browser dialog.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          read: "imagebrowser/read",
          destroy: "imagebrowser/destroy",
          create: "imagebrowser/createDirectory",
          uploadUrl: "imagebrowser/upload",
          thumbnailUrl: "imagebrowser/thumbnail"
          imageUrl: "/content/images/{0}",
        },
        path: "/myInitialPath/"
      }
    });
    </script>

### imageBrowser.fileTypes `String` *(default: "*.png,*.gif,*.jpg,*.jpeg")*

Defines the allowed file extensions.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        /* omitted for brevity */
        fileTypes: "*.gif"
      }
    });
    </script>

### imageBrowser.path `String` *(default: "/")*

Defines the initial folder to display, relative to the root.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        /* omitted for brevity */
        path: "/uploads/"
      }
    });
    </script>

### imageBrowser.transport `Object`

Specifies the settings for loading and saving data.

### imageBrowser.transport.read `Object|String`

Options or URL for remote image retrieval.

> **Important:** The value of `transport.read` is passed to [jQuery.ajax](http://api.jquery.com/jQuery.ajax).

#### Example - specify a read URL

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          read: "/imagebrowser/read"
        }
      }
    });
    </script>

### imageBrowser.transport.read.contentType `String` *(default: "application/x-www-form-urlencoded")*

The content-type HTTP header sent to the server. Use `"application/json"` if the content is JSON.
Refer to the [jQuery.ajax](http://api.jquery.com/jQuery.ajax) documentation for further info.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          read: {
            /* omitted for brevity */
            contentType: "application/json"
          }
        }
      }
    });
    </script>

### imageBrowser.transport.read.data `Object|String|Function`

Data to be send to the server.
Refer to the [jQuery.ajax](http://api.jquery.com/jQuery.ajax) documentation for further info.

#### Example - specify Data As Object

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          read: {
            data: {
              id: 42,
              name: "John Doe"
            }
          }
        }
      }
    });
    </script>

#### Example - specify Data As Function

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          read: {
            data: function() {
              return { id: 42, name: "John Doe" };
            }
          }
        }
      }
    });
    </script>

### imageBrowser.transport.read.dataType `String`

The type of data that you're expecting back from the server. Commonly used values are `"json"` and `"jsonp"`.
Refer to the [jQuery.ajax](http://api.jquery.com/jQuery.ajax) documentation for further info.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          read: {
            dataType: "json"
          }
        }
      }
    });
    </script>

### imageBrowser.transport.read.type `String`

The type of request to make (`"POST"`, `"GET`", `"PUT"` or `"DELETE"`), default is "GET".
Refer to the [jQuery.ajax](http://api.jquery.com/jQuery.ajax) documentation for further info.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          read: {
            type: "POST"
          }
        }
      }
    });
    </script>


### imageBrowser.transport.read.url `String|Function`

The remote url to call when fetching list of items.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          read: {
            url: "/read"
          }
        }
      }
    });
    </script>

#### Example - specify Read URL As Function

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          read: {
            url: function(params) {
              // build url
              return "/read?t=" + new Date().getTime();
            }
          }
        }
      }
    });
    </script>

### imageBrowser.transport.thumbnailUrl `String|Function`

The URL for retrieving the thumbnail version of the image. If not specified a default image icon will be shown.
If function is assigned, the current path and image name will be provided.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          thumbnailUrl: "/thumbnail"
        }
      }
    });
    </script>

### imageBrowser.transport.uploadUrl `String`

The URL which will handle the upload of the new images. If not specified the Upload button will not be displayed.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          uploadUrl: "/thumbnail"
        }
      }
    });
    </script>

### imageBrowser.transport.imageUrl `String|Function`

The URL responsible for serving the original image. A file name placeholder should be specified.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          imageUrl: "/content/images/{0}" //the placeholder will be replaced with the current virtual path and selected file name
        }
      }
    });
    </script>

### imageBrowser.transport.destroy `Object|String`

Options or URL which will handle the file and directory deletion. If not specified the delete button will not be present.

> **Important:** The value of `transport.destroy` is passed to [jQuery.ajax](http://api.jquery.com/jQuery.ajax).

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          destroy: "/destroy"
        }
      }
    });
    </script>

### imageBrowser.transport.destroy.contentType `String`

The content-type HTTP header sent to the server. Default is `"application/x-www-form-urlencoded"`. Use `"application/json"` if the content is JSON.
Refer to the [jQuery.ajax](http://api.jquery.com/jQuery.ajax) documentation for further info.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          destroy: {
            contentType: "application/json"
          }
        }
      }
    });
    </script>

### imageBrowser.transport.destroy.data `Object|String|Function`

Data to be send to the server.
Refer to the [jQuery.ajax](http://api.jquery.com/jQuery.ajax) documentation for further info.

#### Example - specify Data As Object

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          destroy: {
            data: {
              id: 42,
              name: "John Doe"
            }
          }
        }
      }
    });
    </script>

#### Example - specify Data As Function

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          destroy: {
            data: function() {
              return {
                id: 42,
                name: "John Doe"
              };
            }
          }
        }
      }
    });
    </script>

### imageBrowser.transport.destroy.dataType `String`

The type of data that you're expecting back from the server. Commonly used values are `"json"` and `"jsonp"`.
Refer to the [jQuery.ajax](http://api.jquery.com/jQuery.ajax) documentation for further info.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          destroy: {
            dataType: "json"
          }
        }
      }
    });
    </script>

### imageBrowser.transport.destroy.type `String`

The type of request to make (`"POST"`, `"GET`", `"PUT"` or `"DELETE"`), default is "GET".
Refer to the [jQuery.ajax](http://api.jquery.com/jQuery.ajax) documentation for further info.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          destroy: {
            type: "POST"
          }
        }
      }
    });
    </script>

### imageBrowser.transport.destroy.url `String|Function`

The remote url to call when creating a new record.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          destroy: {
            url: "/destroy"
          }
        }
      }
    });
    </script>

#### Example - specify Destroy URL As Function

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          destroy: {
            url: function(params) {
              // build url
              return "/destroy?t=" + new Date().getTime();
            }
          }
        }
      }
    });
    </script>

### imageBrowser.transport.create `Object|String`

Options or URL which will handle the directory creation. If not specified that create new folder button will not be present.

> **Important:** The value of `transport.create` is passed to [jQuery.ajax](http://api.jquery.com/jQuery.ajax).

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          create: "/create"
        }
      }
    });
    </script>

### imageBrowser.transport.create.contentType `String`

The content-type HTTP header sent to the server. Default is `"application/x-www-form-urlencoded"`. Use `"application/json"` if the content is JSON.
Refer to the [jQuery.ajax](http://api.jquery.com/jQuery.ajax) documentation for further info.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          create: {
            contentType: "application/json"
          }
        }
      }
    });
    </script>

### imageBrowser.transport.create.data `Object|String|Function`

Data to be send to the server.
Refer to the [jQuery.ajax](http://api.jquery.com/jQuery.ajax) documentation for further info.

#### Example - specify data as object

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          create: {
            data: {
              id: 42,
              name: "John Doe"
            }
          }
        }
      }
    });
    </script>

#### Example - specify data as function

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          create: {
            data: function() {
              return {
                id: 42,
                name: "John Doe"
              };
            }
          }
        }
      }
    });
    </script>

### imageBrowser.transport.create.dataType `String`

The type of data that you're expecting back from the server. Commonly used values are `"json"` and `"jsonp"`.
Refer to the [jQuery.ajax](http://api.jquery.com/jQuery.ajax) documentation for further info.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          create: {
            dataType: "json"
          }
        }
      }
    });
    </script>

### imageBrowser.transport.create.type `String`

The type of request to make (`"POST"`, `"GET`", `"PUT"` or `"DELETE"`), default is "GET".
Refer to the [jQuery.ajax](http://api.jquery.com/jQuery.ajax) documentation for further info.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          create: {
            type: "POST"
          }
        }
      }
    });
    </script>

### imageBrowser.transport.create.url `String|Function`

The remote url to call when creating a new record.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          create: {
            url: "/create"
          }
        }
      }
    });
    </script>

#### Example - specify create url as function

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        transport: {
          create: {
            url: function(params) {
              // build url
              return "/create?t=" + new Date().getTime();
            }
          }
        }
      }
    });
    </script>


### imageBrowser.schema `Object`

Set the object responsible for describing the image raw data format.

### imageBrowser.schema.model `Object`

Set the object which describes the image/directory entry fields. Note that a name, type and size fields should be set.

### imageBrowser.schema.model.id `String`

The name of the field which acts as an identifier.

### imageBrowser.schema.model.fields `Object`

### imageBrowser.schema.model.fields.name `Object|String`

The field which contains the name of the image/directory

### imageBrowser.schema.model.fields.name.field `String`

The name of the field.

### imageBrowser.schema.model.fields.name.parse `Function`

Specifies the function which will parse the field value. If not set default parsers will be used.

### imageBrowser.schema.model.fields.type `Object|String`

The field which contains the type of the entry. Either *f* for image or *d* for directory.

### imageBrowser.schema.model.fields.type.parse `Function`

Specifies the function which will parse the field value. If not set default parsers will be used.

### imageBrowser.schema.model.fields.type.field `String`

The name of the field.

### imageBrowser.schema.model.fields.size `Object|String`

The field which contains the size of image.

### imageBrowser.schema.model.fields.size.field `String`

The name of the field.

### imageBrowser.schema.model.fields.size.parse `Function`

Specifies the function which will parse the field value. If not set default parsers will be used.

### imageBrowser.messages `Object`

Defines texts shown within the image browser.

### imageBrowser.messages.uploadFile `String` *(default: "Upload")*

Defines text for upload button.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        messages: {
          uploadFile: "Upload a file"
        }
      }
    });
    </script>

### imageBrowser.messages.orderBy `String` *(default: "Arrange by")*

Defines text for order by label.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        messages: {
          orderBy: "Order by"
        }
      }
    });
    </script>

### imageBrowser.messages.orderByName `String` *(default: "Name")*

Defines text for Name item of order by drop down list.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        messages: {
          orderByName: "Filename"
        }
      }
    });
    </script>

### imageBrowser.messages.orderBySize `String` *(default: "Size")*

Defines text for Size item of order by drop down list.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        messages: {
          orderBySize: "File size"
        }
      }
    });
    </script>

### imageBrowser.messages.directoryNotFound `String` *(default: "A directory with this name was not found.")*

Defines text for dialog shown when the directory not found error occurs.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        messages: {
          directoryNotFound: "Directory not found!"
        }
      }
    });
    </script>

### imageBrowser.messages.emptyFolder `String` *(default: "Empty Folder")*

Defines text displayed when folder does not contain items.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        messages: {
          emptyFolder: "Folder is empty"
        }
      }
    });
    </script>

### imageBrowser.messages.deleteFile `String` *(default: "Are you sure you want to delete {0}?")*

Defines text for dialog shown when the file or directory is deleted.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        messages: {
          deleteFile: "Are you sure? This action cannot be undone."
        }
      }
    });
    </script>

### imageBrowser.messages.invalidFileType `String` *(default: "The selected file '{0}' is not valid. Supported file types are {1}.")*

Defines text for dialog shown when an invalid file is set for upload.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        messages: {
          invalidFileType: "Supported file types are {1}. Please retry your upload."
        }
      }
    });
    </script>

### imageBrowser.messages.overwriteFile `String` *(default: "A file with name '{0}' already exists in the current directory. Do you want to overwrite it?")*

Defines text for dialog shown when an already existing file is set for upload.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        messages: {
          overwriteFile: "Do you want to overwrite the file with name '{0}'?"
        }
      }
    });
    </script>

### imageBrowser.messages.search `String` *(default: "Search")*

Defines text for search box pleaceholder.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      imageBrowser: {
        messages: {
          search: "Find"
        }
      }
    });
    </script>

## Fields

### body `Element`

The HTML element which represents the editor content area.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    editor.body.style.backgroundColor = "#f00";
    </script>

## Methods

### createRange

Creates a W3C-compatible **Range** object.

#### Parameters

##### document `Document` *(optional)*

The document that the range is associated with. If omitted, the document of the editor editing area will be used.

#### Returns

`Range` The created **Range** object.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    var range = editor.createRange();
    </script>

### destroy
Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.

> **Important:** This method does not remove the Editor element from DOM.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    editor.destroy();
    </script>

### encodedValue

Gets the HTML encoded value of the editor.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({ value: "<p>foo</p>" });
    var editor = $("#editor").data("kendoEditor");
    console.log(editor.encodedValue()); // logs "&lt;p&gt;foo&lt;/p&gt;"
    </script>

### exec

Executes an editor command on the currently selected text.

#### Parameters

##### name `String`

The name of the command to be executed.

##### params `String|Object` *(optional)*

The parameters for the executed command.

##### params.value `Object`

The arguments for commands that expect such

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({ value: "foo" });
    var editor = $("#editor").data("kendoEditor");
    editor.exec("foreColor", { value: "#f00" });
    </script>

### focus

Focuses the editable area.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    editor.focus();
    </script>

### getRange

Gets a **Range** object form the editable area.

#### Returns

`Range` A W3C-compatible **Range** object that represents the currently selected text in the editor area.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    var range = editor.getRange();
    console.log(range);
    </script>

### getSelection

Gets a W3C-compatible **Selection** object form the editable area.

#### Returns

`Selection` a W3C-compatible **Selection** object form the editable area.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    var selection = editor.getSelection();
    console.log(selection);
    </script>

### paste

Pastes HTML into the editable area. Cleans up MS Word formatting.

#### Parameters

##### html `String`

The HTML to be pasted.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    editor.paste("<p>New content</p>");
    </script>

### selectedHtml

Serializes the currently selected text to a XHTML string.

#### Returns

`String` The selectied text as valid XHTML.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    var html = editor.selectedHtml();
    </script>

### refresh

Reinitializes the editing area iframe. Should be used after moving the editor in the DOM.

#### Example

    <textarea id="editor"></textarea>
    <div id="container"></div>
    <script>
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    editor.wrapper.appendTo("#container");
    editor.refresh();
    </script>

### selectRange

Focuses the editable area and selects the range described by the range parameter.

#### Parameters

##### range `Range`

The **Range** object that describes the new selection.

#### Example - select all

    <textarea id="editor"></textarea>
    <div id="container"></div>
    <script>
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    var range = editor.createRange();
    range.selectNodeContents(editor.body);
    editor.selectRange(range);
    </script>

### update

Serializes the current state of the editable area to the `<textarea>` element.
This method should be called after modifying the editor content through the DOM.

#### Example

    <textarea id="editor"></textarea>
    <script>
    var textarea = $("#editor");
    textarea.kendoEditor({ value: "Hello, " });
    var editor = textarea.data("kendoEditor");
    editor.body.appendChild(editor.document.createTextNode("World"));
    console.log(textarea.val()); // logs "Hello, "
    editor.update();
    console.log(textarea.val()); // logs "Hello, World"
    </script>

### state

Get the state of a given tool. Introduced in the 2013.2.923 internal build.

#### Parameters

##### toolName `String`

The name of the tool that will be tested if formatted.

#### Returns

`Boolean` The state of the tool.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    editor.value("<em>foo</em>");
    var range = editor.createRange();
    range.selectNodeContents(editor.body.firstChild);
    editor.selectRange(range);
    console.log(editor.state("italic")); // logs true
    console.log(editor.state("bold")); // logs true
    </script>

### value

Gets or sets the editor value.

#### Parameters

##### value `String`

The value to set.

#### Returns

`String` The value of the Editor as HTML string.

#### Example

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    editor.value("<p>New content</p>");
    console.log(editor.value()); // logs "<p>New content</p>"
    </script>

## Events

### change

Fires when Editor is blurred and its content has changed.

#### Example - subscribe to the "change" event during initialization

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      change: function() {
        console.log(this.value());
      }
    });
    </script>

#### Example - subscribe to the "change" event after initialization

    <textarea id="editor"></textarea>
    <script>
    function editor_change() {
      console.log(this.value());
    }
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    editor.bind("change", editor_change);
    </script>

### execute

Fires when an Editor command is executed.

#### Event Data

##### e.name `String`

The name of the command

##### e.command `Object`

The command instance

#### Example - subscribe to the "execute" event during initialization

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      execute: function(e) {
        console.log("executing command", e.name, e.value);
      }
    });
    </script>

#### Example - subscribe to the "execute" event after initialization

    <textarea id="editor"></textarea>
    <script>
    function editor_execute() {
      console.log("executing command", e.name, e.value);
    }
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    editor.bind("execute", editor_execute);
    </script>

### keydown

Fires when the user depresses a keyboard key. Triggered multiple times if the user holds the key down.

#### Example - subscribe to the "keydown" event during initialization

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      keydown: function(e) {
        console.log("keydown : keyCode=",e.keyCode);
      }
    });
    </script>

#### Example - subscribe to the "keydown" event after initialization

    <textarea id="editor"></textarea>
    <script>
    function editor_keydown() {
      console.log("keydown : keyCode=",e.keyCode);
    }
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    editor.bind("keydown", editor_keydown);
    </script>

### keyup

Fires when the user releases a keyboard key.

#### Example - subscribe to the "keyup" event during initialization

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      keyup: function(e) {
        console.log("keyup : keyCode=",e.keyCode);
      }
    });
    </script>

#### Example - subscribe to the "keyup" event after initialization

    <textarea id="editor"></textarea>
    <script>
    function editor_keyup() {
      console.log("keyup : keyCode=",e.keyCode);
    }
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    editor.bind("keyup", editor_keyup);
    </script>

#### Example - show word count

    <textarea id="editor"></textarea>
    <div id="words"></div>
    <script>
    function wordCount(value) {
      return $.trim(value.replace(/<.*?>/g, " "))
        .replace(/['";:,.?\-!]+/g, '')
        .match(/\S+/g).length;
    }

    $("#editor").kendoEditor({
      keyup: function(e) {
        $("#words").text(wordCount(this.value()) + " words");
      }
    });
    </script>

### paste

Fires before the content is pasted in the Editor.

#### Event Data

##### e.html `Object`

The pasted content

#### Example - subscribe to the "paste" event during initialization

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      paste: function(e) {
        console.log(e.html);
      }
    });
    </script>

#### Example - subscribe to the "paste" event after initialization

    <textarea id="editor"></textarea>
    <script>
    function editor_paste(e) {
      console.log(e.html);
    }
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    editor.bind("paste", editor_paste);
    </script>

### select

Fires when the Editor selection has changed.

#### Example - subscribe to the "select" event during initialization

    <textarea id="editor"></textarea>
    <script>
    $("#editor").kendoEditor({
      select: function(e) {
      }
    });
    </script>

#### Example - subscribe to the "select" event after initialization

    <textarea id="editor"></textarea>
    <script>
    function editor_select(e) {
    }
    $("#editor").kendoEditor();
    var editor = $("#editor").data("kendoEditor");
    editor.bind("select", editor_select);
    </script>


## Class Fields

### defaultTools `Array`

An array of tool definitions that are used for initializing the default tools. Note: Editors that are already initialized will not be affected by changes to this array.

#### Example - insert paragraphts on Shift+Enter, line breaks on Enter

    <textarea id="editor"></textarea>
    <script>
    var defaultTools = kendo.ui.Editor.defaultTools;

    defaultTools["insertLineBreak"].options.shift = false;
    defaultTools["insertParagraph"].options.shift = true;

    $("#editor").kendoEditor();
    </script>
