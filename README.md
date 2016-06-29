yoleth-themepicker
========================

AngularJS directive to pick theme

##Usage

###Installation

```shell
$ npm install yoleth-themepicker.min.js
```

###Registration

To be able to use the directive, you need to register the `yoleth.themepicker` module as a dependency:

```javascript
angular.module('yourModule', ['yoleth.themepicker'
    // other dependencies
]);
```

###Directive
The directive work with element level.

```html
<yl-theme
    yl-themes="themes"
    ng-model="element.options.theme">
</yl-theme>
```

Short doc for all of the attributes:

* `ng-model`, the value to bind the switch to
* `yl-themes`, array of themes to show, with name and color, for exemple :
    $scope.themes       = [
        { name : 'blue', color : '#3F51B5'},
        { name : 'red', color : '#D32F2F'},
        { name : 'purple', color : '#6A1B9A'},
        { name : 'green', color : '#43A047'},
        { name : 'yellow', color : '#FFEB3B'},
        { name : 'orange', color : '#FB8C00'},
        { name : 'brown', color : '#795548'}
    ];