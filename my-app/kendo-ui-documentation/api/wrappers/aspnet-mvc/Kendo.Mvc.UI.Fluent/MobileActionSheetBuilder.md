---
title:MobileActionSheetBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.mobileactionsheetbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.MobileActionSheetBuilder
Defines the fluent API for configuring the Kendo MobileActionSheet for ASP.NET MVC.



## Methods

### Cancel(`System.String`)
The text of the cancel button.


#### Parameters

##### value `System.String`
The value that configures the cancel.





### Title(`System.String`)
Specifies the title of the actionsheet


#### Parameters

##### value `System.String`
The value that configures the title.





### Popup(`System.Action<Kendo.Mvc.UI.Fluent.MobileActionSheetPopupSettingsBuilder>`)
The popup configuration options (tablet only)


#### Parameters

##### configurator System.Action<[Kendo.Mvc.UI.Fluent.MobileActionSheetPopupSettingsBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/MobileActionSheetPopupSettingsBuilder)>
The action that configures the popup.





### Items(`System.Action<Kendo.Mvc.UI.Fluent.MobileActionSheetItemFactory>`)
Contains the items of the actionsheet widget


#### Parameters

##### configurator System.Action<[Kendo.Mvc.UI.Fluent.MobileActionSheetItemFactory](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/MobileActionSheetItemFactory)>
The action that configures the items.





### Events(`System.Action<Kendo.Mvc.UI.Fluent.MobileActionSheetEventBuilder>`)
Configures the client-side events.


#### Parameters

##### configurator System.Action<[Kendo.Mvc.UI.Fluent.MobileActionSheetEventBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/MobileActionSheetEventBuilder)>
The client events action.




#### Example (ASPX)
    <%= Html.Kendo().MobileActionSheet()
    .Name("MobileActionSheet")
    .Events(events => events
        .Open("onOpen")
    )
    %>



