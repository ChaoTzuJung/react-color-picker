import React from 'react';
import { withKnobs, object, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MiniPalette from 'components/atoms/MiniPalette';

const stories = storiesOf('Commons|atoms/MiniPalette', module);

stories.addDecorator(withKnobs);

const colors = [
    { name: "Beekeeper", color: "#f6e58d" },
    { name: "SpicedNectarine", color: "#ffbe76" },
    { name: "PinkGlamour", color: "#ff7979" },
    { name: "JuneBud", color: "#badc58" },
    { name: "CoastalBreeze", color: "#dff9fb" },
    { name: "Turbo", color: "#f9ca24" },
    { name: "QuinceJelly", color: "#f0932b" },
    { name: "CarminePink", color: "#eb4d4b" },
    { name: "PureApple", color: "#6ab04c" },
    { name: "HintOfIcePack", color: "#c7ecee" },
    { name: "MiddleBlue", color: "#7ed6df" },
    { name: "Heliotrope", color: "#e056fd" },
    { name: "ExodusFruit", color: "#686de0" },
    { name: "DeepKoamaru", color: "#30336b" },
    { name: "SoaringEagle", color: "#95afc0" },
    { name: "GreenlandGreen", color: "#22a6b3" },
    { name: "SteelPink", color: "#be2edd" },
    { name: "Blurple", color: "#4834d4" },
    { name: "DeepCove", color: "#130f40" },
    { name: "WizardGrey", color: "#535c68" }
];

stories.add('__interactive', () => (
    <div style={{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%' ,
    }}>
        <div style={{ border: '1px solid black', borderRadius: '5px' }}>
            <MiniPalette
                paletteName={text('paletteName', 'Flat UI Colors Aussie')}
                emoji={text('emoji', '🇦🇺')}
                colors={object('colors', colors)}
                goToPalette={action('goToPalette')}
            />
        </div>
    </div>
));