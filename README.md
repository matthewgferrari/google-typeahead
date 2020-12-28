
<h1 align="center">Google-Typeahead</h1>
<div align="center">
<h4 align = "center">A modern and dynamic typeahead inspired by the design of Google Search</h4>

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/matthewgferrari/google-typeahead/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/google-typeahead)](https://www.npmjs.com/package/google-typeahead)
[![npm size](https://img.shields.io/bundlephobia/min/google-typeahead)](https://github.com/matthewgferrari/google-typeahead/blob/main/src)
</div>
 <div align = "center"><img src = "https://raw.githubusercontent.com/matthewgferrari/google-typeahead/main/example/demo.gif"/></div>

## Demo
[Live demo and sandbox](https://matthewgferrari.github.io/google-typeahead/example/build/)

## Installation
Google-Typeahead is available as an [npm package](https://www.npmjs.com/package/google-typeahead).

```sh
// with npm
npm install google-typeahead
```
## Usage
```sh
import React, { useState } from "react"
import Typeahead from "google-typeahead"

function App() {
	const [val, setVal] = useState("")
	const options = ["Option 1", "Option 2", "One more option"]
	return (
		<Typeahead style={{ width: "300px" }} options = {options} value = {val} setValue = {(v) => setVal(v)} />
	);
}
```
## Props
Name | Type | Required? | Default | Description 
-----|------|---------|---------|---------
options| array[string \| object]| required| N/A | Array of options
value| string| required| N/A| Value in typeahead input field
setValue| callback | required| N/A | Callback to store value
className|string|optional|N/A| Classname applied to container
canCreate|bool|optional|false|Can select when no matching option exists
zIndex|string \| number|optional|1|zIndex of dropdown menu
isCaseSensitive| bool|optional|false|Case sensitivity of typeahead 
defaultOpen| bool|optional|false|Whether typeahead starts out open
limit|int|optional |N/A| Max amount of options displayed in list at a time
id|string |options === array[object]| N/A| If options are objects, the key in question 
emptyLabel|string \| Rendered Component|optional |"No Items Found"| Label if no item is found
LeftSideComponent|Nonrendered component|optional |N/A| Optional component on left of input
RightSideComponent|Nonrendered component|optional |N/A| Optional component on right of input

All other props are passed to the underlying input element

## Example
```sh
import React, { useState } from "react"
import Typeahead from "google-typeahead"

function App() {
	const [val, setVal] = useState("")
	const options = [{name: "Option 1"}, {name: "Option 2"}, {name: "One more option"}]
	return (
		<Typeahead placeholder = "Enter search" zIndex={10} className = "containerClass" style={{ width: "500px" }} options = {options} value = {val} setValue = {(v) => setVal(v)} LeftSideComponent = {SearchIcon} RightSideComponent = {MicrophoneIcon} limit = {8} canCreate = {true} id = "name"/>
	);
}

const SearchIcon = () => { return (
<div style={{ marginLeft: "1.15rem", marginRight: ".5rem", paddingTop: ".2rem" }}>
	<svg width={24} height={24} fill="#5F6368">
		<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
	</svg>
</div>
)}

const MicrophoneIcon = () => { return (
<div style={{ marginRight: "1.15rem", marginLeft: ".5rem", paddingTop: ".2rem" }}>
	<svg width={24} height={24} >
		<path fill="none" d="M0 0h24v24H0z" />
		<path fill="#4285F4" d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z" />
		<path fill="#34A853" d="M11 18.92h2V22h-2z" />
		<path fill="#F4B400" d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z" />
		<path fill="#EA4335" d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41A6.99 6.99 0 0012.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z" />
	</svg>
</div>
)}
```