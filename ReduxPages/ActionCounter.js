
import {INCREMENT,DECREMENT,CLEAR} from './constant';


 export const increment =() =>({
     type:INCREMENT,
 });

 export const decrement =() =>({
     type:DECREMENT,
 });

export const clear =() =>({
    type:CLEAR,
});