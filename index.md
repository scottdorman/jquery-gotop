[![GitHub license](https://img.shields.io/github/license/scottdorman/jquery-gotop.svg)](https://github.com/scottdorman/jquery-gotop/blob/master/LICENSE) [![NuGet downloads](https://img.shields.io/nuget/dt/jquery-gotop.svg)](http://www.nuget.org/packages/jquery-gotop) [![NuGet version](https://img.shields.io/nuget/v/jquery-gotop.svg)](http://www.nuget.org/packages/jquery-gotop) [![Npm downloads](https://img.shields.io/npm/dm/jquery-gotop.svg?label=npm)](http://www.nuget.org/packages/jquery-gotop) [![Npm version](https://img.shields.io/npm/v/jquery-gotop.svg)](http://www.nuget.org/packages/jquery-gotop)

goTop is a &lt;2kb Scroll to Top jQuery plugin.

## There are a few easy wasy to get jQuery-goTop.

* Download the latest full source code (includes debug and minified versions). 
* Clone the entire project or fork your own version.
* Install using NuGet
```
PM> Install-Package jquery-gotop
```
* Install using NPM
```
npm install jquery-gotop
```
* Install using bower
```
bower install jquery-gotop
```

## Getting Started
1. Download the minified version of the plugin and include it after jQuery.
2. Add the following HTML to the bottom of the `body` tag:

```html
<div id='goTop'></div>
```

3. Add the following JavaScript code:

```js
<script>
   $(function () {
      $('#goTop').goTop();
   });
</script>
```

## Options

| Name | Description | Type | Default |
| ---- | ----------- | ---- | ------- |
| container | The HTML element to which the scroll function will be attached. If no value is given, then the scroll function will be attched to the window. | String | "" |
| appear | The amount of pixels the page must be scrolled down before the arrow is displayed. | Integer | 200 |
| scrolltime | A number determining how long the animation will run when scrolling to the top of the page. | Integer | 800 |
| src | The CSS classes used to display the arrow. | String | fas fa-chevron-up |
| width | The width of the arrow. | Integer	45 |
| place | The location where the arrow will be shown. Valid values are "right" or "left". | String | "right" |
| fadein | A number determining how long the animation will run when fading in to opaque. | Integer | 500 |
| fadeout | A number determining how long the animation will run when fading out to transparent. | Integer | 500 |
| opacity | Sets the transparency level for the arrow, where 1 is not transparent at all, 0.5 is 50% see-through and 0 is completely transparent. | Decimal | 0.5 |
| marginX | The percentage amount indicating how far away the arrow is from the bottom, left, or right, depending on the value of place. | Integer | 2 |
| marginY | The percentage amount indicating how far away the arrow is from the top or bottom, depending on the value of place. | Integer | 2 |
| zIndex | The z-index value. | Integer | 9 |

## Example
A more complete example which changes the placement from right to left is:

```js
<script>
   $(function () {
      $('#goTop').goTop({
         "place": "left"
      });
   });
</script>
```
