import React,{Component} from 'react';
import {Field, reduxForm} from "redux-form";
class CreateStream extends Component {
     // De structuring
     // renderInput({input}){
     //      return <input  type="text" {...input}  />
     // }
     renderError({error,touched}){
          if(touched && error){
               return(
                    <div className="ui error message">
                         <div className="header">{error}</div>
                    </div>
               )
          }
     }
     renderInput = (formProps) => {
          //console.log(formProps.meta)
          const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}` 
          return (
               <div className={className}>
                    <label>{formProps.label}</label>
                    <input  type="text" {...formProps.input} autoComplete="off" />
                    {this.renderError(formProps.meta)}
                    {/* <div className="error">{formProps.meta.error}</div> */}
               </div>
          )
     }
     onSubmit(formValues){
          console.log(formValues);
     }
     render() { 
          return (<form onSubmit= {this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="title" component={this.renderInput} label="Enter Title"/>
                    <Field name="description" component={this.renderInput} label="Enter Description"/>
                    <button className="ui button primary">Submit</button>
               </form> );
     }
}

const validate = (formValues) => {
     const errors = {};
     if(!formValues.title){
          errors.title =" Title cannot be empty"  
     }
     if(!formValues.description){
          errors.description =" Description cannot be empty"  
     }
     return errors;
}

export default reduxForm({
     form:"createStream",
     validate
})(CreateStream);
