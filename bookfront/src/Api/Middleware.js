
import {loadBookItems} from "./ServerApi";
import {statuses} from "../State/statuses";

const Middleware = async (action) => {

  console.log("ACTION MIDDLEWARE", action);
  switch(action.type) {
    case statuses.LOADING_BOOKS:
      try {
        const res = await loadBookItems();
        console.log("Middleware success", res);
        return({type: statuses.LOAD_BOOKS_SUCCESS, data: res, code: res.status});
      }
      catch (err) {
        console.log(err);
        return({type: statuses.LOAD_BOOKS_FAILED, data: [], code: err.response});
      }
    default:
      return(action);
  }
    
}

export default Middleware;