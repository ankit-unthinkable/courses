import {ADD_COURSE,EDIT_COURSE,UPDATE} from './actions';

const reducer=(state=[],action)=>{


    switch(action.type){
    case ADD_COURSE: 
              return state.concat([action.data]);

    case EDIT_COURSE: 
              return  state.map((course)=>{
                  console.log(course.id); 
                  console.log(action.id);
                  return(course.id===action.id?{...course,isEdit:!course.isEdit}:course)})
     case UPDATE:
             return state.map((course)=>{
                   if(course.id === action.id) {
                     return {
                        ...course,
                        mytitle:action.data.newmytitle,
                        mylength:action.data.newmylength,
                        mycategory:action.data.newmycategory,
                        myauthor:action.data.newmyauthor,
                        
                        isEdit: !course.isEdit
                     }
                   } else return course;
                 })
          
    default: return state;

    }

}

export default reducer;