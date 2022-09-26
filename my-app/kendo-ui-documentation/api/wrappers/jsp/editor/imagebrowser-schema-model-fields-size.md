---
title: editor-imageBrowser-schema-model-fields-size
slug: jsp-editor-imageBrowser-schema-model-fields-size
tags: api, java
publish: true
---

# \<kendo:editor-imageBrowser-schema-model-fields-size\>

The field which contains the size of image.

#### Example
    <kendo:editor-imageBrowser-schema-model-fields>
        <kendo:editor-imageBrowser-schema-model-fields-size></kendo:editor-imageBrowser-schema-model-fields-size>
    </kendo:editor-imageBrowser-schema-model-fields>

## Configuration Attributes

### field `java.lang.String`

The name of the field.

#### Example
    <kendo:editor-imageBrowser-schema-model-fields-size field="field">
    </kendo:editor-imageBrowser-schema-model-fields-size>

### parse `java.lang.String`

Specifies the function which will parse the field value. If not set default parsers will be used.

#### Example
    <kendo:editor-imageBrowser-schema-model-fields-size parse="parse">
    </kendo:editor-imageBrowser-schema-model-fields-size>


## Event Attributes

### parse `String`

Specifies the function which will parse the field value. If not set default parsers will be used.


#### Example
    <kendo:editor-imageBrowser-schema-model-fields-size parse="handle_parse">
    </kendo:editor-imageBrowser-schema-model-fields-size>
    <script>
        function handle_parse(e) {
            // Code to handle the parse event.
        }
    </script>

## Event Tags

### kendo:editor-imageBrowser-schema-model-fields-size-parse

Specifies the function which will parse the field value. If not set default parsers will be used.


#### Example
    <kendo:editor-imageBrowser-schema-model-fields-size>
        <kendo:editor-imageBrowser-schema-model-fields-size-parse>
            <script>
                function(e) {
                    // Code to handle the parse event.
                }
            </script>
        </kendo:editor-imageBrowser-schema-model-fields-size-parse>
    </kendo:editor-imageBrowser-schema-model-fields-size>

