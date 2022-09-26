---
title:MobileSplitViewPaneBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.mobilesplitviewpanebuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.MobileSplitViewPaneBuilder
Defines the fluent API for configuring the MobileSplitViewPane settings.



## Methods

### Id(`System.String`)
The id of tha pane.


#### Parameters

##### value `System.String`
The value that configures the id.





### Initial(`System.String`)
The value that configures the initial.


#### Parameters

##### value `System.String`
The value that configures the initial.





### Layout(`System.String`)
The value that configures the layout.


#### Parameters

##### value `System.String`
The value that configures the layout.





### Loading(`System.String`)
The text displayed in the loading popup. Setting this value to false will disable the loading popup.


#### Parameters

##### value `System.String`
The value that configures the loading.





### Transition(`System.String`)
The default View transition.


#### Parameters

##### value `System.String`
The value that configures the transition.





### Content(`System.Action`)
Sets the HTML content which the pane should display.


#### Parameters

##### value `System.Action`
The action which renders the content.





### Content(`System.Func<System.Object,System.Object>`)
Sets the HTML content which the pane should display.


#### Parameters

##### value `System.Func<System.Object,System.Object>`
The content wrapped in a regular HTML tag or text tag (Razor syntax).





### Content(`System.String`)
Sets the HTML content which the pane should display as a string.


#### Parameters

##### value `System.String`
The action which renders the view content.





### HtmlAttributes(`System.Object`)
Sets the HTML attributes.


#### Parameters

##### attributes `System.Object`
The HTML attributes.



#### Returns




### HtmlAttributes(`System.Collections.Generic.IDictionary<System.String,System.Object>`)
Sets the HTML attributes.


#### Parameters

##### attributes `System.Collections.Generic.IDictionary<System.String,System.Object>`
The HTML attributes.



#### Returns




### Events(`System.Action<Kendo.Mvc.UI.Fluent.MobileSplitViewPaneEventBuilder>`)
Configures the client-side events.


#### Parameters

##### configurator System.Action<[Kendo.Mvc.UI.Fluent.MobileSplitViewPaneEventBuilder](/api/wrappers/aspnet-mvc/Kendo.Mvc.UI.Fluent/MobileSplitViewPaneEventBuilder)>
The client events action.




#### Example (ASPX)
    <%= Html.Kendo().MobileSplitView()
    .Name("MobileSplitView")
    .Panes(panes => panes.Add()
        .Events(events => events
            .Navigate("onNavigate")
            ))
            %>



