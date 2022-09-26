---
title: Area
meta_title: Area Charts in Kendo UI DataViz
meta_description: Learn how to define area charts in Kendo UI DataViz HTML5 charting widget.
slug: chart-area-type
publish: true
---

## Area Charts

Use "area" and "verticalArea" to define area charts.

Axes are configured through "categoryAxis" and "valueAxis". Multiple value axes are supported.

    $("#chart").kendoChart({
        title: {
            text: "Internet Users"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "area"
        },
        series: [{
            name: "World",
            data: [15.7, 16.7, 20, 23.5, 26.6]
        }, {
            name: "United States",
            data: [67.96, 68.93, 75, 74, 78]
        }],
        valueAxis: {
            labels: {
                format: "{0}%"
            }
        },
        categoryAxis: {
            categories: [2005, 2006, 2007, 2008, 2009]
        }
    });


This configuration produces the following area chart:

![Area Chart](chart-area.png)
