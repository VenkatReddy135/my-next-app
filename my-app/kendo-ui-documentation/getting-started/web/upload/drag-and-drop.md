---
title: Drag and drop
meta_title: Drag and drop feature in async mode of Kendo UI Upload widget
meta_description: Step-by-step instructions how to upload files with drag and drop feature in async mode in File Upload UI widget.
slug: upload-drag-and-drop
ordinal: 2
publish: true
---

Users can select files by dropping them over the Upload.

This feature is only available in [async mode](modes#asynchronous-mode) and requires a supported browser.

## Uploading files with drag and drop

1. The drop zone will appear when a file is dragged over the browser window.  ![](upload-dd1.png)
2. The drop zone will be highlighted when the mouse is over it.  ![](upload-dd2.png)
3. Releasing the file over the drop zone will add it to the upload queue.  ![](upload-dd3.png)

##  Drop zone visibility

The drop zone is not visible by default. You can override this behavior with the following CSS rules:

    div.k-dropzone {
        border: 1px solid #c5c5c5; /* For Default; Different for each theme */
    }

    div.k-dropzone em {
        visibility: visible;
    }

