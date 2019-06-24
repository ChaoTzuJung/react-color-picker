import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import colorsConfig from 'utils/colorsConfig';
import generatePalette from 'utils/colorHelper';

// import PageWrapper from '../src/components/atoms/PageWrapper';
import PageWrapper from 'components/atoms/PageWrapper';
import Palette from 'components/molecules/Palette';
import PaletteList from 'components/molecules/PaletteList';
import SingleColorPalette from 'components/molecules/SingleColorPalette';
import NewPaletteForm from 'components/organisms/NewPaletteForm';



class App extends Component {
  constructor(props) {
    super(props);
    const savePalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {
      // colorsConfig 是靜態資料 無法變動，所以把它放到state處理
      palettes: savePalettes || colorsConfig
    }
  }
  findPalette = id => {
    const defaultPalette = colorsConfig[0];
    return this.state.palettes.find(palette => palette.id === id) || defaultPalette;
  }

  savePalette = newPalette => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    )
  }

  deletePalette = id => {
    this.setState(
      // 要使用 old state & callback
      prevState => ({ palettes: prevState.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    )
  }

  syncLocalStorage= () => {
    // Save palette to local storage
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
  }

  render() {
    const { palettes } = this.state;
    return (
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='page' timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={routeProps => (
                  <PageWrapper>
                    <PaletteList 
                      palettes={palettes}
                      deletePalette={this.deletePalette}
                      {...routeProps}
                    />
                  </PageWrapper>
                )}
              />
              <Route
                exact
                path="/palette/new"
                render={routeProps => (
                  <PageWrapper>
                    <NewPaletteForm
                      palettes={palettes}
                      savePalette={this.savePalette}
                      {...routeProps}
                    />
                  </PageWrapper>
                )}
              />
              <Route
                exact
                path="/palette/:id"
                render={routeProps => (
                  <PageWrapper>
                    <Palette
                      palette={generatePalette(this.findPalette(routeProps.match.params.id))}
                    />
                  </PageWrapper>
                )}
              />
              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={routeProps => (
                  <PageWrapper>
                    <SingleColorPalette
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(
                        this.findPalette(routeProps.match.params.paletteId)
                      )}
                    />
                  </PageWrapper>
                )}
              />
              <Route
                path="*"
                render={routeProps => (
                  <PageWrapper>
                    <PaletteList
                      palettes={this.state.palettes}
                      deletePalette={this.deletePalette}
                      {...routeProps}
                    />
                  </PageWrapper>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}>
      </Route>
    )
  }
}

export default App;