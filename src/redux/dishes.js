import {DISHES} from "../shared/dishes";
import * as ActionTypes from './ActionTypes'

export const Dishes = (state = DISHES, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISH:
            let dish = action.payload;
            dish.id = state.length
            return state.concat(dish)
        default:
            return state;
    }
}
