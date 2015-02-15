# Underscore Mixins
This is a collection of helpful javascript functions (a.k.a. mixins) for [underscore.js](http://underscorejs.org) library.

Take a look at the [List of Methods](#list-of-methods) below to become more familiar with this package.

# Installation
**underscore-mixins** is a [Bower](http://bower.io/) package and it can be easily added to your project by running the following command:
```
bower install underscore-mixins
```
Add `--save` flag at the end of the command to save this package as bower dependency. 
```
bower install underscore-mixins --save
```

# Manual Installation
Or simply just [download](https://github.com/Landish/underscore-mixins/archive/master.zip) the archive of latest release and add the following lines of code to your html file.

```html
<script src="path/to/jquery.js"></script>
<script src="path/to/underscore.js"></script>
<script src="path/to/underscore-mixins.js"></script>
```

NOTE: [underscore-mixins.js](https://github.com/Landish/underscore-mixins/blob/master/dist/underscore-mixins.js) (or [underscore-mixins.min.js](https://github.com/Landish/underscore-mixins/blob/master/dist/underscore-mixins.min.js) ) file should be loaded **after** underscore.js library.

# List of Methods

Here is a list of methods, which are included in the underscore-mixins package.

* _.hash()
* _.param()
* _.render()
* _.toAttrs() 
* _.formatMoney()
* _.log(), _.warn(), _.error(), _.info()


# _.hash(key)

Returns javascript [window location](https://developer.mozilla.org/en-US/docs/Web/API/Window.location) object's hash property. 
If `key` parameter is passed through this method, it will return true or false, depending on, if that key is current hash or not.

```
http://example.com              //   _.hash() returns "" (an empty string)
http://example.com/#some-hash   //   _.hash() returns `#some-hash`
http://example.com/#some-hash   //   _.hash('some-hash') returns true
http://example.com/#some-hash   //   _.hash('another-hash') returns false
```

# _.param(name)

Returns parameter value from URL query string.

```
http://example.com/?page=12&keyword=some-text    //    _.param('page') returns 12
http://example.com/?page=12&keyword=some-text    //    _.param('keyword') returns "some-text"
http://example.com/?page=12&keyword=some-text    //    _.param('another-key') returns null
```

# _.render(template, data)
Compiles javascript templates into html string.

It uses underscore.js's [template](http://underscorejs.org/#template) method, but instead of `<%= … %>` it uses curly braces `{{ .. }}`.

```javascript
_.render("<span>Hello {{name}}</span>", { name: "World!" });   
// returns <span>Hello World!</span>
```

# _.toAttrs(obj)

Converts javascript object into html attributes.

```javascript
_.toAttrs({ class: 'className', id: 'div-1', style: 'display:none' }); 
// returns class="className" id="div-1" style="display:none"
```

# _.formatMoney(amount, decimalLength, wholeNumberLength, wholeNumberDelimiter, decimalDelimiter)
```javascript
_.formatMoney(123456.789) // returns "123 457"
_.formatMoney(123456.789, 2) // returns "123 456.79"
_.formatMoney(123456.789, 2, 3, ', ') // returns "123,456.79"
_.formatMoney(123456.789, 2, 3, ',', ',') // returns "123,456,79"
```

# _.log(msg), _.warn(msg), _.error(msg), _.info(msg)

`_.log`, `_.warn`, `_.error` and `_.info` methods are simply shorthand versions for `console.log`, `console.warn`, `console.error` and `console.info` methods.

```javascript
_.log('Hello World');
// returns console.log('Hello World');

_.warn('Hello World');
// returns console.warn('Hello World');

_.error('Hello World');
// returns console.error('Hello World');

_.info('Hello World');
// returns console.info('Hello World');
```

# License
[The MIT License](https://github.com/Landish/underscore-mixins/blob/master/LICENSE.md)