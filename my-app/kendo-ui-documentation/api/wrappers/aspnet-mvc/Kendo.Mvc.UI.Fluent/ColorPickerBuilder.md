---
title:ColorPickerBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.colorpickerbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.ColorPickerBuilder
Defines the fluent interface for configuring the DatePickerBase component.



## Methods

### Events(`System.Action<Kendo.Mvc.UI.Fluent.ColorPickerEventBuilder>`)
Configures the client-side events.


#### Parameters

##### clientEventsAction System.Action<[Kendo.Mvc.UI.Fluent.ColorPickerEventBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/ColorPickerEventBuilder)>
The client events action.




#### Example (ASPX)
    <%= Html.Kendo().ColorPicker()
    .Name("ColorPicker")
    .Events(events =>
        events.Select("select").Change("change")
    )
    %>


### Value(`System.String`)
Sets the value of the picker input





### Opacity(`System.Boolean`)
Indicates whether the picker will allow transparent colors to be picked.


#### Parameters

##### allowOpacity `System.Boolean`
Whether the user is allowed to change the color opacity.




#### Example (ASPX)
    <%= Html.Kendo().ColorPicker()
    .Name("ColorPicker")
    .Opacity(true)
    %>


### Palette(`System.Collections.Generic.IEnumerable<System.String>`)
Sets the range of colors that the user can pick from.


#### Parameters

##### palette `System.Collections.Generic.IEnumerable<System.String>`
A list of colors.




#### Example (ASPX)
    <%= Html.Kendo().ColorPicker()
    .Name("ColorPicker")
    .Palette(new List<string> { "#ff0000", "#00ff00", "#0000ff" })
    %>


### Palette(`Kendo.Mvc.UI.ColorPickerPalette`)
Sets the range of colors that the user can pick from.


#### Parameters

##### palette [Kendo.Mvc.UI.ColorPickerPalette](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/ColorPickerPalette)
One of the preset palettes of colors




#### Example (ASPX)
    <%= Html.Kendo().ColorPicker()
    .Name("ColorPicker")
    .Palette(ColorPickerPalette.WebSafe)
    %>


### Enable(`System.Boolean`)
Enables or disables the picker.


#### Parameters

##### value `System.Boolean`
Whether the picker is enabled




#### Example (ASPX)
    <%= Html.Kendo().ColorPicker()
    .Name("ColorPicker")
    .Enable(false)
    %>


### Buttons(`System.Boolean`)
Shows or hides the accept/cancel buttons.


#### Parameters

##### value `System.Boolean`
Whether the buttons should be shown




#### Example (ASPX)
    <%= Html.Kendo().ColorPicker()
    .Name("ColorPicker")
    .Buttons(false)
    %>


### ToolIcon(`System.String`)
Shows a tool icon.


#### Parameters

##### cssClass `System.String`
The CSS class that will be used for styling




#### Example (ASPX)
    <%= Html.Kendo().ColorPicker()
    .Name("ColorPicker")
    .ToolIcon("k-foreColor")
    %>


### TileSize(`System.Int32`)
Sets the size of the palette tiles


#### Parameters

##### tileSize `System.Int32`
The tile size (for square tiles)




#### Example (ASPX)
    <%= Html.Kendo().ColorPalette()
    .Name("ColorPalette")
    .TileSize(32)
    %>


### TileSize(`System.Action<Kendo.Mvc.UI.Fluent.PaletteSizeBuilder>`)
Sets the size of the palette tiles


#### Parameters

##### columns System.Action<[Kendo.Mvc.UI.Fluent.PaletteSizeBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/PaletteSizeBuilder)>
The tile size (for square tiles)




#### Example (ASPX)
    <%= Html.Kendo().ColorPalette()
    .Name("ColorPalette")
    .TileSize(s => s.Width(20).Height(10))
    %>



