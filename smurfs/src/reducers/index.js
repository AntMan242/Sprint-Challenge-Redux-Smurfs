import {GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAIL, ADD_SMURFS_START, ADD_SMURFS_SUCCESS, ADD_SMURFS_FAIL} from '../actions';


const initialState =
 {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null
 }

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_SMURFS_START:
      return {
        ...state,
        addingSmurf: true
      }
      case ADD_SMURFS_SUCCESS:
        return {
          ...state,
          addingSmurf: false,
          smurfs: action.payload
        }
        case ADD_SMURFS_FAIL:
          return {
            ...state,
            addingSmurf: false,
            error: action.payload
          }
          case GET_SMURFS_START:
            return {
              ...state,
              fetchingSmurfs: true
            }
            case GET_SMURFS_SUCCESS:
              return {
                ...state,
                fetchingSmurfs: false,
                smurfs: action.payload
              }
              case GET_SMURFS_FAIL:
                return {
                  ...state,
                  fetchingSmurfs: false,
                  error: action.payload
                }
                default: return state
  }
}
