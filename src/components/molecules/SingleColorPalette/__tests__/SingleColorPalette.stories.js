import React from 'react';
import { withKnobs, object, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import colorsConfig from 'utils/colorsConfig';
import generatePalette from 'utils/colorHelper';

import SingleColorPalette from 'components/molecules/SingleColorPalette';
import { BrowserRouter as Router } from 'react-router-dom';

const stories = storiesOf('Commons|molecules/SingleColorPalette', module);

stories.addDecorator(withKnobs);

const palette = generatePalette(colorsConfig[4])

stories.add('__interactive', () => (
    <Router>
        <SingleColorPalette
            palette={object('palette', palette)}
            colorId={select('colorId', {
                    "beekeeper": "beekeeper",
                    "spicednectarine":"spicednectarine",
                    "pinkglamour": "pinkglamour",
                    "junebud": "junebud",
                    "coastalbreeze": "coastalbreeze",
                    "turbo": "turbo",
                    "quincejelly": "quincejelly",
                    "carminepink": "carminepink",
                    "pureapple": "pureapple",
                    "hintoficepack": "hintoficepack",
                    "middleblue": "middleblue",
                    "heliotrope": "heliotrope",
                    "exodusfruit": "exodusfruit",
                    "deepkoamaru": "deepkoamaru",
                    "soaringeagle": "soaringeagle",
                    "greenlandgreen": "greenlandgreen",
                    "steelpink": "steelpink",
                    "blurple": "blurple",
                    "deepcove": "deepcove",
                    "wizardgrey": "wizardgrey",
                },
                'beekeeper'
            )}
        />
    </Router>
));