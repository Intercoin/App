
import 'typeface-roboto';
import React, { useState, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

import theme from 'styles/theme';
import { AppContext } from 'contexts';
import { PAGES } from 'utils/links/pages';

const DELAY_TIME = 100;
const Home = loadable(() => pMinDelay(import('containers/Home'), DELAY_TIME));

const App = () => {
  const [loadingInfo, setLoadingInfo] = useState(false);

  return (
    <AppContext.Provider
      value={{
        loadingInfo,
        setLoadingInfo
      }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route render={() => (
              <Switch>
                <Route exact path={PAGES.HOME} component={Home} />
              </Switch>
            )} />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </AppContext.Provider>
  )
};

export default App;
