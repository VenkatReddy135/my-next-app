---
title: Appearance and styling
slug: dataviz-appearance-and-styling
publish: true
---

# Appearance and Styling

The **Kendo UI** DataViz widgets use a mix of browser technologies to attain the required precision and responsiveness.

The visualizations are rendered as vector graphics. Their layout is computed in advance.
In contrast, interactive features are built using traditional HTML elements.

As a result, appearance settings are split between declarative options and traditional CSS.

## Themes and StyleSheets

Setting a Kendo UI DataViz theme is a two-step process:

* Set the widget theme option:

    $("#chart").kendoChart({
        theme: "[theme]"
        ...
    });

* Include two stylesheets: **kendo.dataviz.css** and **kendo.dataviz.[theme].css**.
The common (base) stylesheet applies styles related to positioning and size, but which are not related to the color scheme and are always required for the widget to
look correct and function properly. The theme stylesheet applies theme-specific styles like colors and backgrounds.

> Be sure to include the common CSS file before the theme CSS file. In some cases, the theme CSS file may override base styles as it uses selectors with the same specificity.

## Customizing Appearance

Refer to the API Reference section of each widget for detailed list of appearance settings.
