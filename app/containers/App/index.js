import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
//import Auth from './Auth';

//import Application from './Application';
//import LandingCorporate from './Landing';
import LandingCreative from './LandingCreative';
//import ArticleNews from './ArticleNews';
import ThemeWrapper, { AppContext } from './ThemeWrapper';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


const ArticleNews = lazy(() => import('./ArticleNews'));
const Application = lazy(() => import('./Application'));
const Auth = lazy(() => import('./Auth'));
const mystyle = {
  position: 'absolute',
  top: 'calc(50% - 65px)',
  left: 'calc(50% - 65px)',
  color: 'white',
  padding: '10px',
  fontFamily: 'Arial'
};
class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<img src="/images/spinner.gif" style={mystyle} alt="spinner" />}>
        <ThemeWrapper>
          <AppContext.Consumer>
            {(changeMode) => (
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => <Application {...props} changeMode={changeMode} />}
                />
                <Route path="/landing-creative" exact component={LandingCreative} />
                <Route
                  path="/app"
                  render={(props) => <Application {...props} changeMode={changeMode} />}
                />
                <Route component={Auth} />
                <Route component={NotFound} />
              </Switch>
            )}
          </AppContext.Consumer>
        </ThemeWrapper>
      </Suspense>
    );
  }
}
/**
<Route
                  path="/blog"
                  render={(props) => <ArticleNews {...props} changeMode={changeMode} />}
                />
 */
export default App;
