import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import colorsConfig from 'utils/colorsConfig';
import generatePalette from 'utils/colorHelper';

import Palette from 'components/molecules/Palette';

const stories = storiesOf('Commons|molecules/Palette', module);

stories.addDecorator(withKnobs);

const palette = generatePalette(colorsConfig[4])

stories.add('__interactive', () => (
    <Palette
        palette={object('palette', palette)}
    />
));