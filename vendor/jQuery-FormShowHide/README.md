# DEPRECATION NOTICE:
This project has been deprecated in favour of jQuery-doWhen which is more powerful and can be found at https://github.com/dkeeghan/jQuery-doWhen


<br/><br/><br/><br/>


FormShowHide jQuery Plugin
==========================

jQuery FormShowHide is a lightweight, simple to use, and really easy way to dynamically show/hide sections of a page based on items selected/entered in a form.

Changelog
---------
### Version 1 ###
* Cleanup of JS file + renamed to remove version number
* Added copyright notice
* Changed `.bind` to `.on` to support newer versions of jQuery
* Resolved bug raised by @vytch

### Version 0.1 ###
* Initial release

Why build it?
-------------

I wanted a simple reusable script that I could apply quickly so that no show/hide logic needed to be hardcoded into the JavaScript code. This means that back-end engineers can implement the solution, without needing to know anything about JavaScript, they just need to know some simple HTML attributes to set.

How does it work?
-----------------

### The jQuery ###

```javascript
$(function(){
    $('.formShowHide_ctrl').formShowHide();
});
```

Or you can add options to override the classes used by the plugin

```javascript
$(function(){
    $('select').formShowHide({
        ...
    });
});
```

### The HTML ###

You can apply the FormShowHide functionality to a number of form elements including:

* ```<select>```
* ```<option>```
* ```<input type="radio" />```
* ```<input type="checkbox" />```

The most basic way of implementing this plugin is by adding a class (in this case we'll use ```formShowHide_ctrl```) and an attribute of either data-show-id or data-hide-id containing at least one ID. (Multiple IDs can be added by using a space in between the IDs)

#### Toggling between SHOW or HIDE behaviour ####

The plugin looks for two different data attributes:

* ```data-show-id``` - displays the container ONLY when the item is SELECTED or CHECKED.
* ```data-hide-id``` - displays the container ONLY when the item is NOT SELECTED or CHECKED.

#### Applying FormShowHide ####

##### SELECT or OPTION #####

The following code will display the element with ```id="hidden-div"``` when the second ```<option>``` in the ```<select>``` is selected.

```html
<select>
    <option value="1">Example option</option>
    <option value="2" class="formShowHide_ctrl" data-show-id="hidden-div">Display Hidden DIV</option>
    <option value="3">Another example option</option>
</select>
```

This is another way a ```<select>``` element can be referenced. This is especially useful when you have multiple items that can show/hide content in the same ```<select>```. The following code will display the element with ```id="hidden-div"``` when the second ```<option>``` in the ```<select>``` is selected, and both the element with ```id="hidden-div"``` and the element with ```id="another-hidden-div"``` when the third ```<option>``` is selected.

```html
<select class="formShowHide_ctrl">
    <option value="1">Example option</option>
    <option value="2" data-show-id="hidden-div">Display hidden DIV</option>
    <option value="3" data-show-id="hidden-div another-hidden-div">Display Two Hidden DIVs</option>
</select>
```

##### INPUT type="radio" or INPUT type="checkbox" #####

The following code on change of the ```<input>``` will cause the element with ```id="hidden-div"``` to be displayed if the ```<input>``` is checked. If not, it will hide the element.

```html
<input type="checkbox" name="eg" id="eg1" class="formShowHide_ctrl" data-show-id="hidden-div" />
<label for="eg1">Display Hidden DIV</label>
```

Radio button groups will automatically reset related hidden elements based on the name attribute.

##### INPUT type="text" #####

The following code on change of the ```<input>``` will cause the element with ```id="hidden-div"``` to be displayed if the ```<input>``` has a number of less than 10 inside it. If not, it will hide the element.

```html
<input type="text" name="txt" id="txt1" class="formShowHide_ctrl" data-show-id="hidden-div" data-show-type="lessThan" data-show-params="10" />
<label for="eg1">Display Hidden DIV if number entered is less than 10</label>
```

Currently there is only one `INPUT type="text"` show/hide type: `lessThan`, however more can be added by adding functions to `$.formShowHide.types` with the format `function(elem, params){ return true/false; }` returning `true` for show and `false` for hide. As of the current version of the plugin params must be passed for this type of validation, and can be a space separated list. 

##### The hidden element #####

The element to be hidden/show can be any element with an ID attribute.

```html
<div id="hidden-div">
    ...
</div>
```

Elements that are hidden, can also contain elements that will show/hide other content.

Options
-------

**show** (function: `function(i, el, callback)`)
> function called to show an item *make sure to call the `callback` function at the end*

**hide** (function: `function(i, el, callback)`):
> function called to hide an item *make sure to call the `callback` function at the end*

**initShow** (function: `function(i, el, callback)`)
> function called to show an item on page load *make sure to call the `callback` function at the end*

**initHide** (function: `function(i, el, callback)`)
> function called to hide an item on page load *make sure to call the `callback` function at the end*

**showAlreadyVisible** (function: `function(i, el)`)
> function called to show an item that's already visible (e.g. to cleanup hidden code)

**showAttr** (string: `'data-show-id'`)
> attribute to use to show on selection

**showTypeAttr** (string: `'data-show-type'`)
> attribute to use to determine the type of show/hide functionality to use (used for TEXT type show/hide)

**showParamsAttr** (string: `'data-show-params'`)
> attribute to use to indicate params for the custom type show/hide functionality (used for TEXT type show/hide)

**hideAttr** (string: `'data-hide-id'`)
> attribute to use to hide on selection

**resetClass** (string: `'formShowHide_reset'`)
> class to use on a show/hide container to indicate if form fields inside of it should be reset on hide of the container.

Tested browsers
---------------

This solution may work on other browsers as well. These are the ones that it has been tested on:

* Microsoft Internet Explorer 7+
* Mozilla Firefox 4+
* Google Chrome 10+
* Apple Safari 5+