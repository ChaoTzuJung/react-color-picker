import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ColorPickerForm from 'components/molecules/ColorPickerForm';
import { BrowserRouter as Router } from 'react-router-dom';

const stories = storiesOf('Commons|molecules/ColorPickerForm', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => (
    <Router>
        <ColorPickerForm
            paletteIsFull={boolean('paletteIsFull', true)}
            addNewColor={action('addNewColor')}
        />
    </Router>
));