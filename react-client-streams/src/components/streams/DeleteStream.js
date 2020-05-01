import React, {Component, Fragment} from 'react';
import Modal from '../Modal/Modal';
import {Link} from "react-router-dom";
import history from '../../history';
import {connect} from "react-redux";
import {streamFetchId, streamDelete } from "../../actions";

class DeleteStream extends Component {
     componentDidMount() {
          console.log(this.props);
          this.props.streamFetchId(this.props.match.params.id)
     }
     renderActionButtons  () {
          const{id} = this.props.match.params;
          return ( 
               <Fragment>
                    <button onClick= {
                         () => this.props.streamDelete(id)
                    } className="ui red button">Delete</button>
                    <Link to="/" className="ui cancel button">Cancel</Link>
               </Fragment>
          ); 
          
     }
     renderContents(){
          if(!this.props.stream){
               return 'Are you sure you want to delete this stream'
          }
          return `Are you sure you want to delete ${this.props.stream.title} stream`
     }
     render() {
          
          return (<Modal 
                    title ="Delete Stream"
                    description={this.renderContents()}
                    actions={this.renderActionButtons()}
                    onDismiss= {()=> history.push("/")}
               />);
     }
};
const mapStateToProps = (state,ownProps) => {
     return {stream : state.streams[ownProps.match.params.id]}
} 
export default connect(mapStateToProps,{
     streamFetchId, streamDelete
})(DeleteStream);
