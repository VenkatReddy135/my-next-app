---
title: menu-animation
slug: jsp-menu-animation
tags: api, java
publish: true
---

# \<kendo:menu-animation\>

A collection of Animation objects, used to change default animations. A value of false will disable all animations in the widget.Available animations for the Menu are listed below.  Each animation has a reverse options which is used for the close effect by default, but can be over-ridden
by setting the close animation.  Each animation also has a direction which can be set off the animation (i.e. slideIn:Down).

#### Example
    <kendo:menu>
        <kendo:menu-animation></kendo:menu-animation>
    </kendo:menu>

## Configuration Attributes


##  Configuration JSP Tags

### kendo:menu-animation-close

The animation that will be used when closing sub menus.

More documentation is available at [kendo:menu-animation-close](menu/animation-close).

#### Example

    <kendo:menu-animation>
        <kendo:menu-animation-close></kendo:menu-animation-close>
    </kendo:menu-animation>

### kendo:menu-animation-open

The animation that will be used when opening sub menus.

More documentation is available at [kendo:menu-animation-open](menu/animation-open).

#### Example

    <kendo:menu-animation>
        <kendo:menu-animation-open></kendo:menu-animation-open>
    </kendo:menu-animation>

