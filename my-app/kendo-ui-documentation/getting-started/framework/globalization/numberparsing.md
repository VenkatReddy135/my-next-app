---
title: Number parsing
meta_title: Number Parsing | Kendo UI Framework Globalization documentation
meta_description: Learn how to parse a string as a whole number or floating point number using the specified culture.
slug: number-parsing
publish: true
---
# Number parsing

Kendo exposes methods which converts the specified string to a [Number](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number) object using culture's specific settings.

## Parse a string as a whole number

[kendo.parseInt(string, [culture])](http://docs.kendoui.com/api/framework/kendo#parseInt) - converts a string to a whole number using the specified culture (current culture by default):

    //assumes that current culture defines decimal separator as "."
    kendo.parseInt("12.22"); //12

    //assumes that current culture defines decimal separator as "."
    kendo.parseInt("1000 %") //10

    //assumes that current culture defines decimal separator as ",", group separator as "." and currency symbol as "€"
    kendo.parseInt("1.212,22 €"); //1212

## Parse a string as a floating point number

[kendo.parseFloat(string, [culture])](http://docs.kendoui.com/api/framework/kendo#parseInt) - converts a string to a number with floating point using the specified culture (current culture by default).

    //assumes that current culture defines decimal separator as "."
    kendo.parseFloat("12.22"); //12.22

    //assumes that current culture defines decimal separator as "."
    kendo.parseInt("10.22 %") //0.1022

    //assumes that current culture defines decimal separator as ",", group separator as "." and currency symbol as "€"
    kendo.parseFloat("1.212,22 €"); //1212.22
