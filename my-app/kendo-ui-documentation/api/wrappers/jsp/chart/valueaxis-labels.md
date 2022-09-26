---
title: chart-valueAxis-labels
slug: jsp-chart-valueAxis-labels
tags: api, java
publish: true
---

# \<kendo:chart-valueAxis-labels\>
A JSP tag representing Kendo Labels.

#### Example
    <kendo:chart-valueAxis>
        <kendo:chart-valueAxis-labels></kendo:chart-valueAxis-labels>
    </kendo:chart-valueAxis>


## Configuration Attributes


### background `String`

The background color of the labels. Any valid CSS color string will work here, including
hex and rgb

#### Example
    <kendo:chart background="background">
    </kendo:chart>



### color `String`

The text color of the labels. Any valid CSS color string will work here, including hex and rgb.

#### Example
    <kendo:chart color="color">
    </kendo:chart>



### font `String`

The font style of the labels.

#### Example
    <kendo:chart font="font">
    </kendo:chart>



### format `String`

The format of the labels.

#### Example
    <kendo:chart format="format">
    </kendo:chart>



### margin `float`

The margin of the labels.

#### Example
    <kendo:chart margin="margin">
    </kendo:chart>



### mirror `boolean`

Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.

#### Example
    <kendo:chart mirror="mirror">
    </kendo:chart>



### padding `float`

The padding of the labels.

#### Example
    <kendo:chart padding="padding">
    </kendo:chart>



### rotation `float`

The rotation angle of the labels.

#### Example
    <kendo:chart rotation="rotation">
    </kendo:chart>



### skip `float`

Number of labels to skip.
Skips rendering the first n labels.

#### Example
    <kendo:chart skip="skip">
    </kendo:chart>



### step `float`

Label rendering step.
Every n-th label is rendered where n is the step

#### Example
    <kendo:chart step="step">
    </kendo:chart>



### template `String`

The label template.
Template variables:

#### Example
    <kendo:chart template="template">
    </kendo:chart>



### visible `boolean`

The visibility of the labels.

#### Example
    <kendo:chart visible="visible">
    </kendo:chart>



## Child JSP Tags

### kendo:chart-valueAxis-labels-border

The border of the labels.

More documentation is available at [kendo:chart-valueAxis-labels-border](/api/wrappers/jsp/chart/valueaxis-labels-border).

#### Example

    <kendo:chart-valueAxis-labels>
        <kendo:chart-valueAxis-labels-border></kendo:chart-valueAxis-labels-border>
    </kendo:chart-valueAxis-labels>
 
