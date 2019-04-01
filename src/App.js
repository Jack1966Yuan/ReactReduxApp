import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Posts from './components/posts';
import PostForm from './components/postform';
import DisplayChange from './components/displaychange';
import Change from './components/change';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Change />
          <DisplayChange />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
