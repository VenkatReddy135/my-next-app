---
title: Icons
slug: mobile-icons
publish: true
---

# Icons in Kendo UI Mobile

> **Important:** Current WP8 versions do not support web fonts loaded from a local CSS when used in PhoneGap or HTML5 applications!
Unfortunately there are no known workarounds yet. Use images for icons when targeting WP8 applications.

Kendo UI Mobile includes 33 integrated font icons, which can be used directly in a Kendo UI Mobile project by specifying a data-icon attribute with one of the following icon names
(supported by all Button widgets and the ListView items):

<ul class="icon-block">
    <li><span class="km-icon km-about"></span><br/>about</li>
    <li><span class="km-icon km-action"></span><br/>action</li>
    <li><span class="km-icon km-add"></span><br/>add</li>
    <li><span class="km-icon km-bookmarks"></span><br/>bookmarks</li>
    <li><span class="km-icon km-camera"></span><br/>camera</li>
    <li><span class="km-icon km-cart"></span><br/>cart</li>
    <li><span class="km-icon km-compose"></span><br/>compose</li>
    <li><span class="km-icon km-contacts"></span><br/>contacts</li>
    <li><span class="km-icon km-delete"></span><br/>delete</li>
    <li><span class="km-icon km-details"></span><br/>details</li>
    <li><span class="km-icon km-downloads"></span><br/>downloads</li>
    <li><span class="km-icon km-fastforward"></span><br/>fastforward</li>
    <li><span class="km-icon km-favorites"></span><br/>favorites</li>
    <li><span class="km-icon km-featured"></span><br/>featured</li>
    <li><span class="km-icon km-globe"></span><br/>globe</li>
    <li><span class="km-icon km-history"></span><br/>history</li>
    <li><span class="km-icon km-home"></span><br/>home</li>
    <li><span class="km-icon km-info"></span><br/>info</li>
    <li><span class="km-icon km-more"></span><br/>more</li>
    <li><span class="km-icon km-mostrecent"></span><br/>mostrecent</li>
    <li><span class="km-icon km-mostviewed"></span><br/>mostviewed</li>
    <li><span class="km-icon km-organize"></span><br/>organize</li>
    <li><span class="km-icon km-pause"></span><br/>pause</li>
    <li><span class="km-icon km-play"></span><br/>play</li>
    <li><span class="km-icon km-recents"></span><br/>recents</li>
    <li><span class="km-icon km-refresh"></span><br/>refresh</li>
    <li><span class="km-icon km-reply"></span><br/>reply</li>
    <li><span class="km-icon km-rewind"></span><br/>rewind</li>
    <li><span class="km-icon km-search"></span><br/>search</li>
    <li><span class="km-icon km-settings"></span><br/>settings</li>
    <li><span class="km-icon km-share"></span><br/>share</li>
    <li><span class="km-icon km-sounds"></span><br/>sounds</li>
    <li><span class="km-icon km-stop"></span><br/>stop</li>
    <li><span class="km-icon km-toprated"></span><br/>toprated</li>
    <li><span class="km-icon km-trash"></span><br/>trash</li>
    <li><span class="km-icon km-volume"></span><br/>volume</li>
    <li><span class="km-icon km-wifi"></span><br/>wifi</li>
</ul>

# Creating custom icon font

Currently there are two options - using a font generator service like [Fontello](http://fontello.com/) to simplify the task, or prepare the icon, SVG and fonts manually.

Using [Fontello](http://fontello.com/) is pretty straightforward - pick the icons, choose the Unicode characters for them, type a font name and click Download to get a ZIP file
with the needed for mobile TTF and WOFF font formats, which can be directly used for icons. From the other files in there, EOT is not needed as it targets only IE6-8 and the
SVG font can be used to further modification.

The manual way is considerably more difficult. First create the desired icons using a vector editing software like Inkscape or Adobe Illustrator.
Export them to SVG format. Consult [these](http://www.webdesignerdepot.com/2012/01/how-to-make-your-own-icon-webfont/)
[articles](http://cleversomeday.wordpress.com/2010/02/09/inkscape-dings/) about SVG font creation using [Inkscape](http://inkscape.org/).
Import the SVG icons in Inkscape and create the SVG font icon by icon, assigning them to separate characters.
After creating the SVG font, convert it to TTF/WOFF formats, using [Online Font Converter](http://onlinefontconverter.com/) or other similar service.

### Loading the two fonts (TTF/WOFF) with @font-face:
    @font-face {
        font-family: "MyCustomFont";
        src: url("images/MyCustomFont.woff") format("woff"),
             url("images/MyCustomFont.ttf") format("truetype");
    }

### Overriding the Kendo UI font for all icons (alternatively separate classes can be used to override them one by one)
    .km-icon:after,
    .km-icon:before
    {
        font: 1em/1em "MyCustomFont";
    }

### Specify the character corresponding to every custom icon.
    .km-mycustomicon:after,
    .km-mycustomicon:before
    {
        content: "\E03a";
    }

Where mycustomicon is the icon name set in the data-icon attribute and \E03a is the Unicode character code of the icon.

## Serving icon fonts

As of Q3 2012, Kendo UI Mobile employs an icon font for its icon rendering. To be able to render it in most mobile and supported Desktop browsers out there, there are two font formats included in the Kendo UI distribution - TTF and WOFF. Most web servers out there doesn't support serving these fonts with a specific mime type. Since currently there is no standardized mime types for fonts, you only need to serve them both with mime type application/octet-stream or you can come up with any valid mime type (like application/x-font-ttf and application/x-font-woff for instance).

## Configure IIS

The two mime types can be specified either through the IIS management console (inetmgr) or in the site Web.config, like this:

### Configure IIS Web.config

    <?xml version="1.0"?>
    <configuration>
        ...
        <system.webServer>
            ...
            <staticContent>
                <remove fileExtension=".ttf" />
                <mimeMap fileExtension=".ttf" mimeType="application/octet-stream" />
                <remove fileExtension=".woff" />
                <mimeMap fileExtension=".woff" mimeType="application/octet-stream" />
            </staticContent>
        </system.webServer>
    </configuration>

Removing the mime type first is there to avoid clashes if the mime types for these files are already defined /IIS throws exception if they are/. Can be removed if not needed.

## Configure Apache

Apache configuration in some distributions includes mime-types application/x-font-ttf and application/x-font-woff by default. If these mime types are not listed, they can be added easily like this:

### Configure Apache in .htaccess

    AddType application/x-font-ttf .ttf
    AddType application/x-font-woff .woff

### Configure Apache in mime.types file

    application/x-font-ttf .ttf
    application/x-font-woff .woff

## Configure Nginx

For Nginx the configuration is similar:

### Configure Nginx mime.types file

    application/x-font-ttf .ttf
    application/x-font-woff .woff


## Configure CORS headers

Since fonts are usually copyrighted, most browsers doesn't allow using them across different domains. If serving multiple domains from one font location is needed, the fonts should be served with a Access-Control-Allow-Origin header. This header also supports using * instead of the domain name list, and while using it for normal text fonts is not advisable, it can be freely used for our icon font if the icons are living in a Kendo UI Mobile application. Configuration goes like this:

### Configure IIS - place a web.config in the font folder and add this in it:

    <httpProtocol>
      <customHeaders>
        <add name="Access-Control-Allow-Origin" value="*" />
      </customHeaders>
    </httpProtocol>

### Configure Apache

    <FilesMatch "\.(ttf|woff)$">
    <IfModule mod_headers.c>
        Header set Access-Control-Allow-Origin "*"
    </IfModule>
    </FilesMatch>

### Configure Nginx

    location / {
        ...
        if ($filename ~* \.(ttf|woff)$){
            add_header Access-Control-Allow-Origin *;
        }
    }

## Using Custom Icons with background-image

To use any image for an icon in Kendo UI Mobile, raise the specificity of the background-image style to at least 40 in order to override the defaults. Use background-size to resize the image accordingly.

### Define custom background-image icon

    <style>
        .km-root .km-pane .km-view .km-custom
        {
            background-image: url("custom.jpg");
        }
    </style>

    <div data-role="tabstrip">
        <a href="#index" data-icon="custom">Home</a>
    </div>

## Using Custom Icons with WebKit masks

To use colorizable icon masks, specify the icon image as a **box mask** (either as dataURI or as a separate image).
The image should be **PNG8** or **PNG24** with alpha channel (**PNG8+Alpha** is supported by only few graphic editors, so **better stick with PNG24** if not sure).
The image color is not important - it will be used as a mask only - the alpha transparency will clip the colorized content.

> **Important:** WebKit masks have numerous bugs across most platforms - **consider using them only if necessary**! <br /><br />
In Android and MeeGo Webkit masks are unreliable - they can be turned into colorized rectangles by a simple CSS transformation at the wrong place.
In BBOS 7.0 WebKit masks are completely broken - though they work in BBOS 6.0 and 7.1!

### Define custom WebKit mask for an icon

    <style>
        .km-custom {
            -webkit-mask-box-image: url("foo.png");
        }
    </style>

    <div data-role="tabstrip">
        <a href="#index" data-icon="custom">Home</a>
    </div>

In Q3 2012 due to numerous issues with WebKit mask icons, they were deprecated and Kendo UI Mobile introduced font icons. This change requires the usage of additional styling
to enable the WebKit masks as icons. Please note that the below example will disable all font icons.

### Define custom icon after Q3 2012

    <style>
        .km-root .km-pane .km-view .km-icon {
            background-size: 100% 100%;
            -webkit-background-clip: border-box;
            background-color: currentcolor;
        }

        .km-custom {
            -webkit-mask-box-image: url("foo.png");
            background-color: red;
        }
    </style>

    <div data-role="tabstrip">
        <a href="#index" data-icon="custom">Home</a>
    </div>

If you want to add only one or two custom icons, specify them with their respective classes (.km- + data-icon name):

### Restyle only the custom icon.

    .km-root .km-pane .km-view .km-question {
        background-size: 100% 100%;
        -webkit-background-clip: border-box;
        background-color: currentcolor;
    }

    .km-question {
        -webkit-mask-box-image: url("foo.png");
        background-color: red;
    }

When custom icons are used and their names are the same as the integrated Kendo UI Mobile icon names, make sure that the font icons are not rendered.

### Hide all Kendo UI Mobile font icons.

    .km-root .km-pane .km-view .km-icon:after,
    .km-root .km-pane .km-view .km-icon:before
    {
        visibility: hidden;
    }

Again if only several icons should be overridden, specify them with their classes instead:

### Hide only one Kendo UI Mobile font icon.

    .km-root .km-pane .km-view .km-favorites:after,
    .km-root .km-pane .km-view .km-favorites:before
    {
        visibility: hidden;
    }

