import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import colorsConfig from 'utils/colorsConfig';
import generatePalette from 'utils/colorHelper';

import PaletteFooter from 'components/organisms/PaletteFooter';
import { BrowserRouter as Router } from 'react-router-dom';

const stories = storiesOf('Commons|organisms/PaletteFooter', module);

stories.addDecorator(withKnobs);

const palette = generatePalette(colorsConfig[4])

stories.add('__interactive', () => (
    <Router>
        <PaletteFooter
            palette={object('palette', palette)}
        />
    </Router>
));