---
title: stockChart-seriesItem-target-line
slug: jsp-stockChart-seriesItem-target-line
tags: api, java
publish: true
---

# \<kendo:stockChart-seriesItem-target-line\>

The target line.

#### Example
    <kendo:stockChart-seriesItem-target>
        <kendo:stockChart-seriesItem-target-line></kendo:stockChart-seriesItem-target-line>
    </kendo:stockChart-seriesItem-target>

## Configuration Attributes

### width `java.lang.Object`

The width of the line.

#### Example
    <kendo:stockChart-seriesItem-target-line width="width">
    </kendo:stockChart-seriesItem-target-line>


## Event Attributes

### width `String`

The width of the line.


#### Example
    <kendo:stockChart-seriesItem-target-line width="handle_width">
    </kendo:stockChart-seriesItem-target-line>
    <script>
        function handle_width(e) {
            // Code to handle the width event.
        }
    </script>

## Event Tags

### kendo:stockChart-seriesItem-target-line-width

The width of the line.


#### Example
    <kendo:stockChart-seriesItem-target-line>
        <kendo:stockChart-seriesItem-target-line-width>
            <script>
                function(e) {
                    // Code to handle the width event.
                }
            </script>
        </kendo:stockChart-seriesItem-target-line-width>
    </kendo:stockChart-seriesItem-target-line>

