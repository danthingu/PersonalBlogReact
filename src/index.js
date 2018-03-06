import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
// Browser Router is what interacts with the history library, 
// and decide what to do based on the change
// inside the URL. The term browser router in particular is saying i want react router to look the entire URL  
// when deciding what different components to show on the screen

// Route object is a react component that we can render inside of any other react component that 
// we put together inside of our application. The purpose of the router component is to provide the configuration
// that will say hey if the URL looks like this, then i want to show this component; else if the URL
// look like that, then i want to show that component
// So again the route object or the route component is all about providing some customization or configuration
// to react router

//import App from './components/app';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import promise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
                                /* EXPERIMENT WITH ROUTE */
// class Hello extends React.Component {
//   render() {
//     return <div>Hello</div>
//   }
// }

// class Goodbye extends React.Component {
//   render() { 
//     return <div>Goodbye</div>
//   }
// }


// ReactDOM.render(
//   // if i go to the path, then i want to show this component, that is what path and component are for
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <BrowserRouter>
//       <div>
//         Header
//         <Route path="/hello" component={Hello} />
//         <Route path="/goodbye" component={Goodbye} />
//       </div>
//     </BrowserRouter>
//   </Provider>
//   , document.querySelector('.container'));
                            /* END EXPERIMENT */

ReactDOM.render(
  // if i go to the path, then i want to show this component, that is what path and component are for
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} /> 
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
