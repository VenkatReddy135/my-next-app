---
title:MobileDrawerBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.mobiledrawerbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.MobileDrawerBuilder
Defines the fluent API for configuring the Kendo MobileDrawer for ASP.NET MVC.



## Methods

### Title(`System.String`)
The text to display in the navbar title (if present).


#### Parameters

##### value `System.String`
The value that configures the title.





### Position(`Kendo.Mvc.UI.MobileDrawerPosition`)
The position of the drawer. Can be left (default) or right.


#### Parameters

##### value [Kendo.Mvc.UI.MobileDrawerPosition](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI/MobileDrawerPosition)
The value that configures the position.





### Header(`System.Action`)
Sets the HTML content which the header should display.


#### Parameters

##### value `System.Action`
The action which renders the header.





### Header(`System.Func<System.Object,System.Object>`)
Sets the HTML content which the header should display.


#### Parameters

##### value `System.Func<System.Object,System.Object>`
The content wrapped in a regular HTML tag or text tag (Razor syntax).





### Header(`System.String`)
Sets the HTML content which the header should display as a string.


#### Parameters

##### value `System.String`
The action which renders the header.





### Content(`System.Action`)
Sets the HTML content which the content should display.


#### Parameters

##### value `System.Action`
The action which renders the content.





### Content(`System.Func<System.Object,System.Object>`)
Sets the HTML content which the content should display.


#### Parameters

##### value `System.Func<System.Object,System.Object>`
The content wrapped in a regular HTML tag or text tag (Razor syntax).





### Content(`System.String`)
Sets the HTML content which the view content should display as a string.


#### Parameters

##### value `System.String`
The action which renders the view content.





### Footer(`System.Action`)
Sets the HTML content which the footer should display.


#### Parameters

##### value `System.Action`
The action which renders the footer.





### Footer(`System.Func<System.Object,System.Object>`)
Sets the HTML content which the footer should display.


#### Parameters

##### value `System.Func<System.Object,System.Object>`
The content wrapped in a regular HTML tag or text tag (Razor syntax).





### Footer(`System.String`)
Sets the HTML content which the footer should display as a string.


#### Parameters

##### value `System.String`
The action which renders the footer.





### Views(`System.String[]`)
A list of the view ids on which the drawer will appear. If omitted, the drawer can be revealed on any view in the application.


#### Parameters

##### names `System.String[]`
The list of view ids on which the drawer will appear.





### Events(`System.Action<Kendo.Mvc.UI.Fluent.MobileDrawerEventBuilder>`)
Configures the client-side events.


#### Parameters

##### configurator System.Action<[Kendo.Mvc.UI.Fluent.MobileDrawerEventBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/MobileDrawerEventBuilder)>
The client events action.




#### Example (ASPX)
    <%= Html.Kendo().MobileDrawer()
    .Name("MobileDrawer")
    .Events(events => events
        .BeforeShow("onBeforeShow")
    )
    %>



