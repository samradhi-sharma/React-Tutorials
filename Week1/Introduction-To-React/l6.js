/** You know that browsers are not able to understand languages execpt
 * HTML, CSS, and JavaScript. So, we need to use a library or a framework  which can convert another languages 
 * into these three languages. This library is called Babel. Babel is a JavaScript transpiler. Hope you understood a little about Babel.
 * 
*/

// Lemme tell you we will be coding react in JSX which is nothing just the combination of HTML + Js

/** Babel is a JavaScript transpiler that converts JSX to regular JavaScript. */

const jsxHeading = (<h1>Hello JSX</h1>);
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);

// this is ok but when i want the main heading and inside that some subheading
// then i have to use the div tag which is not good practice
// so we use fragment which is a virtual dom element which is not rendered in the dom
// it is used to group the elements together

const jsxHeadingAndSubHeading = <>
<h1 className="React">Hello JSX</h1>
<p> This is a paragraph</p>

</>
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeadingAndSubHeading);