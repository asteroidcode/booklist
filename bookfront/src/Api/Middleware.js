import {loadBookItems} from "./ServerApi";

class Middleware {

    sw(state, action) {

      console.log("ACTION MIDDLEWARE", action);
      switch(action.type) {
        case "LOADING_BOOKS":
          try {
            const result = loadBookItems();
            console.log(result);
            return(state, {type: "LOAD_BOOKS_SUCCESS"});
          }
          catch (err) {
            console.log(err);
            return(state, {type: "LOAD_BOOKS_FAILED"});
          }
        default:
          console.log();
          return(state, action);
      }
    }
    
}

export default Middleware;