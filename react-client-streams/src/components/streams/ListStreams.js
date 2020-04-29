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
                         <div className="ui two buttons">
                         <div className="ui  grey button">Edit</div>
                         <div className="ui  red button">Delete</div>
                         </div>
                    </div>
               )
          }
     }
     renderCreateStream = () => {
          if(this.props.isSignedIn){
                    return (
                   <div className="align right">
                        <Link  className=" ui button primary" to="/stream/create">Create Stream</Link>
                    </div>
                    )
          }
     }
     renderList = () => {
          //console.log(this.props);
          return this.props.streams.map(stream => {
               return(
                    <div className="card" key={stream.id}>
                         <div className="content">
                              <i className="right floated camera icon"></i>
                              <div className="header">{stream.title}</div>
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
                         <h2>Stream List</h2>
                         <div className="ui cards"> 
                         {this.renderList()}
                         </div>
                         {this.renderCreateStream()}
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