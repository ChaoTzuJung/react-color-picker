import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Navbar from 'components/molecules/Navbar';

const stories = storiesOf('Commons|molecules/Navbar', module);

stories.addDecorator(withKnobs);


stories.add('__interactive', () => (
    <Navbar
        level={number('level', 500)}
        changeLevel={action('changeLevel')}
    />
));