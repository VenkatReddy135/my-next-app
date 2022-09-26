---
title: Troubleshooting
meta_title: Troubleshooting of Kendo UI Editor widget
meta_description: How to deal with the troubleshooting of Editor UI widget.
slug: editor-troubleshooting
ordinal: 3
publish: true
---

# Editor troubleshooting

## Pasting content in the editor when using IE does not display anything

Pasting in the editor requires permission to access clipboard data. This may require users with strict security settings to add the site in the trusted sites zone, or to adjust their Internet options so that the "Allow Programmatic clipboard access" setting is set to either "Allowed" or "Prompt".


## Editor inside a popup is readonly in Firefox

Firefox cannot handle iframes properly when they are moved in the DOM. When an Editor will be used inside a popup, which moves elements in the DOM, the popup (e.g. Kendo UI Window, jQuery dialog, etc) should be initialized first.


## Inline editor value is not posted to the server

Since the inline editor is initialized from a non-form element, it is not posted to the server by design. If you need to submit the editor value along with the form, use the following approach:

    <form>
      <div id="comment" contentEditable></div>

      <button class="k-button">Submit</button>
    </form>

    <script>
      $("form").on("submit", function() {
        var form = $(this);

        // for each editor in the form
        form.find("[data-role=editor]").each(function() {
          var editor = $(this).data("kendoEditor");

          // ... append a hidden input that holds the editor value
          $("<input type='hidden' />")
            .attr("name", editor.element.attr("id"))
            .val(editor.value())
            .appendTo(form);
        });
      });
    </script>
