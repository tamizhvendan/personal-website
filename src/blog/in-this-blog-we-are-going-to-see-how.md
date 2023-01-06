---
title: Dropdown list manipulation using jQuery
date: 2011-02-10
tags: ['blog', 'programming', 'html', 'css', 'javascript', 'jQuery']
---

In this blog post we are going to see how can we manipulate a dropdownlist using jQuery. Here is the brief overview what we are exactly going to do.

* Dynamically populating the dropdownlist
* Handling the item change event of a dropdownlist
* Getting the value and the text of the dropdownlist selected item
* Programmatically setting the item of the dropdownlist


## 1. Dynamically populating the dropdownlist

```html
<!-- index.html -->
Countries: <select id="countries"></select>
```

```js
// index.js
$(document).ready(function () {
  function loadDropDownList(collection) {
  $.each(collection, function (index, value) {
  var listItem = $("<option></option>").val(index).html(value);
  $("#countries").append(listItem);
  });
  }
  var myCollection = {'IN': 'India','AUS': 'Australia','ENG': 'England'};
  loadDropDownList(myCollection);
})
```

The function `loadDropDownList` will take a collection (a key-value pair array) and populate the dropdownlist `countries`. `$.each` is a jQuery function which iterates the array item by item and calls the `function(index,value)` for each item where index would be the item’s key and value would be the item’s value. Then the list item html markup is created for the list item and appended to the dropdownlist


## 2. Handling the item change event of a dropdownlist

```js
$(document).ready(function () {
  $("#countries").change(function () {
  // Place your code here
  });
});
```

The jQuery API offers lot of useful functions to operate with the html form elements. One of such function is `change()` which will called whenever the item value is get changed.

## Getting the value and the text of the dropdownlist selected item

```html
<!-- index.html -->
Countries: <select id="countries"></select>
Selected Country’s Text: <span id="countryText"></span> <br />
Selected Country’s Value:  <span id="countryValue"></span><br />
```

```js
$(document).ready(function () {
  $("#countries").change(function () {
  var selectedValue = $("#countries").val();
  $("#countryValue").text(selectedValue);
  $("#countryText").text($("#countries > option[value='" + selectedValue + "']").html());
  });
});
```

The jQuery code mentioned above will set the two span labels `countryValue` and `countryText` with the value and text of the selected item in the `countries` dropdownlist, when we select an item in the `countries` dropdownlist. The jQuery function `val()` enable us to find out the value of a form element, in our case we have utilized it to get the value of the `countries` dropdownlist. 

To get the selected item’s text we have to use the child and attribute selector together as a selector. `#countries > option[value=’IN’]` – will selects all option child elements(with appropriate value) of item with the id `countries`. `html()` retrieves the html of the selected element. `text(value)` will set the text of the selector.

## 4. Programmatically setting the item of the dropdownlist

```html
<!-- ... -->
<div>
  <input type="button" id="btnIn" value="Select India"/> 
  <input type="button" id="btnAus" value="Select Australia"/> 
  <input type="button" id="btnEng" value="Select England"/>
</div>
```

```js
$("#btnIn").click(function () {
  $("#countries").val('IN');
});

$("#btnEng").click(function () {
  $("#countries").val('ENG');
});

$("#btnAus").click(function () {
  $("#countries").val('AUS');
});
```

## Demo

You can these samples in action in [codepen](https://codepen.io/tamizhvendan/pen/ExpNoBw).