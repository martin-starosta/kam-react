/*
    ./client/components/App.jsx
*/
import React from 'react';
import { 
    hashHistory, browserHistory 
} from 'react-router'
import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

/* Redux Store */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

import Home from '../home/Home.jsx';
import Forum from '../forum/Forum.jsx';
import PostDetail from '../post/PostDetail.jsx';

const initialState = {
    posts: [
        {
            id: 1,
            slug: 'tesco-zaplati-pokutu',
            title: 'Tesco zaplatí 214 mil. libier pre nesprávne údaje o zisku',
            text: 'Spoločnosť Tesco, ktorá je najväčším britským maloobchodným reťazcom, súhlasila s tým, že zaplatí pokutu a odškodnenie akcionárom v celkovej sume 214 mil. britských libier (GBP) za to, že v roku 2014 nadhodnotila svoj zisk.'
        },
        {
            id: 2,
            slug: 'konferencia-dodavatelov-tesco',
            title: 'Konferencia pre dodavateľov TESCO 2017',
            text: 'Prezentáciu z konferencie pre dodávateľov TESCO, ktorá sa konala v Prahe, máš k dispozícií len na KAM Fóre. Prezentácia z konferencia dodávateľov TESCO 2017 (PDF, 5MB)'
        },
        {
            id: 3,
            slug: 'lorem-post',
            title: 'Lorem Ipsum Post',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut enim consectetur, feugiat lacus at, accumsan mauris. Mauris sagittis tortor eget laoreet maximus. Proin rhoncus mi velit, eu pharetra mauris bibendum eu. Mauris dignissim lectus nec tellus bibendum rhoncus quis ut eros. Vestibulum eget lorem eget urna lacinia interdum. Aliquam arcu lacus, scelerisque quis pellentesque et, interdum non mi. Sed dui elit, tristique egestas orci non, aliquam molestie arcu. Sed id nisl volutpat, lacinia purus eget, mattis ante. Praesent auctor, metus in interdum facilisis, massa ligula placerat velit, faucibus congue augue felis sed odio. Sed lacinia congue aliquet. Vestibulum bibendum ornare congue. Nullam imperdiet ex eros, quis ultricies urna tempus eu. Aenean scelerisque metus enim, a facilisis libero tincidunt a. Aenean vestibulum quam tellus, ac tincidunt eros tempus non.'
        },
        {
            id: 4,
            slug: 'lorem-post-another',
            title: 'Another Lorem Ipsum Post',
            text: 'Etiam eu justo neque. Nam quis ante tempus, pretium massa vitae, porttitor erat. Vestibulum sit amet nisi libero. Vivamus iaculis sem neque, at consectetur lorem vehicula vel. Praesent id est ac tellus porttitor suscipit. Vivamus nec imperdiet augue, at molestie justo. Curabitur auctor mauris ut gravida porta. Proin egestas purus scelerisque urna finibus ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tincidunt, erat sed auctor dapibus, velit mi viverra elit, quis tincidunt tortor ante sit amet leo. Quisque ut nisi nisi. Maecenas congue, nunc et auctor finibus, justo justo congue ante, eget tincidunt felis augue ut nibh.'
        }
    ]
};
let store = createStore(todoApp, initialState);

/* Test Store */
import { addTodo } from './actions';
import { addPost } from '../forum/ForumActions';

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// Dispatch some actions
/*store.dispatch(addTodo('Learn about actions'));
store.dispatch(addPost('Learn about posts'));*/

// Stop listening to state updates
//unsubscribe();

const App = (props)=> (
    <Provider store={store} >
        <Router history={hashHistory}>
            <div className='app'>
                <div className='app-header'>
                    <Header />
                </div>
                <div className='app-body'>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/forum" component={Forum}/>
                        <Route path="/post/:slug" component={PostDetail}/>
                    </Switch>
                </div>
                <div className='app-footer'>
                    <Footer />
                </div>
            </div>
        </Router>
    </Provider>
);

export default App;