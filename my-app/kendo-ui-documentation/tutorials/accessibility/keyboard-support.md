---
title: Keyboard Support in Kendo UI Web
slug: a11y-keyboard-support
tags: Tutorial, Accessibility, Keyboard, Section 508, WAI-ARIA
related: a11y-accessibility-overview, a11y-wai-aria-support-in-kendo
publish: true
---

# Keyboard Support in Kendo UI Web

## An Overview of Accesskeys

For the unfamiliar, the "accesskey" property that can be placed on HTML elements to tell the browser that the property in question can be activated with the keyboard. For exmaple, let's assume I have the following input field on a page:

	<input type='text' id='name' accesskey='n' />

By using the `accesskey` attribute, I'm telling the browser to enable to user to set focus on that field by using an access key combination ([which is unique to OS and browser](http://en.wikipedia.org/wiki/Access_key)) plus the 'n' key. For example, if a user of my site is browsing with Chrome on a Mac, they would type 'control' + 'option' + 'n' to set focus on the 'name' field.

Kendo UI recognizes `accesskeys`, and automatically preserves those when creating widgets. This is especially helpful in those cases when Kendo creates multiple DOM elements in order to construct some of our more complex widgets (like the NumericTextBox or DatePicker widgets). 

## Built-in Keyboard Support in Kendo UI Web

Of course, Keyboard support in Kendo UI is about more than just mapping access keys for you. It's also about ensuring that your users can access the full capabilities of Kendo UI widgets using just the keyboard. And that's something you get out of the box.

In addition to accessKey support, every Kendo UI Web widget also supports a series of Keyboard controls that can be used to interact with our widgets. The specific keyboard shortcuts provided with each widget is provided in the Keyboard demo for that widget, all of which are linked below.

- [AutoComplete](http://demos.kendoui.com/web/autocomplete/navigation.html)
- [Calendar](http://demos.kendoui.com/web/calendar/navigation.html)
- [ComboBox](http://demos.kendoui.com/web/combobox/navigation.html)
- [DatePicker](http://demos.kendoui.com/web/datepicker/navigation.html)
- [DateTimePicker](http://demos.kendoui.com/web/datetimepicker/navigation.html)
- [DropDownList](http://demos.kendoui.com/web/dropdownlist/navigation.html)
- [Editor](http://demos.kendoui.com/web/editor/navigation.html)
- [Grid](http://demos.kendoui.com/web/grid/navigation.html)
- [ListView](http://demos.kendoui.com/web/listview/navigation.html)
- [Menu](http://demos.kendoui.com/web/menu/navigation.html)
- [NumericTextBox](http://demos.kendoui.com/web/numerictextbox/navigation.html)
- [PanelBar](http://demos.kendoui.com/web/panelbar/navigation.html)
- [Slider](http://demos.kendoui.com/web/slider/navigation.html)
- [Splitter](http://demos.kendoui.com/web/splitter/navigation.html)
- [TabStrip](http://demos.kendoui.com/web/tabstrip/navigation.html)
- [TimePicker](http://demos.kendoui.com/web/timepicker/navigation.html)
- [TreeView](http://demos.kendoui.com/web/treeview/navigation.html)
- [Window](http://demos.kendoui.com/web/window/navigation.html)