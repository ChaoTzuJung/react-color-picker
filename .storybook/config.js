import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import 'normalize.css';
import 'global.css';
// import 'babel-polyfill';

setOptions({
	hierarchySeparator: /\/|\./,
	hierarchyRootSeparator: /\|/,
});

function loadStories() {
  // automatically import all files ending in *.stories.js
  const req = require.context('../src/components/', true, /\.stories\.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
