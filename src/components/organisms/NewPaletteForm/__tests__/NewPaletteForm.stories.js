import React from 'react';
import { withKnobs, object, number } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { BrowserRouter as Router } from 'react-router-dom';
import NewPaletteForm from 'components/organisms/NewPaletteForm';
import colorsConfig from 'utils/colorsConfig';

const stories = storiesOf('Commons|organisms/NewPaletteForm', module);


stories.addDecorator(withKnobs);


stories.add('__interactive', () => (
    <Router>
        <NewPaletteForm
            savePalette={action('savePalette')}
            maxColors={number('maxColors', 20)}
            palettes={object('palettes', colorsConfig)}
        />
    </Router>
));