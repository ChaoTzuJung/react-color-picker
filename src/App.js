import React from 'react';
import Palette from 'components/molecules/Palette';
import colorsConfig from 'utils/colorsConfig';

const App = () => (
    <div>
      {/* 有技巧的傳 props */} 
      <Palette {...colorsConfig[4]}/>
    </div>
);

export default App;
