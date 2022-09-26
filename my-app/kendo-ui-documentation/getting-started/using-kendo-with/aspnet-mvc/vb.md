---
title: VB Syntax
meta_title: Visual Basic syntax in Kendo UI MVC wrapper declarations
meta_description: Example of correct VB Syntax which is applicable to anonymous types and lambda expressions in Kendo UI MVC wrapper declarations.
slug: mvc-vb
publish: true
---

# VB Syntax

The following example shows the correct Visual Basic (VB) syntax when using [lamba expressions](http://msdn.microsoft.com/en-us/library/bb531253.aspx) and
[anonymous types](http://msdn.microsoft.com/en-us/library/bb384767.aspx) inside Kendo UI MVC wrapper declarations.

    @Code

        Html.Kendo().Editor() _
        .Name("Editor") _
        .HtmlAttributes(New With {.style = "width: 740px;height:440px"}) _
        .Value(Sub()@<text><p>Hellow World!</p></text> End Sub) _
        .Tools(Sub(t)
                       t.Clear()
                       t.FontName(Sub(items)
                                          items.Add("Garamond", "garamond")
                                          items.Add("Verdana", "verdana")
                                  End Sub)
                       t.CustomButton(Sub(cb)
                                              cb.Name("custom")
                                              cb.ToolTip("horizontal rule")
                                              cb.Exec(Function()
                                                              Return "function(e) { alert('exec'); }"
                                                      End Function)
                                      End Sub)
                       t.CustomTemplate(Sub(ct)
                                                ct.Template("<span>custom template</span>")
                                        End Sub)
               End Sub) _
        .Render()

    End Code