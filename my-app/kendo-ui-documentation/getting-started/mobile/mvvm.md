---
title: MVVM Integration
meta_title: Documentation guide for Kendo MVVM framework in a mobile application
meta_description: How to start using Kendo MVVM in a mobile app. Learn how to bind the mobile widget's configuration options and manage them through a view model.
slug: gs-mobile-mvvm
relatedDocs: api-mobile-mvvm
tags: getting-started, mobile
publish: true
---

# Using Kendo MVVM in a mobile application

The Kendo Mobile application provides close integration with the Kendo MVVM framework. The mobile widgets' configuration options can be bound and managed through a view model.

The recommended way to use Kendo MVVM with the Kendo Mobile Application is through the `model` configuration option of the [mobile view](/api/mobile/view#configuration).

#### Example

    <script>
     var foo = { bar: "baz" }
    </script>

    <div data-role="view" data-model="foo">
       <span data-bind="text:bar"></span>
    </div>

A complex model reference can also be specified.

    <script>
     var foo = {
            bar: { baz: "qux" }
     }
    </script>

    <div data-role="view" data-model="foo.bar">
       <span data-bind="text:baz"></span>
    </div>

When initialized, the mobile View will call [kendo.bind](/framework/mvvm/overview) on its child elements, using the provided model.

**Note:** The mobile View will bind **mobile**, **web**, and **dataviz** widgets (in that order).
This means that if an element with `data-role="listview"` is present, a mobile (and not web) listview will be initialized.
This behaviour can be overriden by specifying the full widget class name (with its namespace) in the role attribute.

