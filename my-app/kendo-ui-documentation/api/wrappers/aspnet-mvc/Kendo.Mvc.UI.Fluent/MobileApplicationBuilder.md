---
title:MobileApplicationBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.mobileapplicationbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.MobileApplicationBuilder
Defines the fluent API for configuring the Kendo MobileApplication for ASP.NET MVC.



## Methods

### HideAddressBar(`System.Boolean`)
Whether to hide the browser address bar. Supported only in iPhone and iPod. Doesn't affect standalone mode as there the address bar is always hidden.


#### Parameters

##### value `System.Boolean`
The value that configures the hideaddressbar.





### UpdateDocumentTitle(`System.Boolean`)
Whether to update the document title.


#### Parameters

##### value `System.Boolean`
The value that configures the updatedocumenttitle.





### Initial(`System.String`)
The id of the initial mobile View to display.


#### Parameters

##### value `System.String`
The value that configures the initial.





### Layout(`System.String`)
The id of the default Application Layout.


#### Parameters

##### value `System.String`
The value that configures the layout.





### Loading(`System.String`)
The text displayed in the loading popup. Setting this value to false will disable the loading popup.Note: The text should be wrapped inside <h1> tag.


#### Parameters

##### value `System.String`
The value that configures the loading.





### Platform(`System.String`)
Which platform look to force on the application. Can be one of "ios", "android", "blackberry".


#### Parameters

##### value `System.String`
The value that configures the platform.





### ServerNavigation(`System.Boolean`)
If set to true, the application will not use ajax to load remote views.


#### Parameters

##### value `System.Boolean`
The value that configures the servernavigation.





### Skin(`System.String`)
The skin to apply to the application. Currently, Kendo UI Mobile ships with a flat skin in addition to the native looking ones.


#### Parameters

##### value `System.String`
The value that configures the skin.





### Transition(`System.String`)
The default View transition.


#### Parameters

##### value `System.String`
The value that configures the transition.





### WebAppCapable(`System.Boolean`)
Disables the default behavior of Kendo UI Mobile apps to be web app capable (open in a chromeless browser). Introduced in Q2 2013.


#### Parameters

##### value `System.Boolean`
The value that configures the webappcapable.





### PushState(`System.Boolean`)
Specifies how history should be handled


#### Parameters

##### value `System.Boolean`
The value that configures the pushstate.





### Events(`System.Action<Kendo.Mvc.UI.Fluent.MobileApplicationEventBuilder>`)
Configures the client-side events.


#### Parameters

##### configurator System.Action<[Kendo.Mvc.UI.Fluent.MobileApplicationEventBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/MobileApplicationEventBuilder)>
The client events action.




#### Example (ASPX)
    <%= Html.Kendo().MobileApplication()
    .Events(events => events
        .Init("onInit")
    )
    %>



