import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NewPaletteForm from 'components/organisms/NewPaletteForm';
import colorsConfig from 'utils/colorsConfig';

const stories = storiesOf('Commons|organisms/NewPaletteForm', module);

stories.addDecorator(withKnobs);


stories.add('__interactive', () => (
    <NewPaletteForm
        palettes={object('palettes', colorsConfig)}
        savePalette={action('savePalette')}
    />
));