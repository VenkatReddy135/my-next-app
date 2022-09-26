---
title:MobileViewEventBuilder
slug:aspnetmvc-kendo.mvc.ui.fluent.mobilevieweventbuilder
publish:true
---

# Kendo.Mvc.UI.Fluent.MobileViewEventBuilder
Defines the fluent API for configuring the Kendo MobileView for ASP.NET MVC events.



## Methods

### AfterShow(`System.String`)
Fires after the mobile View becomes visible. If the view is displayed with transition, the event is triggered after the transition is complete.

For additional information check the [afterShow](/api/web/mobileview#events-afterShow) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the afterShow event.





### BeforeShow(`System.String`)
Fires before the mobile View becomes visible. The event can be prevented by calling the preventDefault method of the event parameter, in case a redirection should happen.

For additional information check the [beforeShow](/api/web/mobileview#events-beforeShow) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the beforeShow event.





### Hide(`System.String`)
Fires when the mobile View becomes hidden.

For additional information check the [hide](/api/web/mobileview#events-hide) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the hide event.





### Init(`System.String`)
Fires after the mobile View and its child widgets are initialized.

For additional information check the [init](/api/web/mobileview#events-init) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the init event.





### Show(`System.String`)
Fires when the mobile View becomes visible.

For additional information check the [show](/api/web/mobileview#events-show) event documentation.


#### Parameters

##### handler `System.String`
The name of the JavaScript function that will handle the show event.






