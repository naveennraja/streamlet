import React, {Component} from 'react';
import {Router, Route, Switch } from "react-router-dom";
import history from "../history";

import CreateStream from './streams/CreateStream';
import EditStream from './streams/EditStream';
import DeleteStream from './streams/DeleteStream';
import ShowStreams from './streams/ShowStream';
import ListStreams from './streams/ListStreams';
import Header from './Header/Header';


class App extends Component {
     render() { 
          return ( <div className="ui container">
               <Router history={history}>
               <Header/>
                    <Switch>
                         <Route path="/" exact component={ListStreams} />
                         <Route path="/stream/create" component={CreateStream}/>
                         <Route path="/stream/edit/:id" component={EditStream}/>
                         <Route path="/stream/delete/:id" component={DeleteStream}/>
                         <Route path="/stream/:id" component={ShowStreams}/>
                    </Switch>
               </Router>
          </div>);
     }
}
 
export default App;