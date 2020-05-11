export const addCourse=(text)=>{
    return{
        type:"ADD_COURSE",
        data:text
    }
}

export const editCourse=(ids)=>{
    console.log(ids);
    return{
        type:"EDIT_COURSE",
        id:ids
       
    }
}

export const update=(ids,tsk1,tsk2,tsk3,tsk4)=>{
    return{
        type:"UPDATE",
        id:ids,
        data:{
            newmytitle:tsk1,
            newmylength:tsk2,
            newmycategory:tsk3,
            newmyauthor:tsk4
        
        
        }
    }
}


export const ADD_COURSE="ADD_COURSE";
export const EDIT_COURSE="EDIT_COURSE";
export const UPDATE="UPDATE";