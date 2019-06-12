import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import PaletteList from 'components/molecules/PaletteList';
import colorsConfig from 'utils/colorsConfig';
import { BrowserRouter as Router } from 'react-router-dom';

const stories = storiesOf('Commons|molecules/PaletteList', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => (
    <Router>
        <PaletteList
            palettes={object('palette', colorsConfig)}
        />
    </Router>
));