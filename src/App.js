import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import colorsConfig from 'utils/colorsConfig';
import generatePalette from 'utils/colorHelper';

import Palette from 'components/molecules/Palette';
import PaletteList from 'components/molecules/PaletteList';
import SingleColorPalette from 'components/molecules/SingleColorPalette';
import NewPaletteForm from 'components/organisms/NewPaletteForm';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // colorsConfig 是靜態資料 無法變動，所以把它放到state處理
      palettes: colorsConfig
    }
  }
  findPalette = id => {
    return this.state.palettes.find(palette => palette.id === id);
  }

  savePalette = newPalette => {
    this.setState({ palettes: [...this.state.palettes, newPalette] })
  }

  render() {
    const { palettes } = this.state;
    return (
      <Switch>
        <Route
          exact path="/"
          render={routeProps => <PaletteList palettes={palettes} {...routeProps} />}
        />
        <Route
          exact path="/palette/new"
          render={routeProps => <NewPaletteForm savePalette={this.savePalette} {...routeProps} />}
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