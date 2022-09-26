---
title: editor-imageBrowser-transport
slug: jsp-editor-imageBrowser-transport
tags: api, java
publish: true
---

# \<kendo:editor-imageBrowser-transport\>

Specifies the settings for loading and saving data.

#### Example
    <kendo:editor-imageBrowser>
        <kendo:editor-imageBrowser-transport></kendo:editor-imageBrowser-transport>
    </kendo:editor-imageBrowser>

## Configuration Attributes

### create `java.lang.String`

Options or URL which will handle the directory creation. If not specified that create new folder button will not be present. Further configuration is available via [kendo:editor-imageBrowser-transport-create](#kendo-editor-imageBrowser-transport-create). 

#### Example
    <kendo:editor-imageBrowser-transport create="create">
    </kendo:editor-imageBrowser-transport>

### destroy `java.lang.String`

Options or URL which will handle the file and directory deletion. If not specified the delete button will not be present. Further configuration is available via [kendo:editor-imageBrowser-transport-destroy](#kendo-editor-imageBrowser-transport-destroy). 

#### Example
    <kendo:editor-imageBrowser-transport destroy="destroy">
    </kendo:editor-imageBrowser-transport>

### imageUrl `java.lang.String`

The URL responsible for serving the original image. A file name placeholder should be specified.

#### Example
    <kendo:editor-imageBrowser-transport imageUrl="imageUrl">
    </kendo:editor-imageBrowser-transport>

### read `java.lang.String`

Options or URL for remote image retrieval. Further configuration is available via [kendo:editor-imageBrowser-transport-read](#kendo-editor-imageBrowser-transport-read). 

#### Example
    <kendo:editor-imageBrowser-transport read="read">
    </kendo:editor-imageBrowser-transport>

### thumbnailUrl `java.lang.String`

The URL for retrieving the thumbnail version of the image. If not specified a default image icon will be shown.
If function is assigned, the current path and image name will be provided.

#### Example
    <kendo:editor-imageBrowser-transport thumbnailUrl="thumbnailUrl">
    </kendo:editor-imageBrowser-transport>

### uploadUrl `java.lang.String`

The URL which will handle the upload of the new images. If not specified the Upload button will not be displayed.

#### Example
    <kendo:editor-imageBrowser-transport uploadUrl="uploadUrl">
    </kendo:editor-imageBrowser-transport>


##  Configuration JSP Tags

### kendo:editor-imageBrowser-transport-create

Options or URL which will handle the directory creation. If not specified that create new folder button will not be present.

More documentation is available at [kendo:editor-imageBrowser-transport-create](editor/imagebrowser-transport-create).

#### Example

    <kendo:editor-imageBrowser-transport>
        <kendo:editor-imageBrowser-transport-create></kendo:editor-imageBrowser-transport-create>
    </kendo:editor-imageBrowser-transport>

### kendo:editor-imageBrowser-transport-destroy

Options or URL which will handle the file and directory deletion. If not specified the delete button will not be present.

More documentation is available at [kendo:editor-imageBrowser-transport-destroy](editor/imagebrowser-transport-destroy).

#### Example

    <kendo:editor-imageBrowser-transport>
        <kendo:editor-imageBrowser-transport-destroy></kendo:editor-imageBrowser-transport-destroy>
    </kendo:editor-imageBrowser-transport>

### kendo:editor-imageBrowser-transport-read

Options or URL for remote image retrieval.

More documentation is available at [kendo:editor-imageBrowser-transport-read](editor/imagebrowser-transport-read).

#### Example

    <kendo:editor-imageBrowser-transport>
        <kendo:editor-imageBrowser-transport-read></kendo:editor-imageBrowser-transport-read>
    </kendo:editor-imageBrowser-transport>


## Event Attributes

### thumbnailUrl `String`

The URL for retrieving the thumbnail version of the image. If not specified a default image icon will be shown.
If function is assigned, the current path and image name will be provided.


#### Example
    <kendo:editor-imageBrowser-transport thumbnailUrl="handle_thumbnailUrl">
    </kendo:editor-imageBrowser-transport>
    <script>
        function handle_thumbnailUrl(e) {
            // Code to handle the thumbnailUrl event.
        }
    </script>

### imageUrl `String`

The URL responsible for serving the original image. A file name placeholder should be specified.


#### Example
    <kendo:editor-imageBrowser-transport imageUrl="handle_imageUrl">
    </kendo:editor-imageBrowser-transport>
    <script>
        function handle_imageUrl(e) {
            // Code to handle the imageUrl event.
        }
    </script>

## Event Tags

### kendo:editor-imageBrowser-transport-thumbnailUrl

The URL for retrieving the thumbnail version of the image. If not specified a default image icon will be shown.
If function is assigned, the current path and image name will be provided.


#### Example
    <kendo:editor-imageBrowser-transport>
        <kendo:editor-imageBrowser-transport-thumbnailUrl>
            <script>
                function(e) {
                    // Code to handle the thumbnailUrl event.
                }
            </script>
        </kendo:editor-imageBrowser-transport-thumbnailUrl>
    </kendo:editor-imageBrowser-transport>

### kendo:editor-imageBrowser-transport-imageUrl

The URL responsible for serving the original image. A file name placeholder should be specified.


#### Example
    <kendo:editor-imageBrowser-transport>
        <kendo:editor-imageBrowser-transport-imageUrl>
            <script>
                function(e) {
                    // Code to handle the imageUrl event.
                }
            </script>
        </kendo:editor-imageBrowser-transport-imageUrl>
    </kendo:editor-imageBrowser-transport>

