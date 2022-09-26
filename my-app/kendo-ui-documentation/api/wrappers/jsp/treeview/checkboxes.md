---
title: treeView-checkboxes
slug: jsp-treeView-checkboxes
tags: api, java
publish: true
---

# \<kendo:treeView-checkboxes\>

If true or an object, renders checkboxes beside each node.

#### Example
    <kendo:treeView>
        <kendo:treeView-checkboxes></kendo:treeView-checkboxes>
    </kendo:treeView>

## Configuration Attributes

### checkChildren `boolean`

Indicates whether checkboxes of child items should get checked when the checkbox of a parent item is checked. This
also enables tri-state checkboxes with an indeterminate state.

#### Example
    <kendo:treeView-checkboxes checkChildren="checkChildren">
    </kendo:treeView-checkboxes>

### name `java.lang.String`

Sets the name attribute of the checkbox inputs. That name will be posted to the server.

#### Example
    <kendo:treeView-checkboxes name="name">
    </kendo:treeView-checkboxes>

### template `java.lang.String`

The template which renders the checkboxes. Can be used to allow posting of
additional information along the treeview checkboxes.The fields which can be used in the template are:

#### Example
    <kendo:treeView-checkboxes template="template">
    </kendo:treeView-checkboxes>


## Event Attributes

### template `String`

The template which renders the checkboxes. Can be used to allow posting of
additional information along the treeview checkboxes.The fields which can be used in the template are:


#### Example
    <kendo:treeView-checkboxes template="handle_template">
    </kendo:treeView-checkboxes>
    <script>
        function handle_template(e) {
            // Code to handle the template event.
        }
    </script>

## Event Tags

### kendo:treeView-checkboxes-template

The template which renders the checkboxes. Can be used to allow posting of
additional information along the treeview checkboxes.The fields which can be used in the template are:


#### Example
    <kendo:treeView-checkboxes>
        <kendo:treeView-checkboxes-template>
            <script>
                function(e) {
                    // Code to handle the template event.
                }
            </script>
        </kendo:treeView-checkboxes-template>
    </kendo:treeView-checkboxes>

