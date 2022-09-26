---
title: editor-imageBrowser-schema-model-fields-name
slug: jsp-editor-imageBrowser-schema-model-fields-name
tags: api, java
publish: true
---

# \<kendo:editor-imageBrowser-schema-model-fields-name\>

The field which contains the name of the image/directory

#### Example
    <kendo:editor-imageBrowser-schema-model-fields>
        <kendo:editor-imageBrowser-schema-model-fields-name></kendo:editor-imageBrowser-schema-model-fields-name>
    </kendo:editor-imageBrowser-schema-model-fields>

## Configuration Attributes

### field `java.lang.String`

The name of the field.

#### Example
    <kendo:editor-imageBrowser-schema-model-fields-name field="field">
    </kendo:editor-imageBrowser-schema-model-fields-name>

### parse `java.lang.String`

Specifies the function which will parse the field value. If not set default parsers will be used.

#### Example
    <kendo:editor-imageBrowser-schema-model-fields-name parse="parse">
    </kendo:editor-imageBrowser-schema-model-fields-name>


## Event Attributes

### parse `String`

Specifies the function which will parse the field value. If not set default parsers will be used.


#### Example
    <kendo:editor-imageBrowser-schema-model-fields-name parse="handle_parse">
    </kendo:editor-imageBrowser-schema-model-fields-name>
    <script>
        function handle_parse(e) {
            // Code to handle the parse event.
        }
    </script>

## Event Tags

### kendo:editor-imageBrowser-schema-model-fields-name-parse

Specifies the function which will parse the field value. If not set default parsers will be used.


#### Example
    <kendo:editor-imageBrowser-schema-model-fields-name>
        <kendo:editor-imageBrowser-schema-model-fields-name-parse>
            <script>
                function(e) {
                    // Code to handle the parse event.
                }
            </script>
        </kendo:editor-imageBrowser-schema-model-fields-name-parse>
    </kendo:editor-imageBrowser-schema-model-fields-name>

