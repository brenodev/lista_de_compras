import { Types } from "../actions/list"

const initialState = {
  list: null,
  items: []
}


export default function list(state = initialState, action) {
  switch(action.type) {
    case Types.Add_PRODUCT:
      return {list: action.list, item: [...state.items, action.product]};
      default: 
        return state;
  }
}