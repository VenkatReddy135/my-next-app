---
title: sparkline-seriesItem-target
slug: jsp-sparkline-seriesItem-target
tags: api, java
publish: true
---

# \<kendo:sparkline-seriesItem-target\>

The target of the bullet chart.

#### Example
    <kendo:sparkline-seriesItem>
        <kendo:sparkline-seriesItem-target></kendo:sparkline-seriesItem-target>
    </kendo:sparkline-seriesItem>

## Configuration Attributes

### border `java.lang.String`

The border of the target. Further configuration is available via [kendo:sparkline-seriesItem-target-border](#kendo-sparkline-seriesItem-target-border). 

#### Example
    <kendo:sparkline-seriesItem-target border="border">
    </kendo:sparkline-seriesItem-target>

### color `java.lang.String`

The target color.

#### Example
    <kendo:sparkline-seriesItem-target color="color">
    </kendo:sparkline-seriesItem-target>


##  Configuration JSP Tags

### kendo:sparkline-seriesItem-target-border

The border of the target.

More documentation is available at [kendo:sparkline-seriesItem-target-border](sparkline/seriesitem-target-border).

#### Example

    <kendo:sparkline-seriesItem-target>
        <kendo:sparkline-seriesItem-target-border></kendo:sparkline-seriesItem-target-border>
    </kendo:sparkline-seriesItem-target>

### kendo:sparkline-seriesItem-target-line

The target line.

More documentation is available at [kendo:sparkline-seriesItem-target-line](sparkline/seriesitem-target-line).

#### Example

    <kendo:sparkline-seriesItem-target>
        <kendo:sparkline-seriesItem-target-line></kendo:sparkline-seriesItem-target-line>
    </kendo:sparkline-seriesItem-target>


## Event Attributes

### color `String`

The target color.


#### Example
    <kendo:sparkline-seriesItem-target color="handle_color">
    </kendo:sparkline-seriesItem-target>
    <script>
        function handle_color(e) {
            // Code to handle the color event.
        }
    </script>

## Event Tags

### kendo:sparkline-seriesItem-target-color

The target color.


#### Example
    <kendo:sparkline-seriesItem-target>
        <kendo:sparkline-seriesItem-target-color>
            <script>
                function(e) {
                    // Code to handle the color event.
                }
            </script>
        </kendo:sparkline-seriesItem-target-color>
    </kendo:sparkline-seriesItem-target>

