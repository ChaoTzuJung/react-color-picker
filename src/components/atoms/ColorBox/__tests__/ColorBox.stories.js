import React from 'react';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs/react';
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
                moreUrl={text('moreUrl', '/palette/material-ui-colors/red')}
                showLink={boolean('showLink', true)} 
            />
        </Router>
    </div>
));