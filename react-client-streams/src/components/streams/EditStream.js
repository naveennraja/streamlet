import React,{Component} from 'react';
import _ from "lodash";
import {streamFetchId,streamEdit} from "../../actions";
import {connect} from "react-redux";
import FormStream from './FormStream';


class EditStream extends Component {
     componentDidMount() {
          this.props.streamFetchId(this.props.match.params.id)
          //this.props.streamFetchId();
     }
     onSubmit = (formValues) => {
          this.props.streamEdit(this.props.match.params.id,formValues)
          console.log(formValues);
     }
     render() { 
          console.log(this.props.stream);
          if(!this.props.stream){
               return (<div>This is loading</div>)
          }
          return (
               <div>
                    <h3>Edit a Stream</h3>
                    <FormStream 
                    initialValues = { _.pick(this.props.stream,'title','description')}
                    onSubmit= {this.onSubmit}/>
               </div>);
     }
}
const mapStateToProps = (state, ownProps) => {
     return {stream : state.streams[ownProps.match.params.id] }
}
export default connect(mapStateToProps,{
     streamFetchId, streamEdit
})(EditStream);