import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {createStore} from 'redux';
import reducers from './Redux Store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import AboutUs from './Components/AboutUs';

import Home from './Components/Home';
import BubbleSort from './Components/BubbleSort';


const store = createStore(reducers,composeWithDevTools());

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/Algorithm-Visualizer" component={Home}></Route>
            <Route exact path="/Algorithm-Visualizer/bubble-sort" component={BubbleSort}></Route>
            <Route exact path="/Algorithm-Visualizer/selection-sort" component={BubbleSort}></Route>
            <Route exact path="/Algorithm-Visualizer/insertion-sort" component={BubbleSort}></Route>
            <Route exact path="/Algorithm-Visualizer/merge-sort" component={BubbleSort}></Route>
            <Route exact path="/Algorithm-Visualizer/about-us" component={AboutUs}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
