 import _ from "lodash";
 import { STREAM_CREATE, 
          STREAM_DELETE, 
          STREAM_EDIT, 
          STREAM_FETCH_ID,
          STREAM_FETCH_LIST } from "../actions/types";

export default (state = {}, action ) => {
     switch(action.type) {
          case STREAM_FETCH_ID: 
               return {...state, [action.payload.id] : action.payload }
          case STREAM_CREATE: 
               return {...state, [action.payload.id] : action.payload }
          case STREAM_EDIT :
               return{...state,  [action.payload.id] : action.payload }
          case STREAM_DELETE :
               return _.omit(state,action.payload)
          case STREAM_FETCH_LIST:
               return{...state , ..._.mapKeys(action.payload, 'id')}
          default :
               return state;
     }
}