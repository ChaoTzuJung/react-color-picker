import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import PaletteList from 'components/molecules/PaletteList';
import colorsConfig from 'utils/colorsConfig';

const stories = storiesOf('Commons|molecules/PaletteList', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => (
    <PaletteList
        palettes={object('palette', colorsConfig)}
    />
));