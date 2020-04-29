import { 
          SIGN_IN, 
          SIGN_OUT,
          STREAM_CREATE, 
          STREAM_FETCH_ID,
          STREAM_FETCH_LIST, 
          STREAM_EDIT,
          STREAM_DELETE
     } from "./types";
import stream from "../apis/stream";

export const signIn = (userId) => {
     return {
          type: SIGN_IN,
          payload : userId
     };
};
export const signOut = () => {
     return {
          type:SIGN_OUT
     };
};
// Redux Thunk
export const streamCreate = (formValues) => async (dispatch, getState)  => {
   const  {userId} = getState().auth;
   const response = await  stream.post("/streams",{...formValues,userId});
   dispatch({type:STREAM_CREATE,  payload: response.data});
}

export const streamFetchList = () => async(dispatch) => {
     const response = await stream.get("/streams/");
     dispatch({type :STREAM_FETCH_LIST,payload : response.data});
}

export const streamFetchId = id => async(dispatch) => {
     const response = await stream.get(`/streams/${id}`);
     dispatch({type:STREAM_FETCH_ID, payload: response.data});
}

export const streamEdit = (id, formValues) => async (dispatch) => {
     const response = await stream.put(`/streams/${id}` ,formValues);
     dispatch({type:STREAM_EDIT, payload:response.data});
}
export const streamDelete = (id) => async (dispatch) => {
     await stream.delete(`/streams/${id}`)
     dispatch({type: STREAM_DELETE , payload : id});
}