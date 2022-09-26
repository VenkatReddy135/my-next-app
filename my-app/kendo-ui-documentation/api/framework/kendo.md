---
title: kendo
meta_title: API Reference for methods and properties in Kendo UI Framework
meta_description: Examples and detailed explanation of Kendo UI methods and properties.
slug: api-framework
tags: api,framework
publish: true
---

# kendo

## Methods

### bind
Binds a HTML View to a View-Model.

Model View ViewModel ([MVVM](http://en.wikipedia.org/wiki/Model_View_ViewModel)) is a design pattern which helps developers separate the Model from the View. The View-Model part of MVVM is responsible for
exposing the data objects from the Model in such a way that those objects are easily consumed in the View.

> **Important:** Kendo UI Mobile is not included in the default list of initialized namespaces. You can initialize it explicitly by
  running `kendo.bind(element, viewModel, kendo.mobile.ui);`

#### Example - bind a DOM element to a view model

     <!-- View -->
     <div id="view">
       <!-- The value of the INPUT element is bound to the "firstName" field of the View-Model.
       When the value changes so will the "firstName" field and vice versa.  -->
       <label>First Name:<input data-bind="value: firstName" /></label>
       <!-- The value of the INPUT element is bound to the "lastName" field of the View-Model.
       When the value changes so will the "lastName" field and vice versa.   -->
       <label>Last Name:<input data-bind="value: lastName" /></label>
       <!-- The click event of the BUTTON element is bound to the "displayGreeting" method of the View-Model.
       When the user clicks the button the "displayGreeting" method will be invoked.  -->
       <button data-bind="click: displayGreeting">Display Greeting</button>
     </div>
     <script>
       // View-Model
       var viewModel = kendo.observable({
          firstName: "John",
          lastName: "Doe",
          displayGreeting: function() {
              // Get the current values of "firstName" and "lastName"
              var firstName = this.get("firstName");
              var lastName = this.get("lastName");
              alert("Hello, " + firstName + " " + lastName + "!!!");
          }
       });

       // Bind the View to the View-Model
       kendo.bind($("#view"), viewModel);
     </script>

#### Parameters

##### element `String|jQuery|Element`

The root element(s) from which the binding starts. Can be a valid jQuery string selector, a DOM element or a jQuery object.
All child elements are traversed.

##### viewModel `Object|kendo.data.ObservableObject`

The View-Model which the elements are bound to. Wrapped as an instance of `kendo.data.ObservableObject` if not already.

##### namespace `Object`

Optional namespace too look in when instantiating Kendo UI widgets. The valid namespaces are `kendo.ui`, `kendo.dataviz.ui` and `kendo.mobile.ui`. If omitted
`kendo.ui` will be used. Multiple namespaces can be passed.


### init

Instantiates Kendo UI widgets in a given DOM element based on role data attributes.

#### Example
     <div id="view">
        <div>
            <input data-role="autocomplete" data-source="data" data-filter="startswith" data-placeholder="select country ..." />
        </div>
     </div>
     <script>
     var data = [ "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia & Herzegovina", "Bulgaria", "Croatia", "Cyprus"  ];

     kendo.init($("#view"));
     </script>

#### Parameters

##### element `String|jQuery|Element`

The root element(s) from which the instantiation starts. Can be a valid jQuery string selector, a DOM element or a jQuery object. All child elements are traversed.

##### namespace `Object`

Optional namespace too look in when instantiating Kendo UI widgets. The valid namespaces are `kendo.ui`, `kendo.dataviz.ui` and `kendo.mobile.ui`. If omitted
`kendo.ui` will be used. Multiple namespaces can be passed.

#### Example

     <div id="view">
        <div>
            <input data-role="autocomplete" data-source="data" data-filter="startswith" data-placeholder="select country ..." />
            <button data-role="button" data-click="foo">Foo</button>
        </div>
     </div>

     <script>
     function foo(e) {
         console.log(e.sender); // a mobile button
     }
     var data = [ "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia & Herzegovina", "Bulgaria", "Croatia", "Cyprus"  ];

     kendo.init($("#view"), kendo.mobile.ui, kendo.ui);
     </script>

### observableHierarchy

Creates an ObservableArray instance that is bound to a HierarchicalDataSource. Required to bind a HierarchicalDataSource-enabled widget (such as the Kendo UI TreeView) to a view-model.

#### Example

    <div data-role="treeview" data-bind="source: products"></div>
    <script>
    var viewModel = kendo.observable({
      products: kendo.observableHierarchy([
        {
          text: "foo",
          items: [
            { text: "bar" }
          ]
        },
        { text: "baz" }
       ])
    });
    kendo.bind(document.body, viewModel);
    </script>

#### Parameters

##### array `Array`

The array that will be converted to an ObservableArray.

### culture
Sets or gets the current culture. Uses the passed culture name to select a culture from the culture scripts that you have included and then sets the current culture.
If there is no corresponding culture then the method will try to find culture which is equal to the country part of the culture name.
If no culture is found the default one is used.

#### Example -  include a culture-specific JavaScript file and set the culture
    <script src="http://cdn.kendostatic.com/2013.2.716/js/cultures/kendo.culture.en-GB.min.js"></script>
    <script>
      console.log(kendo.format("{0:c}", 99)); // outputs "$99.00" using the default en-US culture
      kendo.culture("en-GB"); // change the culture
      console.log(kendo.format("{0:c}", 99)); // outputs "£99.00"
    </script>

#### Get the current culture
    <script>
    var culture = kendo.culture();
    console.log(culture.name); // outputs "en-US"
    </script>

#### Parameters

##### culture `String`

The culture to set.

### destroy

Finds all Kendo widgets that are children of the specified element and calls their destroy method.

#### Example

    <input id="autocomplete">
    <script>
    $("#autocomplete").kendoAutoComplete();
      console.log($("#autocomplete").data("kendoAutoComplete") != null); // outputs "true"
      kendo.destroy(document.body);
      console.log($("#autocomplete").data("kendoAutoComplete") != null); // outputs "false"
    </script>

#### Parameters

##### element `String|jQuery|Node`

### format

Replaces each format item in a specified string with the text equivalent of a corresponding object's value. Uses [toString](#methods-toString) for every format item.

#### Example
    <script>
    console.log(kendo.format("{0} - {1}", 12, 24));  // outputs "12 - 24"
    console.log(kendo.format("{0:c} - {1:c}", 12, 24)); // outputs "$12.00 - $24.00"
    </script>

#### Returns

`String` The formatted string.

### htmlEncode

Encodes HTML characters to entities.

#### Example
    <script>
    var html = kendo.htmlEncode("<span>Hello</span>");
    console.log(html); // outputs "&lt;span&gt;Hello&lt;/span&gt;"
    </script>

#### Parameters

##### value `String`

The string that needs to be HTML encoded.

#### Returns

`String` The encoded string.

### parseDate

Parses as a formatted string as a `Date`.

#### Example
    <script>
      console.log(kendo.parseDate("2013/3/4 10:00 AM")); // outputs "Mon Mar 04 2013 10:00:00"
      console.log(kendo.parseDate("3/4/2013", "MM/dd/yyyy")); // outputs "Mon Mar 04 2013 00:00:00"
      console.log(kendo.parseDate("invalid")); // outputs "null"
    </script>

#### Parameters

##### value `String`

The string which should be parsed as `Date`.

##### formats `String|Array` *(optional)*

The format(s) that will be used to parse the date. By default all standard date formats of the current culture are used.

##### culture `String` *(optional)*

The culture used to parse the number. The current culture is used by default.

#### Returns

`Date` the parsed date. Returns `null` if the value cannot be parsed as a valid `Date`.

### parseFloat

Parses a string as a floating point number.

#### Example

    <script src="http://cdn.kendostatic.com/2013.2.716/js/cultures/kendo.culture.de-DE.min.js"></script>
    <script>
      console.log(kendo.parseFloat("12.22")); // outputs "12.22"
      kendo.culture("de-DE");
      console.log(kendo.parseFloat("1.212,22 €")); // outputs "1212.22"
      console.log(kendo.parseFloat("invalid")); // outputs "null"
    </script>

#### Returns

`Number` the parsed number. Returns `null` if the value cannot be parsed as a valid `Number`.

#### Parameters

##### value `String`

The string which should be parsed as a `Number`.

##### culture `String` *(optional)*

The culture used to parse the number. The current culture is used by default.

### parseInt

Parses as a string as an integer.

#### Example

    <script src="http://cdn.kendostatic.com/2013.2.716/js/cultures/kendo.culture.de-DE.min.js"></script>
    <script>
      console.log(kendo.parseInt("12.22")); // outputs "12"
      kendo.culture("de-DE");
      console.log(kendo.parseInt("1.212,22 €")); // outputs 1212
      console.log(kendo.parseInt("invalid")); // outputs "null"
    </script>

#### Returns

`Number` the parsed number. Returns `null` if the value cannot be parsed as a valid `Number`.

#### Parameters

##### value `String`

The string which should be parsed as `Number`.

##### culture `String` *(optional)*

The culture used to parse the number. The current culture is used by default.

### parseColor

Parse a color string to a Color object.  If the input is not valid throws an Error, unless the `noerror` argument is given.

#### Example

    <script>
    var red = kendo.parseColor("#ff0000");
    </script>

#### Parameters

##### color `String`

A string in one of the following (case-insensitive) CSS notations:

- `#F00` (optionally without the sharp: `F00`)
- `#FF0000` (optionally without the sharp: `FF0000`)
- `rgb(255, 0, 0)`
- `rgba(255, 0, 0, 1)`

Particularly if this argument is `null` or the string `"transparent"` then this function will return `null`.

##### noerror `Boolean`*(default: false)*

If you pass `true` then this function will return `undefined` rather than throwing an error on invalid input.

#### Returns

`Color` A Color object.

### render

Renders the specified template using the provided array.

#### Example
    <ul></ul>
    <script>
    var template = kendo.template("<li>#: name #</li>");
    var data = [ { name: "John Doe" }, { name: "Jane Doe" }];
    var html = kendo.render(template, data);
    $("ul").html(html);
    </script>

#### Parameters

##### template `Function`

The Kendo UI template which should be rendered. Create one via the [template](#methods-template) method.

##### data `Array`

The array of objects which contains the data that the template will render.

### stringify

Converts a JavaScript object to [JSON](http://en.wikipedia.org/wiki/JSON). Uses [JSON.stringify](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/stringify) in browsers that support it.

#### Parameters

##### value `Object`

The value to convert to a JSON string.

#### Returns

`String` The JSON representation of the value.

#### Example

    <script>
    var json = kendo.stringify({ foo: "bar" });
    console.log(json); // displays {"foo":"bar"}
    </script>


### template

Compiles a template to a function that builds HTML. Useful when a template will be used several times.
Templates offer way of creating HTML chunks. Options such as HTML encoding and compilation for optimal
performance are available.

#### Example - Basic template

    <span id="output"></span>
    <script>
    var template = kendo.template("Hello, #= firstName # #= lastName #");
    var data = { firstName: "John", lastName: "Doe" };
    $("#output").html(template(data));
    </script>

#### Example - encode HTML

    <span id="output"></span>
    <script>
    var template = kendo.template("HTML tags are encoded: #: html #");
    var data = { html: "<strong>lorem ipsum</strong>" };
    $("#output").html(template(data));
    </script>

#### Example - use JavaScript in the template

    <span id="output"></span>
    <script>
    var template = kendo.template("#if (foo) {# foo is true #}#");
    var data = { foo: true };
    $("#output").html(template(data));
    </script>

#### Example - escape sharp ("#") symbols in an inline template

    <span id="output"></span>
    <script>
    var template = kendo.template("<a href='\\#'>link</a>");
    $("#output").html(template({}));
    </script>

#### Example - escape sharp ("#") symbols in a template defined in a script element

    <span id="output"></span>
    <script type="text/x-kendo-template" id="template">
    <a href="\#">link</a>
    </script>
    <script>
    var template = kendo.template($("#template").html());
    $("#output").html(template({}));
    </script>

#### Returns
`Function` the compiled template as a JavaScript function. When called this function will return the generated HTML string.

#### Parameters

##### template `String`

The template that will be compiled.

##### options `Object` *(optional)*

Template compilation options.

##### options.paramName `String` *(default: "data")*

The name of the parameter used by the generated function. Useful when `useWithBlock` is set to `false`.

###### Example

    var template = kendo.template("<strong>#: d.name #</strong>", { paramName: "d", useWithBlock: false });

##### options.useWithBlock `Boolean` *(default: true)*

Wraps the generated code in a `with` block. This allows the usage of unqualified fields in the template. Disabling the `with` block will improve
the performance of the template.

###### Example
    var template = kendo.template("<strong>#: data.name #</strong>", { useWithBlock: false }); // Note that "data." is used to qualify the field

    console.log(template({ name: "John Doe" })); // outputs "<strong>John Doe</strong>"

### touchScroller

Enables kinetic scrolling on touch devices

#### Example
    <div id="scrollable" style="height: 200px">
      Scrollable
      <div style="height: 1000px">content</div>
    </div>
    <script>
      kendo.touchScroller($("#scrollable"));
    </script>

#### Parameters

##### element `String|jQuery|Element`

The container element to enable scrolling for.

### toString

Formats a `Number` or `Date` using the specified format and the current culture.

#### Example
    <script src="http://cdn.kendostatic.com/2013.2.716/js/cultures/kendo.culture.de-DE.min.js"></script>
    <script>
      //format a number using standard number formats and default culture (en-US)
      console.log(kendo.toString(10.12, "n")); // outputs "10.12"
      console.log(kendo.toString(10.12, "n0")); // outputs "10"
      console.log(kendo.toString(10.12, "n5")); // outputs "10.12000"
      console.log(kendo.toString(10.12, "c")); // outputs "$10.12"
      console.log(kendo.toString(0.12, "p")); // outputs "12.00 %"
      //format a number using custom number formats
      console.log(kendo.toString(19.12, "00##")); //outputs "0019"
      //format a number using standard number format and a specific culture de-DE (default culture is en-US)
      console.log(kendo.toString(10.12, "c", "de-DE")); //outputs "10,12" €
      //format a date
      console.log(kendo.toString(new Date(2010, 9, 5), "yyyy/MM/dd" )); // outputs "2010/10/05"
      console.log(kendo.toString(new Date(2010, 9, 5), "dddd MMMM d, yyyy" )); // outputs "Tuesday October 5, 2010"
      console.log(kendo.toString(new Date(2010, 10, 10, 22, 12), "hh:mm tt" )); // outputs "10:12 PM"
    </script>

#### Returns

`String` the string representation of the formatted value.

#### Parameters

##### value `Date|Number`

The `Date` or `Number` which should be formatted.

##### format `String`
The format string which should be used to format the value.

##### culture `String`
The name of the culture which should be used to format the value. [The culture should be registered on the page](http://docs.kendoui.com/getting-started/framework/globalization/overview#add culture scripts to the page).

## Fields

### support

A range of useful supported by the current browser capabilities and features.

#### support

##### touch `Boolean`
Return true if the browser supports touch events.

##### pointers `Boolean`
Return true if the browser supports pointer events (IE10 and Metro apps currently).

##### scrollbar `Function`
Checks for the browser scrollbar width, returns scrollbar width in pixels, 0 if no scrollbars available (e.g. in mobile).

##### hasHW3D `Boolean`
Return true if the browser supports 3D transitions and transforms.

##### hasNativeScrolling `Boolean`
Returns true if the browser supports overflow-scrolling CSS property (currently only iOS 5+).

##### devicePixelRatio `Number` *(default: 1)*
Returns the current device Device to Pixel Ratio - works only in Android.

##### placeHolder `Boolean`
Retruns true if the browser supports input placeholders.

##### zoomLevel `Number` *(default: 1)*
Returns the current zoom level on a mobile browser (returns 1 on desktop).

### support.transforms `Object`
Returns a number of browser specific transformation properties

#### support.transforms
##### transforms.css `String`
Returns the CSS prefix of the current browser proprietary transform properties. E.g. "-webkit-", "-moz-", "-o-", "-ms-"

##### transforms.prefix `String`
Returns the JavaScript prefix of the current browser proprietary transform properties. E.g. "webkit", "Moz", "O", "ms"

### support.transitions `Object`
Returns a number of browser specific transition properties

#### support.transitions
##### transitions.css `String`
Returns the CSS prefix of the current browser proprietary transition properties. E.g. "-webkit-", "-moz-", "-o-", "-ms-"

##### transitions.prefix `String`
Returns the JavaScript prefix of the current browser proprietary transition properties. E.g. "webkit", "Moz", "O", "ms"

##### transitions.event `String`
Returns the transition end event name in the current browser. E.g. "webkitTransitionEnd", "transitionend", "oTransitionEnd"

### support.mobileOS `Object`
Returns a number of properties that identify the current mobile browser. Parses navigator.userAgent to do it. Undefined on desktop.

#### support.mobileOS
##### device `String`
Returns the current mobile device identifier, can be "fire", "android", "iphone", "ipad", "meego", "webos", "blackberry", "playbook", "wp", "windows".

##### tablet `String` *(default: false)*
Returns the current tablet identifier or false if the current device is not a tablet, can be "fire", "ipad", "playbook" or false.

##### browser `String` *(default: "default")*
Returns the current browser identifier or "default" if the browser is the native one, can be "omini", "omobile", "firefox", "mobilesafari", "webkit", "ie", "default".

##### name `String`
Returns the current os name identifier, can be "ios", "android", "blackberry", "windows", "webos", "meego". For convenience a property with the os name is also initialized,
for instance:

    if (kendo.support.mobileOS.android) {
        // Do something in Android
    }

##### majorVersion `String`
The current OS major version, e.g. "5" in iOS 5.1.

##### minorVersion `String`
The current OS minor versions, e.g. "1.1" in iOS 5.1.1.

##### flatVersion `Number`
A convenience property to allow easier version checks, for instance:

    var os = kendo.support.mobileOS;
    if (os.ios && os.flatVersion >= 400 && os.flatVersion < 500) {
        // Do something in iOS 4.x
    }

##### appMode `Boolean`
Returns true if running in application mode - pinned to desktop in iOS or running in PhoneGap/WebView.

## Standard number formats

### *n*

Formats the value as a number with decimal and thousand separators.

#### Example

    <script src="http://cdn.kendostatic.com/2013.2.716/js/cultures/kendo.culture.de-DE.min.js"></script>
    <script>
    console.log(kendo.toString(1234.567, "n")); // outputs "1,234.57"
    kendo.culture("de-DE");
    console.log(kendo.toString(1234.567, "n3")); //outputs "1.234,567"
    </script>

### *c*

Formats the value by adding the currency symbol.

#### Example

    <script src="http://cdn.kendostatic.com/2013.2.716/js/cultures/kendo.culture.de-DE.min.js"></script>
    <script>
    console.log(kendo.toString(1234.567, "c")); // outputs "$1,234.57"
    kendo.culture("de-DE");
    console.log(kendo.toString(1234.567, "c3")); // outputs "1.234,567 €"
    <script>

### *p*

Formats the value as percentage (the value is multiplied by 100).

#### Example

    <script>
    console.log(kendo.toString(0.222, "p")); // outputs "22.20 %"
    console.log(kendo.toString(0.22, "p3")); // outputs "22.000 %"
    </script>

### *e*

Returns the value in exponential format.

#### Example
    <script>
    console.log(kendo.toString(0.122, "e")); // outputs "1.22e-1"
    </script>

## Custom number formats

Custom number formats can be created by using one or more custom numeric specifiers.

### Format Specifiers

#### *0*

Zero placeholder. Replaces the zero with the corresponding digit if one is present; otherwise, zero appears in the result string.

##### Example
    <script>
    console.log(kendo.toString(1234.5678, "00000")); // outputs "01235"
    </script>

#### *#*

Digit placeholder. Replaces the pound sign with the corresponding digit if one is present; otherwise, no digit appears in the result string.

##### Example

    <script>
    console.log(kendo.toString(1234.5678, "#####")); // outputs "1235"
    </script>

#### *.*

Decimal placeholder. Determines the position of the decimal separator in the result string.

##### Example

    <script>
    console.log(kendo.toString(0.45678, "0.00")); // outputs "0.46"
    </script>

#### *,*

Group separator. Inserts a group separator between each group of digits.

##### Example
    <script>
    console.log(kendo.toString(12345678, "##,#")); // outputs "12,345,678"
    </script>

#### *%*

Percentage. Multiplies a number by 100 and inserts a the percentage symbol (according to the current culture) in the result string.

##### Example
    <script>
      console.log(kendo.toString(0.14, "#%")); // outputs "14%"
    </script>

#### *e*

Exponential notation.

##### Example
    <script>
    console.log(kendo.toString(0.45678, "e0")); // outputs "5e-1"
    </script>

#### *;*

Section separator. Defines sections of separate format strings for positive, negative, and zero numbers.

##### Example

    <script>
      console.log(kendo.toString(3.14, "0.0;0.00")); // outputs "3.1"
      console.log(kendo.toString(-3.14, "0.0;-0.00")); // outputs "-3.14"
    </script>

#### *"string"|'string'*

Literal string. Indicates literal strings which should be included in the result verbatim.

##### Example

## Standard date formats

#### *d*

Short date pattern.

##### Example

    <script>
    console.log(kendo.toString(new Date(2000, 10, 6), "d")); // outputs "11/6/2000"
    </script>

#### *D*

Long date pattern.

##### Example
    <script>
    console.log(kendo.toString(new Date(2000, 10, 6), "D")); // outputs "Monday, November 06, 2000"
    </script>

#### *F*

Full date time pattern.

##### Example

    <script>
    console.log(kendo.toString(new Date(2000, 10, 6), "F")); // outputs "Monday, November 06, 2000 12:00:00 AM"
    </script>

#### *g*

General date/time pattern (short time).

##### Example
    <script>
    console.log(kendo.toString(new Date(2000, 10, 6), "g")); // outputs "11/6/2000 12:00 AM"
    </script>

#### *G*

General date/time pattern (long time).

##### Example
    <script>
    console.log(kendo.toString(new Date(2000, 10, 6), "G")); // outputs "11/6/2000 12:00:00 AM"
    </script>

#### *m|M*

Day of month pattern.

##### Example
    <script>
    console.log(kendo.toString(new Date(2000, 10, 6), "m")); // outputs "November 06"
    </script>

#### *u*

Universal sortable date/time pattern

##### Example
    <script>
    console.log(kendo.toString(new Date(2000, 10, 6), "u")); // outputs "2000-11-06 00:00:00Z"
    </script>

#### *y|Y*

Month year pattern.

##### Example
    <script>
    console.log(kendo.toString(new Date(2000, 10, 6), "y")); // outputs "November, 2000"
    </script>

## Custom date formats

Custom date formats can be created by using one or more custom date specifiers.

### Format Specifiers

#### *d*

The day of the month, from 1 to 31.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6), "yyyy/M/d")); // outputs "2013/6/6"
    </script>

#### *dd*

The zero-padded day of the month - from 01 to 31.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6), "yyyy/M/dd")); // outputs "2013/6/06"
    </script>

#### *ddd*

The abbreviated name of the day of the week.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6), "ddd,yyyy/M")); // outputs "Thu, 2013/6"
    </script>

#### *dddd*

The full name of the day of the week.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6), "ddd,yyyy/M")); // outputs "Thursday, 2013/6"
    </script>

#### *f*

The tenths of a second.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6, 5, 5, 5, 500), "f")); // outputs "5"
    </script>

#### *ff*

The hundreds of a second.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6, 5, 5, 5, 500), "ff")); // outputs "50"
    </script>

#### *fff*

The milliseconds.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6, 5, 5, 5, 500), "fff")); // outputs "500"
    </script>

#### *M*
The month, from 1 to 12.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6), "yyyy/M/d")); // outputs "2013/6/6"
    </script>

#### *MM*

The zero-padded month, from 01 to 12.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6), "yyyy/MM/d")); // outputs "2013/06/6"
    </script>

#### *MMM*
The abbreviated name of the month.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6), "yyyy/MMM/d")); // outputs "2013/Jun/6"
    </script>

#### *MMMM*

The full name of the month.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6), "yyyy/MMM/d")); // outputs "2013/June/6"
    </script>

#### *h*
The hour, using 12-hour clock from 1 to 12.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6, 6, 0), "h")); // outputs "6"
    </script>

#### *hh*
The zero-padded hour, using 12-hour clock from 01 to 12.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6, 6, 0), "h")); // outputs "06"
    </script>

#### *H*

The hour, using 24-hour clock from 0 to 23.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6, 13, 0), "H")); // outputs "13"
    </script>

#### *HH*

The zero-padded hour, using 24-hour clock from 00 to 23.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6, 6, 0), "HH")); // outputs "06"
    </script>

#### *m*

The minute, from 0 to 59.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6, 6, 30), "m")); // outputs "30"
    </script>

#### *mm*

The zero-padded minute, from 00 to 59.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6, 6, 5), "mm")); // outputs "05"
    </script>

#### *s*

The second, from 0 to 59.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6, 6, 5, 5), "s")); // outputs "5"
    </script>

#### *ss*

The zero-padded second, from 00 to 59.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6, 6, 5, 5), "ss")); // outputs "05"
    </script>

#### *tt*

The AM/PM designator.

##### Example
    <script>
    console.log(kendo.toString(new Date(2013, 5, 6, 13, 0), "HH tt")); // outputs "13 PM"
    </script>

### unbind

Unbinds a tree of HTML elements from a View-Model.

#### Example
     <div id="view">
       <label>First Name:<input data-bind="value: firstName" /></label>
       <label>Last Name:<input data-bind="value: lastName" /></label>
       <button data-bind="click: displayGreeting">Display Greeting</button>
     </div>
     <script>
     var viewModel = kendo.observable({
        firstName: "John",
        lastName: "Doe",
        displayGreeting: function() {
            // Get the current values of "firstName" and "lastName"
            var firstName = this.get("firstName");
            var lastName = this.get("lastName");
            alert("Hello, " + firstName + " " + lastName + "!!!");
        }
     });
     kendo.bind($("#view"), viewModel);
     // unbind the view model
     kendo.unbind($("#view"));
     </script>

#### Parameters

##### element `String|jQuery|Node`

The root element(s) from which the unbinding starts. Can be a valid jQuery string selector, a DOM element or a jQuery object.
All child elements are traversed.

<a name="Color"></a>
## Color objects

These objects can be used to manipulate colors.  You cannot instantiate a
`Color` object directly, instead you should use `kendo.parseColor` or one of
the functions below:

    var red = kendo.Color.fromRGB(1, 0, 0, 1);
    var blue = kendo.Color.fromBytes(0, 0, 255, 1);
    var green = kendo.Color.fromHSV(120, 1, 1, 1);

We support three color representations: as RGB (where the values are float
numbers between 0 and 1), as Bytes (where values are integers between 0 and
255) or as [HSV](http://en.wikipedia.org/wiki/HSL_and_HSV).  They all
support transparency via the last argument, a float between 0 and 1.  If
missing it will default to 1 (fully opaque).

If you are not certain which representation is used internally for a
particular color object, you can convert it to the one you need using one of
the methods below.

### Methods

#### toHSV

Returns the color in HSV representation.  As HSV object, it has the
following properties:

- `h` -- hue, an integer between 0 and 360
- `s` -- saturation, floating point between 0 and 1
- `v` -- value, floating point between 0 and 1
- `a` -- alpha, floating point between 0 and 1

This does not modify the current object, it creates a new one instead.

#### toRGB

Returns the color in RGB representation.  The result has the following
properties:

- `r` -- red component as floating point between 0 and 1
- `g` -- green component
- `b` -- blue component
- `a` -- alpha

This does not modify the current object, it creates a new one instead.

#### toBytes

Returns the color in "Bytes" representation.  It has the same properties as
RGB, but `r`, `g` and `b` are integers between 0 and 255 instead of floats.

This does not modify the current object, it creates a new one instead.

#### toHex

Returns a string in `"FF0000"` form (without a leading `#`).

#### toCss

Like `toHex`, but includes a leading `#`.

#### toCssRgba

Returns the color in RGBA notation (includes the opacity).

#### toDisplay

Returns the color in the best notation supported by the current browser.  In
IE < 9 this returns the `#FF0000` form; in all other browsers it returns the
RGBA form.

#### equals

Returns `true` if two colors are identical.

##### Parameters

###### other `Color`

This can also be a `String` parse-able with `kendo.parseColor`.

### Examples

    color = kendo.parseColor("rgba(255, 0, 0, 1)");

    color = color.toHSV();
    console.log(color.h, color.s, color.v, color.a);

    color = color.toRGB(); // floating point values 0..1
    console.log(color.r, color.g, color.b, color.a);

    color = color.toBytes(); // bytes (0..255)
    console.log(color.r, color.g, color.b, color.a);

    console.log(color.equals("#f00")); // true
    console.log(color.equals("rgb(255, 0, 0)")); // true
    console.log(color.equals(kendo.Color.fromHSV(0, 1, 1)); // true

    color.g = 255; // current representation is Bytes
    console.log(color.equals("#ff0")); // true
