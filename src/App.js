import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from 'components/molecules/Palette';
import PaletteList from 'components/molecules/PaletteList';
import colorsConfig from 'utils/colorsConfig';
import generatePalette from 'utils/colorHelper';


class App extends Component {
  findPalette = id => {
    const filterPalette = colorsConfig.find(palette => palette.id === id)
    return filterPalette;
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={colorsConfig} />} />
        <Route
          exact path="/palette/:id"
          render={props => <Palette palette={generatePalette(this.findPalette(props.match.params.id))} />}
        />
      </Switch>
    )
  }
}

export default App;