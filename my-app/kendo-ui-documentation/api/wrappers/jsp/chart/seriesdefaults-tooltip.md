---
title: chart-seriesDefaults-tooltip
slug: jsp-chart-seriesDefaults-tooltip
tags: api, java
publish: true
---

# \<kendo:chart-seriesDefaults-tooltip\>
A JSP tag representing Kendo Tooltip.

#### Example
    <kendo:chart-seriesDefaults>
        <kendo:chart-seriesDefaults-tooltip></kendo:chart-seriesDefaults-tooltip>
    </kendo:chart-seriesDefaults>


## Configuration Attributes


### background `String`

The background color of the tooltip. The default is determined from the series color.

#### Example
    <kendo:chart background="background">
    </kendo:chart>



### color `String`

The text color of the tooltip. The default is the same as the series labels color.

#### Example
    <kendo:chart color="color">
    </kendo:chart>



### font `String`

The tooltip font.

#### Example
    <kendo:chart font="font">
    </kendo:chart>



### format `String`

The tooltip format.

#### Example
    <kendo:chart format="format">
    </kendo:chart>



### padding `float`

The padding of the tooltip.

#### Example
    <kendo:chart padding="padding">
    </kendo:chart>



### template `String`

The tooltip template.
Template variables:

#### Example
    <kendo:chart template="template">
    </kendo:chart>



### visible `boolean`

A value indicating if the tooltip should be displayed.

#### Example
    <kendo:chart visible="visible">
    </kendo:chart>



## Child JSP Tags

### kendo:chart-seriesDefaults-tooltip-border

The border configuration options.

More documentation is available at [kendo:chart-seriesDefaults-tooltip-border](/api/wrappers/jsp/chart/seriesdefaults-tooltip-border).

#### Example

    <kendo:chart-seriesDefaults-tooltip>
        <kendo:chart-seriesDefaults-tooltip-border></kendo:chart-seriesDefaults-tooltip-border>
    </kendo:chart-seriesDefaults-tooltip>
 
