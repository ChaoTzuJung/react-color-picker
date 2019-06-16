import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PaletteFormNav from 'components/molecules/PaletteFormNav';
import { BrowserRouter as Router } from 'react-router-dom';

const stories = storiesOf('Commons|molecules/PaletteFormNav', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => (
    <Router>
        <PaletteFormNav
            open={boolean('open', false)}
            savePalette={action('savePalette')}
            handleDrawerOpen={action('handleDrawerOpen')}
        />
    </Router>
));