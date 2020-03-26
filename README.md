# jquery-gotop 
[![GitHub license](https://img.shields.io/github/license/scottdorman/jquery-gotop.svg)](https://github.com/scottdorman/jquery-gotop/blob/master/LICENSE) [![NuGet downloads](https://img.shields.io/nuget/dt/jquery-gotop.svg)](http://www.nuget.org/packages/jquery-gotop) [![NuGet version](https://img.shields.io/nuget/v/jquery-gotop.svg)](http://www.nuget.org/packages/jquery-gotop) [![Npm downloads](https://img.shields.io/npm/dm/jquery-gotop.svg?label=npm)](http://www.nuget.org/packages/jquery-gotop) [![Npm version](https://img.shields.io/npm/v/jquery-gotop.svg)](http://www.nuget.org/packages/jquery-gotop)

goTop is a &lt;2kb Scroll to Top jQuery plugin.

## Demo
A live [demo](http://scottdorman.github.io/jquery-gotop) is available with documentation.

## There are a few easy wasy to get jQuery-goTop.
* Download the latest full source code (includes debug and minified versions). [zip](https://github.com/scottdorman/jquery-gotop/zipball/master) | [tarbar](https://github.com/scottdorman/jquery-gotop/tarball/master)
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
| container | The HTML element to which the scroll function will be attached. If no value is given, then the scroll function will be attached to the window. | String | "" |
| appear | The amount of pixels the page must be scrolled down before the arrow is displayed. | Integer | 200 |
| scrolltime | A number determining how long the animation will run when scrolling to the top of the page. | Integer | 800 |
| src | The CSS classes used to display the arrow. | String | fas fa-chevron-up |
| width | The width of the arrow. | Integer | 45 |
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

## Bugs and feature requests

Have a bug or a feature request? [Please open a new issue](https://github.com/scottdorman/jquery-gotop/issues).
Before opening any issue, please search for existing issues and read the [Issue Guidelines](https://github.com/necolas/issue-guidelines), written by [Nicolas Gallagher](https://github.com/necolas/).

## Versioning

For transparency and insight into our release cycle, and for striving to maintain backward compatibility, jquery-gotop will be maintained under the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit [http://semver.org/](http://semver.org/).

## Authors

**Scott Dorman**

+ [http://twitter.com/sdorman](http://twitter.com/sdorman)
+ [http://github.com/scottdorman](http://github.com/scottdorman)

## Changes
### v2.0.0 (2019-06-24)
* Switched from using the Bootstrap 3.x Glyphicons library to Font Awesome Free (version 5 and up) because Bootstrap 4.x no longer supports Glyphicons. (#4)

### v1.3.1 (2019-06-24)
* Adds the ability to specify a selector to use. (#2)

### v1.3.0 (2019-06-24)
* Adds the ability to change the z-index. (#3)

#### v1.1.1 (2014-05-28)
* Fixed link to demo in the readme.

#### v1.1.0 (2014-05-28)
* Simplified placement options.
* Minor code simplifications.

#### v1.0.3 (2014-05-28)
* Making the version numbers consistent across nuget, npm, and bower.

#### v1.0.2 (2014-05-28)
* Added IDs to the `a` and `span` tags to allow CSS styling.
* Added a dependency for Bootstrap 3.0.0 or greater.
* Updated the jQuery dependency to 1.6.

#### v1.0.1 (2014-05-28)
* Added bower and npm packages

#### v1.0.0 (2014-05-27)
* Initial commit

## Copyright and license

Copyright 2015 Scott Dorman under [the MIT license](LICENSE).
