import React from 'react';
import Palette from './components/Palette';
import seedColors from '../models/seedColors';

const App = () => (
    <div>
      <Palette palette={seedColors[4]} />
    </div>
);

export default App;
