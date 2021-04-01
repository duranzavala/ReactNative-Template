import React, { Component } from 'react';

import { Provider } from 'react-redux';

import configureStore from '@Redux/Store/Store';
import ExampleScreen from '@Screens/ExampleScreen/App';

const store = configureStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ExampleScreen />
            </Provider>
        );
    }
}