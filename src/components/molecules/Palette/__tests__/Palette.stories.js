import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import Palette from 'components/molecules/Palette';

const stories = storiesOf('Commons|molecules/Palette', module);

stories.addDecorator(withKnobs);

const paletteColors = [
    { name: "red", color: "#F44336" },
    { name: "pink", color: "#E91E63" },
    { name: "purple", color: "#9C27B0" },
    { name: "deeppurple", color: "#673AB7" },
    { name: "indigo", color: "#3F51B5" },
    { name: "blue", color: "#2196F3" },
    { name: "lightblue", color: "#03A9F4" },
    { name: "cyan", color: "#00BCD4" },
    { name: "teal", color: "#009688" },
    { name: "green", color: "#4CAF50" },
    { name: "lightgreen", color: "#8BC34A" },
    { name: "lime", color: "#CDDC39" },
    { name: "yellow", color: "#FFEB3B" },
    { name: "amber", color: "#FFC107" },
    { name: "orange", color: "#FF9800" },
    { name: "deeporange", color: "#FF5722" },
    { name: "brown", color: "#795548" },
    { name: "grey", color: "#9E9E9E" },
    { name: "bluegrey", color: "#607D8B" }
];

stories.add('__interactive', () => (
    <Palette colors={object('colors', paletteColors)} />
));