# Project04 - ReactJS

## Go to the execution page!
[Project04](https://ashleyjhkoo.github.io/WebProgrammingWithJavascript/Project04_ReactJS/chooser.html)

## What was the mission?
In this mission, you will develop a React component that allows the reader of a web page to change the appearance of a piece of text.

When the user clicks on the text, a small form will appear that contains:

a checkbox that lets the user choose whether the text should be bold

buttons for decreasing and increasing the text’s font size, as well as a display of the current size

Then, when the user clicks on the text again, the form disappears. Further details of the specification are provided below.

In completing this mission, you will:

Use the React framework to create a reusable, modular component

Define callback functions that are invoked as the result of user actions in the HTML page

Use those callback functions to modify the attributes of HTML elements

### Activity
The FontChooser component should allow the user to change the font weight (bold or normal) and font size of the text that it is displaying. Implement the React component in FontChooser.js as follows:

Initial rendering

When the component is initially rendered, the checkbox, buttons, and “fontSizeSpan” element should be hidden, as in the version we distributed.

The text that is set as the “text” property when the component is created should be displayed in the HTML page, as in the version we distributed.

If the “bold” property is set to “true,” the text should be displayed in bold; otherwise it should be displayed as normal. The version we distributed does not include this functionality, so you will need to implement this.

The text that is displayed should have a font size equal to the “size” property of the FontChooser component. The version we distributed does not include this functionality either.

Displaying the form elements

When the checkbox, buttons, and “fontSizeSpan” element are hidden and the user clicks on the text that the component is displaying in the HTML page, the checkbox, buttons, and “fontSizeSpan” element should appear to the left of the text.

When the checkbox, buttons, and “fontSizeSpan” element are shown and the user clicks on the text that the component is displaying in the HTML page, the checkbox, buttons, and “fontSizeSpan” element should disappear, i.e. become hidden again.

Checkbox functionality

If the React component’s “bold” property is set to “true” when the component is initially created, the checkbox should be selected/checked when it is first displayed. If the “bold” property is set to “false,” the checkbox should be unselected/unchecked.

If the checkbox is unselected/unchecked and then the user checks it, the text should immediately change to bold.

If the checkbox is selected/checked and then the user unchecks it, the text should immediately change to normal font weight.

Changing the font size

When the checkbox, buttons, and “fontSizeSpan” element are first displayed, the value in the “fontSizeSpan” should equal the React component’s “size” property, as in the version we distributed.

When the user clicks the “decreaseButton” (the one with the “—” sign on it), the value in the “fontSizeSpan” should decrement and the font size of the text should immediately decrease by one as well. However, the value in the “fontSizeSpan” may not be smaller than the React component’s “min” property. If the value in the “fontSizeSpan” equals the “min” property and the user clicks the “decreaseButton,” there should be no change.

Likewise, when the user clicks the “increaseButton” (the one with the “+” sign on it), the value in the “fontSizeSpan” should increment and the font size of the text should immediately increase by one as well. However, the value in the “fontSizeSpan” may not be larger than the React component’s “max” property. If the value in the “fontSizeSpan” equals the “max” property and the user clicks the “increaseButton,” there should be no change.

If the value of the “fontSizeSpan” equals the component’s “min” or “max” property, then its color should be red. If “fontSizeSpan” is between “min” and “max,” though, then its color should be black. The font size of the text in the “fontSizeSpan” should always be the browser’s default, i.e. you do not need to explicitly set it.

When the text in the “fontSizeSpan” is double-clicked, its value should become equal to the initial value set as the component’s initial “size” property, and the font size of the text that is displayed should immediately change to that value as well.

Error handling and default values

As you can see at the bottom of FontChooser.js, we have specified the default values for the props, in case they are not specified when the component is created.

However, your code should implement the following: 

If the “min” property has a value of 0 or a negative number, its value should be treated as 1 for limiting the smallest font size

If the “min” property is greater than the “max” property, then “min” and “max” should both be treated as the larger of the two, i.e. the “min” property

If the “size” property is less than the “min” property, the initial value should be treated as the same as the “min” property, or treated as 1 if “min” is 0 or negative

If the “size” property is greater than the “max” property, the initial value should be treated as the same as the “max” property

You do not need to address any other combination of values not specified above; these are the only ones that will be considered for grading.

Additionally, you do not need to handle the situation in which the “text” property is not specified when the component is created.

