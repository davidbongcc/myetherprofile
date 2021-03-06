import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { reducers } from './reducers'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

import App from './App'
import Home from './Home'
import Header from './Header'
import Profile from './Profile'
import Me from './Me'

const store = createStore(reducers);

// Old way
// var routes = (
//   <Provider store={store}>
//     <Router>
//       <div>
//         <App/>
//         <Header/>
//         <div style={{
          
//         }}>
//           <Route exact path="/" component={Home}/>
//           <Route exact path="/profile/:address" component={Profile}/>
//           <Route exact path="/me" component={Me}/>
//         </div>
//       </div>
//     </Router>
//   </Provider>
// );

var routes = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
