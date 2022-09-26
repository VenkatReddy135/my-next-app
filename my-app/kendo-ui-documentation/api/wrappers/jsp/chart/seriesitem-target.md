---
title: chart-seriesItem-target
slug: jsp-chart-seriesItem-target
tags: api, java
publish: true
---

# \<kendo:chart-seriesItem-target\>

The configuration options of the target

#### Example
    <kendo:chart-seriesItem>
        <kendo:chart-seriesItem-target></kendo:chart-seriesItem-target>
    </kendo:chart-seriesItem>

## Configuration Attributes

### border `java.lang.String`

The border of the target. Further configuration is available via [kendo:chart-seriesItem-target-border](#kendo-chart-seriesItem-target-border). 

#### Example
    <kendo:chart-seriesItem-target border="border">
    </kendo:chart-seriesItem-target>

### color `java.lang.String`

The target color.

#### Example
    <kendo:chart-seriesItem-target color="color">
    </kendo:chart-seriesItem-target>


##  Configuration JSP Tags

### kendo:chart-seriesItem-target-border

The border of the target.

More documentation is available at [kendo:chart-seriesItem-target-border](chart/seriesitem-target-border).

#### Example

    <kendo:chart-seriesItem-target>
        <kendo:chart-seriesItem-target-border></kendo:chart-seriesItem-target-border>
    </kendo:chart-seriesItem-target>

### kendo:chart-seriesItem-target-line

The target line options.

More documentation is available at [kendo:chart-seriesItem-target-line](chart/seriesitem-target-line).

#### Example

    <kendo:chart-seriesItem-target>
        <kendo:chart-seriesItem-target-line></kendo:chart-seriesItem-target-line>
    </kendo:chart-seriesItem-target>


## Event Attributes

### color `String`

The target color.


#### Example
    <kendo:chart-seriesItem-target color="handle_color">
    </kendo:chart-seriesItem-target>
    <script>
        function handle_color(e) {
            // Code to handle the color event.
        }
    </script>

## Event Tags

### kendo:chart-seriesItem-target-color

The target color.


#### Example
    <kendo:chart-seriesItem-target>
        <kendo:chart-seriesItem-target-color>
            <script>
                function(e) {
                    // Code to handle the color event.
                }
            </script>
        </kendo:chart-seriesItem-target-color>
    </kendo:chart-seriesItem-target>

