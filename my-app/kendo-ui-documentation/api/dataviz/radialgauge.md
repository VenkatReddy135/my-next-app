---
title: kendo.dataviz.ui.RadialGauge
meta_title: Configuration, methods and events of Kendo UI DataViz RadialGauge
meta_description: Learn the configuration options for Radial Gauge widget, set the color and size of the border, use methods properly.
slug: api-dataviz-radialgauge
relatedDocs: gs-dataviz-radialgauge-overview
tags: api,dataviz
publish: true
---

# kendo.dataviz.ui.RadialGauge

## Configuration

### gaugeArea `Object`

The gauge area configuration options.
This is the entire visible area of the gauge.

### gaugeArea.background `Object`*(default: "white")*

 The background of the gauge area.
Any valid CSS color string will work here, including hex and rgb.

### gaugeArea.border `Object`

The border of the gauge area.

### gaugeArea.border.color `String`*(default: "black")*

The color of the border. Any valid CSS color string will work here, including hex and rgb.

### gaugeArea.border.dashType `String`*(default: "solid")*

The dash type of the border.


#### *"solid"*

Specifies a solid line.

#### *"dot"*

Specifies a line consisting of dots.

#### *"dash"*

Specifies a line consisting of dashes.

#### *"longDash"*

Specifies a line consisting of a repeating pattern of long-dash.

#### *"dashDot"*

Specifies a line consisting of a repeating pattern of dash-dot.

#### *"longDashDot"*

Specifies a line consisting of a repeating pattern of long-dash-dot.

#### *"longDashDotDot"*

Specifies a line consisting of a repeating pattern of long-dash-dot-dot.

### gaugeArea.border.width `Number`*(default: 0)*

 The width of the border.

### gaugeArea.height `Number`

The height of the gauge area.  By default, the vertical gauge is 200px and
the horizontal one is 60px.

### gaugeArea.margin `Number|Object`*(default: 5)*

 The margin of the gauge area.

#### Example

    // sets the top, right, bottom and left margin to 3px.
    margin: 3

    // sets the top and left margin to 1px
    // margin right and bottom are with 5px (by default)
    margin: { top: 1, left: 1 }

### gaugeArea.width `Number`

The width of the gauge area.  By default the vertical gauge is 60px
and horizontal gauge is 200px.

### pointer `Object`

The pointer configuration options.

### pointer.cap `Object`

The cap configuration options.

### pointer.cap.color `String`

The color of the cap.
Any valid CSS color string will work here, including hex and rgb.

### pointer.cap.size `Number`

The size of the cap in percents. (from 0 to 1)

### pointer.color `String`

The color of the pointer.
Any valid CSS color string will work here, including hex and rgb.

### pointer.value `Number`

The value of the gauge.

### renderAs `String`

Sets the preferred rendering engine.
If it is not supported by the browser, the Gauge will switch to the first available mode.

The supported values are:

* "svg" - renders the widget as inline SVG document, if available
* "vml" - renders the widget as VML, if available
* "canvas" - renders the widget as a Canvas element, if available.

> Using Canvas rendering disables most interactive features.

### Example - Render as Canvas, if supported

    <div id="gauge"></div>
    <script>
    $("#gauge").kendoRadialGauge({
        renderAs: "canvas",
        pointer: {
            value: 50
        },
        scale: {
            min: 0,
            max: 100
        }
    });
    </script>

### scale `Object`

Configures the scale.

### scale.endAngle `Number`*(default: 210)*

 The end angle of the gauge.
The gauge is rendered clockwise(0 degrees are the 180 degrees in the polar coordinat system)

### scale.labels `Object`

Configures the scale labels.

### scale.labels.background `String`

The background color of the labels.
Any valid CSS color string will work here, including hex and rgb

### scale.labels.border `Object`

The border of the labels.

### scale.labels.border.color `String`*(default: "black")*

The color of the border. Any valid CSS color string will work here, including hex and rgb.

### scale.labels.border.dashType `String`*(default: "solid")*

The dash type of the border.


#### *"solid"*

Specifies a solid line.

#### *"dot"*

Specifies a line consisting of dots.

#### *"dash"*

Specifies a line consisting of dashes.

#### *"longDash"*

Specifies a line consisting of a repeating pattern of long-dash.

#### *"dashDot"*

Specifies a line consisting of a repeating pattern of dash-dot.

#### *"longDashDot"*

Specifies a line consisting of a repeating pattern of long-dash-dot.

#### *"longDashDotDot"*

Specifies a line consisting of a repeating pattern of long-dash-dot-dot.

### scale.labels.border.width `Number`*(default: 0)*

 The width of the border.

### scale.labels.color `String`

The text color of the labels.
Any valid CSS color string will work here, including hex and rgb.

### scale.labels.font `String`*(default: "12px Arial,Helvetica,sans-serif")*

The font style of the labels.

### scale.labels.format `String`

The format of the labels.

#### Example

    $("#radial-gauge").kendoRadialGauge({
        scale: {
           labels: {
               // set the format to currency
               format: "C"
           }
        }
    });

### scale.labels.margin `Number|Object`*(default: 0)*

 The margin of the labels.

### scale.labels.padding `Number | Object`*(default: 0)*

 The padding of the labels.

### scale.labels.position `String`*(default: "inside")*

The labels positions.


#### *"inside"*

The labels are positioned inside.

#### *"outside"*

The labels are positioned outside.

### scale.labels.template `String|Function`

The label template.
Template variables:


*   **value** - the value

#### Example

    // chart initialization
    $("#radial-gauge").kendoRadialGauge({
         scale: {
             labels: {
                 // labels template
                 template: "#= value #%"
             }
         }
    });

### scale.labels.visible `Boolean`*(default: true)*

 The visibility of the labels.

### scale.majorTicks `Object`

Configures the scale major ticks.

### scale.majorTicks.color `String`

The color of the major ticks.

### scale.majorTicks.size `Number`

The major tick size.
This is the length of the line in pixels that is drawn to indicate the tick on the scale.

### scale.majorTicks.visible `Boolean`*(default: true)*

 The visibility of the major ticks.
Any valid CSS color string will work here, including hex and rgb.

### scale.majorTicks.width `Number`*(default: 0.5)*

 The width of the major ticks.

### scale.majorUnit `Number`

The interval between major divisions.

### scale.max `Number`*(default: 100)*

 The maximum value of the scale.

### scale.min `Number`*(default: 0)*

 The minimum value of the scale.

### scale.minorTicks `Object`

Configures the scale minor ticks.

### scale.minorTicks.color `String`

The color of the minor ticks.
Any valid CSS color string will work here, including hex and rgb.

### scale.minorTicks.size `Number`

The minor tick size.
This is the length of the line in pixels that is drawn to indicate the tick on the scale.

### scale.minorTicks.visible `Boolean`*(default: true)*

 The visibility of the minor ticks.

### scale.minorTicks.width `Number`*(default: 0.5)*

 The width of the minor ticks.

### scale.minorUnit `Number`

The interval between minor divisions.

### scale.ranges `Array`

The ranges of the scale.

#### Example

    $("#radial-gauge").kendoRadialGauge({
        scale: {
            ranges: [{
                from: 10,
                to: 20,
                color: "green"
            }]
        }
     });

### scale.ranges.from `Number`

The start position of the range in scale units.

### scale.ranges.to `Number`

The end position of the range in scale units.

### scale.ranges.opacity `Number`

The opacity of the range.

### scale.ranges.color `String`

The color of the range.
Any valid CSS color string will work here, including hex and rgb.

### scale.rangePlaceholderColor `String`

The default color for the ranges.

### scale.rangeSize `Number`

The width of the range indicators.

### scale.rangeDistance `Number`

The distance from the range indicators to the ticks.

### scale.reverse `Boolean`*(default: false)*

Reverses the scale direction - values are increase anticlockwise.

### scale.startAngle `Number`*(default: -30)*

 The start angle of the gauge.
The gauge is rendered clockwise(0 degrees are the 180 degrees in the polar coordinat system)

### transitions `Boolean`*(default: true)*

A value indicating if transition animations should be played.

## Methods

### destroy

Prepares the Gauge for safe removal from the DOM.

Detaches event handlers and removes data entries in order to avoid memory leaks.

#### Example

    kendo.destroy($("#radial-gauge"));
    $("#radial-gauge").remove();

### redraw

Redraws the gauge.

#### Example

    var gauge = $("#radial-gauge").data("kendoRadialGauge");
    gauge.redraw();

### svg

Returns the [SVG](http://www.w3.org/Graphics/SVG/) representation of the gauge.
The returned string is a self-contained SVG document that can be used as is or
converted to other formats using tools like [Inkscape](http://inkscape.org/) and
[ImageMagick](http://www.imagemagick.org/).
Both programs provide command-line interface suitable for server-side processing.

#### Example

    <div id="gauge"></div>
    <script>
    $("#gauge").kendoRadialGauge({
        pointer: {
            value: 50
        },
        scale: {
            min: 0,
            max: 100
        }
    });
    var gauge = $("#gauge").data("kendoRadialGauge");
    var svg = gauge.svg();
    console.log(svg); // displays the SVG string
    </script>

### imageDataURL

Returns a PNG image of the gauge encoded as a [Data URL](https://developer.mozilla.org/en-US/docs/data_URIs).

#### Returns

`String` A data URL with `image/png` MIME type. Will be `null` if the browser does not support the `canvas` element.

#### Example - show a snapshot of the gauge

    <div id="gauge"></div>
    <script>
    $("#gauge").kendoRadialGauge({
        pointer: {
            value: 50
        },
        scale: {
            min: 0,
            max: 100
        }
    });
    var gauge = $("#gauge").data("kendoRadialGauge");
    var image = gauge.imageDataURL();
    if (!window.open(image)) {
        document.location.href = image;
    }
    </script>

### value

Change the value of the gauge.

#### Example

    $("#radial-gauge").data("kendoRadialGauge").value(20);
