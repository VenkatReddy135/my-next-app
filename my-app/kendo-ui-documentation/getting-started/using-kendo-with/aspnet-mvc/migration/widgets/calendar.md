---
title: Calendar
meta_title: Server-side API for Kendo UI Calendar widget with ASP.NET MVC
meta_description: This documentation provides information about events and options such as min/max date in the server-side API of Kendo UI Calendar widget.
slug: calendar
publish: true
---

## Server-Side API

## Events

#### Old

    Html.Telerik().Calendar().Name("Calendar").ClientEvents( events => events.OnChange(“change”))
 
#### New

    Html.Kendo().Calendar().Name("Calendar").Events( events => events.Change(“change”))

## Other Options

### Min/Max date
 
#### Old

    Html.Telerik().Calendar().Name("Calendar").MinDate(DateTime.Now)
    Html.Telerik().Calendar().Name("Calendar").MaxDate(DateTime.Now)
 
#### New

    Html.Kendo().Calendar().Name("Calendar").Min(DateTime.Now)
    Html.Kendo().Calendar().Name("Calendar").Max(DateTime.Now)

### Footer
 
#### Old

    Html.Telerik().Calendar().Name("Calendar").TodayButton(“d”)
 
#### New

    Html.Kendo().Calendar().Name("Calendar").Footer(“#= kendo.toString(data, ‘MM/dd/yyyy’)”)