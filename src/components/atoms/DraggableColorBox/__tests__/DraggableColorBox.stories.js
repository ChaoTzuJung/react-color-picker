import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DraggableColorBox from 'components/atoms/DraggableColorBox';

const stories = storiesOf('Commons|atoms/DraggableColorBox', module);

stories.addDecorator(withKnobs);


stories.add('__interactive', () => (
    <div style={{ width: '100vw', height: '100vh' }}>
        <DraggableColorBox
            color={text('color', 'teal')}
            name={text('name', 'teal')}
            handleClick={action('handleClick')}
        />
    </div>
));