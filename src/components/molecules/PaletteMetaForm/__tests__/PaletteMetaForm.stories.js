import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PaletteMetaForm from 'components/molecules/PaletteMetaForm';
import { BrowserRouter as Router } from 'react-router-dom';

const stories = storiesOf('Commons|molecules/PaletteMetaForm', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => (
    <Router>
        <PaletteMetaForm
            savePalette={action('savePalette')}
        />
    </Router>
));