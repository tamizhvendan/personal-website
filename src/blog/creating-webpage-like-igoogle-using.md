---
title: Creating a Webpage Like iGoogle Using jQuery
date: 2011-02-07
tags: ['blog', 'programming', 'html', 'css', 'javascript', 'jQuery']
---

Would you like to create a webpage like [iGoogle](http://www.igoogleportal.com/portal/index.php)? This blog post is for you!!

I hope you are aware of the following stuffs which are the building blocks of this blog post.

1. HTML
2. CSS
3. jQuery
  
Let us design the page using the **Divide and Conquer** Approach. The tasks involved are

1. Defining the webpage layout using HTML
2. Style the webpage and Widgets(Sample iGoogle Mock up Widgets) using CSS
3. Add the drag and drop functionality using jQuery

## Task 1: Defining the webpage layout using HTML

The HTML is very straight forward. Entire webpage contents have been placed inside a div with the id “iGoogle”. Then each column (iGoogle uses three column layout) is defined by a div element with the id representing the corresponding columns. These columns act as a placeholder for Widgets. Each widget defined as a div element which contains two div elements inside it which represents the header and the body of the Widgets


```html
<!-- iGoogle-Sample.html -->

<div id="column1">
  <br />
  <div class="Widget">
  <br />
  <div class="WidgetHeader PurpleWidgetHeader">
  <br />
  Widget 1</div>
  <br />
  <div class="WidgetBody">
  <br />
  </div>
  <br />
  </div>
  <br />
  <div class="Widget">
  <br />
  <div class="WidgetHeader GreenWidgetHeader">
  <br />
  Widget 2</div>
  <br />
  <div class="WidgetBody">
  <br />
  </div>
  <br />
  </div>
  <br />
  <div class="Widget">
  <br />
  <div class="WidgetHeader GrayWidgetHeader">
  <br />
  Widget 3</div>
  <br />
  <div class="WidgetBody">
  <br />
  </div>
  <br />
  </div>
  <br />
</div>

<div id="column2">
  <br />
  <div class="Widget">
  <br />
  <div class="WidgetHeader GrayWidgetHeader">
  <br />
  Widget 4</div>
  <br />
  <div class="WidgetBody">
  <br />
  </div>
  <br />
  </div>
  <br />
</div>

<div id="column3">
  <br />
  <div class="Widget">
  <br />
  <div class="WidgetHeader GreenWidgetHeader">
  <br />
  Widget 5</div>
  <br />
  <div class="WidgetBody">
  <br />
  </div>
  <br />
  </div>
  <br />
  <div class="Widget">
  <br />
  <div class="WidgetHeader GrayWidgetHeader">
  <br />
  Widget 6</div>
  <br />
  <div class="WidgetBody">
  <br />
  </div>
  <br />
  </div>
  <br />
</div>
```

## Task 2: Style the webpage and widgets

Now we have the HTML Layout ready. Our next task would be applying style to the webpage and the widgets using CSS.

```css
/* iGoogleLayout.css */
/* Entire Page has been divided into 3Columns. Note: iGoogle Page has 3 columns */
#column1, #column2, #column3
{
  display: inline-block;
  float: left;
  width: 33%;
  height: auto;
  text-align: center;
  padding-bottom: 100px;
}
/* Css Classes for Entire Widget */
.Widget
{
  margin: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  min-height: 200px;
  border: 1px solid Black;
}
/* Css Classes for Widget Headers */
.WidgetHeader
{
  height: 25px;
  cursor: move;
  text-align: left;
  padding-left: 3px;
  color: White;
  font-weight: bold;
}
.GreenWidgetHeader
{
  background-color: Green;
}
.GrayWidgetHeader
{
  background-color: Gray;
}
.PurpleWidgetHeader
{
  background-color: Purple;
}
/* Css Classes for Widget Body */
.WidgetBody
{
  min-height: 175px;
  height: auto;
  background: #F0F0F0;
}
/* Placeholder while dragging the widget using jQuery*/
.ui-sortable-placeholder
{
  border: 1px dashed black;
  visibility: visible !important;
  height: 50px !important;
}
.ui-sortable-placeholder *
{
  visibility: hidden;
}
.footer
{
  clear: both;
  display: block;
  position: absolute;
  color: Green;
  bottom: 5px;
  right: 5px;
}
```

## Task 3: Add the drag and drop functionality using jQuery

jQuery offers a rich set of functionality which can be implemented by less lines of coding. With jQuery you can **write less and do more**. All you need to refer the jQuery API files in your javascript and make use of the functionality it provides. To implement the drag and drop functionality we need the following jQuery library files which can be downloaded from the locations mentioned in the `src` attribute

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js" type="text/javascript"></script>
<script src="http://jqueryui.com/ui/jquery.ui.core.js" type="text/javascript"></script>
<script src="http://jqueryui.com/ui/jquery.ui.widget.js" type="text/javascript"></script>
<script src="http://jqueryui.com/ui/jquery.ui.mouse.js" type="text/javascript"></script>
<script src="http://jqueryui.com/ui/jquery.ui.sortable.js" type="text/javascript"></script>
```

Now we have the necessary jQuery libraries to implement the drag and drop functionality and all set for implementing the drag and drop support. Here is the code part which implements the drag and drop functionality.

```js
$(document).ready(function () {        
  $("#column1,#column2,#column3").sortable({
    connectWith: "#column1,#column2,#column3",
    handle: '.WidgetHeader', opacity: 0.6
  }); 
  
  $("#column1,#column2,#column3").disableSelection();
});
```

Yes!! That’s it!! Just three function calls and seven lines of coding!! Now you can drag and drop the widgets and play!!

Well, let me explain the jQuery code

The jQuery UI Sortable plugin makes selected elements sortable by dragging with the mouse. Here in our case the selected elements refer to `column1, column2, colum3` which are the placeholders of the widgets. This sortable plugin has many optional arguments which define how drag and drop should be done.

`connectWith` option allows drag and drop between the columns. i.e., Elements (Widgets in our case) inside the `column1` or `column2` or `column3` can be dragged and dropped on `column1` or `column2` or `column3`.

“handle” option specifies the element which can be used to drag the widget between the columns. “opacity” option defines the transparency of the widget while dragging. The the `disableSelection()` function disable text selection in a widget which often occur while dragging a mouse across a widget ([reference](http://docs.jquery.com/UI/Sortable)). 

## Summary
To keep the blog post simple, I didn’t implement the persistence of the widget positions. So widgets should not retain its positions when you refresh the page. You can see the source code of this blog post [here](https://gist.github.com/3632472).