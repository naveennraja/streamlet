import React, {Component} from 'react';
import {BrowserRouter, Route, } from "react-router-dom";


import CreateStream from './streams/CreateStream';
import EditStream from './streams/EditStream';
import DeleteStream from './streams/DeleteStream';
import ShowStreams from './streams/ShowStream';
import ListStreams from './streams/ListStreams';
import Header from './Header/Header';


class App extends Component {
     state = {  }
     render() { 
          return ( <div className="ui container">
               <BrowserRouter>
               <Header/>
                    <div>
                         <Route path="/" exact component={ListStreams} />
                         <Route path="/stream/create" component={CreateStream}/>
                         <Route path="/stream/edit" component={EditStream}/>
                         <Route path="/stream/delete" component={DeleteStream}/>
                         <Route path="/stream/show" component={ShowStreams}/>
                    </div>
               </BrowserRouter>
          </div>);
     }
}
 
export default App;