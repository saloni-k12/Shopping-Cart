import {INCREMENT} from './constant';
import {DECREMENT} from './constant';

export const increment =() =>({
  type: INCREMENT,
})

export const decrement =() =>({
  type: DECREMENT,
})