import React, { Component } from 'react';
import { connect } from "react-redux";
import {Link } from "react-router-dom";
import { streamFetchList } from '../../actions';
class ListStreams extends Component {
     componentDidMount() {
          this.props.streamFetchList();
     }
     renderOperations= (stream) => {
          if(stream.userId === this.props.currentUserId){
               return(
                    <div className="extra content">
                         <div className="ui actions buttons">
                         <Link className="ui  cancel button" to={`/stream/edit/${stream.id}`}>Edit</Link>
                         <Link className="ui  red button" to={`/stream/delete/${stream.id}`}>Delete</Link>
                         </div>
                    </div>
               )
          }
     }
     renderCreateStream = () => {
          if(this.props.isSignedIn){
                    return ( 
                    <Link  
                         className=" ui button primary" 
                         to="/stream/create">
                         Create Stream
                    </Link>                    
                    )
          }
     }
     renderList = () => {
          //console.log(this.props);
          return this.props.streams.map(stream => {
               return(
                    <div className="card five wide column" key={stream.id}>
                         <div className="content">
                              <i className="right floated camera icon"></i>
                              <Link className="header" to={`/stream/${stream.id}`}>
                                   {stream.title}
                              </Link>
                              <div className="description">{stream.description}</div>
                         </div>
                         {this.renderOperations(stream)}
                    </div>
               )
          })
     }
     render() { 
          return (
                    <div>
                         <div className="ui right aligned grid">
                              <div className="left floated left aligned eight wide column">
                                   <h2>Stream List</h2>
                              </div>
                              <div className="left floated right aligned eight wide column">
                                   {this.renderCreateStream()}
                              </div>
                         </div>
                         
                         <div className="ui cards grid"> 
                               {this.renderList()}
                         </div>
                    </div>
               );
     }
} 
const mapStateToProps = (state) =>  {
     console.log("state",state);
     return  { 
          isSignedIn : state.auth.isSignedIn,
          streams : Object.values(state.streams),
          currentUserId : state.auth.userId};
};
export default connect( mapStateToProps, {
     streamFetchList
})(ListStreams);