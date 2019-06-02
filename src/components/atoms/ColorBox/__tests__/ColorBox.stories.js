import React from 'react';
import { withKnobs, text, color } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import ColorBox from 'components/atoms/ColorBox';
import { BrowserRouter as Router } from 'react-router-dom';

const stories = storiesOf('Commons|atoms/ColorBox', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => (
    <div style={{ width: '100vw', height: '100vh' }}>
        <Router>
            <ColorBox 
                background={color('color', '#F44336')} 
                name={text('name', 'red')} 
            />
        </Router>
    </div>
));