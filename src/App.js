import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import colorsConfig from 'utils/colorsConfig';
import generatePalette from 'utils/colorHelper';

import Palette from 'components/molecules/Palette';
import PaletteList from 'components/molecules/PaletteList';
import SingleColorPalette from 'components/molecules/SingleColorPalette';


class App extends Component {
  findPalette = id => {
    return colorsConfig.find(palette => palette.id === id);
  }

  render() {
    return (
      <Switch>
        <Route
          exact path="/"
          render={routeProps => <PaletteList palettes={colorsConfig} {...routeProps} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    )
  }
}

export default App;