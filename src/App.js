import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {createStore} from 'redux';
import reducers from './Redux Store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import InsertionInfo from './Components/InfoPages/InsertionInfo';
import SelectionSort from './Components/SelectionSort';
import Home from './Components/Home';
import BubbleSort from './Components/BubbleSort';
import InsertionSort from './Components/InsertionSort';
import MergeSort from './Components/MergeSort';
import HomeSearch from './Components/HomeSearch';
import HomeSort from './Components/HomeSort';
import LinearSearch from './Components/LinearSearch';
import BinarySearch from './Components/BinarySearch';
import BubbleInfo from './Components/InfoPages/BubbleInfo';
import SelectionInfo from './Components/InfoPages/SelectionInfo';
import LinearInfo from './Components/InfoPages/LinearInfo';
import BinaryInfo from './Components/InfoPages/BinaryInfo';

const store = createStore(reducers,composeWithDevTools());

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/Algorithm-Visualizer" component={Home}></Route>
            <Route exact path="/Algorithm-Visualizer/searching" component={HomeSearch}></Route>
            <Route exact path="/Algorithm-Visualizer/sorting" component={HomeSort}></Route>
            <Route exact path="/Algorithm-Visualizer/bubble-sort" component={BubbleSort}></Route>
            <Route exact path="/Algorithm-Visualizer/selection-sort" component={SelectionSort}></Route>
            <Route exact path="/Algorithm-Visualizer/insertion-sort" component={SelectionSort}></Route>
            <Route exact path="/Algorithm-Visualizer/merge-sort" component={MergeSort}></Route>
            <Route exact path="/Algorithm-Visualizer/linear-search" component={LinearSearch}></Route>
            <Route exact path="/Algorithm-Visualizer/binary-search" component={BinarySearch}></Route>
            <Route exact path="/Algorithm-Visualizer/bubble-sort-info" component={BubbleInfo}></Route>
            <Route exact path="/Algorithm-Visualizer/insertion-sort-info" component={InsertionInfo}></Route>
            <Route exact path="/Algorithm-Visualizer/selection-sort-info" component={SelectionInfo}></Route>
            <Route exact path="/Algorithm-Visualizer/linear-search-info" component={LinearInfo}></Route>
            <Route exact path="/Algorithm-Visualizer/binary-search-info" component={BinaryInfo}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
