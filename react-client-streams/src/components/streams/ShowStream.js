import React,{Component, Fragment} from 'react';
import { connect } from "react-redux";
import { streamFetchId } from '../../actions';

class ShowStreams extends Component {
     componentDidMount() {
          console.log("Here",this.props,this.props.streamFetchId(this.props.match.params.id));
     }
     render() { 
          if(!this.props.stream){
               return <div>Loading....</div>
          }
          const {title,description} = this.props.stream;
          return (
               <Fragment>
                    <h2> {title}</h2>  
                    <p> {description}</p>  
               </Fragment>
          );
     }
}
const mapStateToProps = (state,ownProps) => {
     return {stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{
     streamFetchId
})(ShowStreams);