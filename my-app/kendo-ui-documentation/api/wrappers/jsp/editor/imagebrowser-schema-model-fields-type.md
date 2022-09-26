---
title: editor-imageBrowser-schema-model-fields-type
slug: jsp-editor-imageBrowser-schema-model-fields-type
tags: api, java
publish: true
---

# \<kendo:editor-imageBrowser-schema-model-fields-type\>

The field which contains the type of the entry. Either f for image or d for directory.

#### Example
    <kendo:editor-imageBrowser-schema-model-fields>
        <kendo:editor-imageBrowser-schema-model-fields-type></kendo:editor-imageBrowser-schema-model-fields-type>
    </kendo:editor-imageBrowser-schema-model-fields>

## Configuration Attributes

### field `java.lang.String`

The name of the field.

#### Example
    <kendo:editor-imageBrowser-schema-model-fields-type field="field">
    </kendo:editor-imageBrowser-schema-model-fields-type>

### parse `java.lang.String`

Specifies the function which will parse the field value. If not set default parsers will be used.

#### Example
    <kendo:editor-imageBrowser-schema-model-fields-type parse="parse">
    </kendo:editor-imageBrowser-schema-model-fields-type>


## Event Attributes

### parse `String`

Specifies the function which will parse the field value. If not set default parsers will be used.


#### Example
    <kendo:editor-imageBrowser-schema-model-fields-type parse="handle_parse">
    </kendo:editor-imageBrowser-schema-model-fields-type>
    <script>
        function handle_parse(e) {
            // Code to handle the parse event.
        }
    </script>

## Event Tags

### kendo:editor-imageBrowser-schema-model-fields-type-parse

Specifies the function which will parse the field value. If not set default parsers will be used.


#### Example
    <kendo:editor-imageBrowser-schema-model-fields-type>
        <kendo:editor-imageBrowser-schema-model-fields-type-parse>
            <script>
                function(e) {
                    // Code to handle the parse event.
                }
            </script>
        </kendo:editor-imageBrowser-schema-model-fields-type-parse>
    </kendo:editor-imageBrowser-schema-model-fields-type>

