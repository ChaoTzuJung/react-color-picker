import React from 'react';
import Palette from 'components/molecules/Palette';
import colorsConfig from 'utils/colorsConfig';
import generatePalette from 'utils/colorHelper';

const App = () => (
  <div>
    <Palette {...colorsConfig[4]}/>
  </div>
)

export default App;
