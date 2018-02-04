# Vuels Modal
[![npm version](https://badge.fury.io/js/%40vuels%2Fmodal.svg)](https://badge.fury.io/js/%40vuels%2Fmodal)

> Simple Vue 2 Modal for easy modal access on a site

# Features

- Show a modal on request with the given content
- Ability to alter the design

# Install

```npm install @vuels/modal```

# Usage

### Example:

[With a .vue component (With webpack or vue-cli projects)]
```js

import VuelsModal from '@vuels/modal'

export default {
	name: 'events-form',
	data() {
		return {
			isLoading: false,
			status: '',
		}
	},
	components: {	
		VueButtonSpinner
    }
}
```


[Your HTML code]
```html

<vuels-modal
	theme="red"
	title="Select Your Option"
	:close="closeButton" />

```
> Clicking the close button emits 'close'

