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
        <Route exact path="/" render={routeProps => <PaletteList palettes={colorsConfig} {...routeProps} />} />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
        />
        <Route exact path="/palette/:paletteId/:colorId" render={() => <h1>Single Color Page</h1>} />
      </Switch>
    )
  }
}

export default App;