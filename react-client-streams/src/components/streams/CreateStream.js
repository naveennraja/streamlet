import React, {Component} from 'react';
import {connect} from "react-redux";
import { streamCreate } from '../../actions';
import FormStream from './FormStream';

class CreateStream extends Component {
    
     onSubmit = (formValues) =>{
          //console.log(formValues);
          this.props.streamCreate(formValues);
     }
     render() { 
          return (
               <div>
                    <h3> Create  a new Stream</h3>
                    <FormStream onSubmit= {this.onSubmit}/>
               </div>
               
          );
     }
}

export default connect(null,
     {streamCreate})
(CreateStream);
