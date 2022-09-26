---
title: stockChart-seriesItem-target
slug: jsp-stockChart-seriesItem-target
tags: api, java
publish: true
---

# \<kendo:stockChart-seriesItem-target\>

The target of the bullet chart.

#### Example
    <kendo:stockChart-seriesItem>
        <kendo:stockChart-seriesItem-target></kendo:stockChart-seriesItem-target>
    </kendo:stockChart-seriesItem>

## Configuration Attributes

### border `java.lang.String`

The border of the target. Further configuration is available via [kendo:stockChart-seriesItem-target-border](#kendo-stockChart-seriesItem-target-border). 

#### Example
    <kendo:stockChart-seriesItem-target border="border">
    </kendo:stockChart-seriesItem-target>

### color `java.lang.String`

The target color.

#### Example
    <kendo:stockChart-seriesItem-target color="color">
    </kendo:stockChart-seriesItem-target>


##  Configuration JSP Tags

### kendo:stockChart-seriesItem-target-border

The border of the target.

More documentation is available at [kendo:stockChart-seriesItem-target-border](stockchart/seriesitem-target-border).

#### Example

    <kendo:stockChart-seriesItem-target>
        <kendo:stockChart-seriesItem-target-border></kendo:stockChart-seriesItem-target-border>
    </kendo:stockChart-seriesItem-target>

### kendo:stockChart-seriesItem-target-line

The target line.

More documentation is available at [kendo:stockChart-seriesItem-target-line](stockchart/seriesitem-target-line).

#### Example

    <kendo:stockChart-seriesItem-target>
        <kendo:stockChart-seriesItem-target-line></kendo:stockChart-seriesItem-target-line>
    </kendo:stockChart-seriesItem-target>


## Event Attributes

### color `String`

The target color.


#### Example
    <kendo:stockChart-seriesItem-target color="handle_color">
    </kendo:stockChart-seriesItem-target>
    <script>
        function handle_color(e) {
            // Code to handle the color event.
        }
    </script>

## Event Tags

### kendo:stockChart-seriesItem-target-color

The target color.


#### Example
    <kendo:stockChart-seriesItem-target>
        <kendo:stockChart-seriesItem-target-color>
            <script>
                function(e) {
                    // Code to handle the color event.
                }
            </script>
        </kendo:stockChart-seriesItem-target-color>
    </kendo:stockChart-seriesItem-target>

