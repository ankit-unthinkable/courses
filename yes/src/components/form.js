import React,{useState} from 'react'
import { useDispatch} from 'react-redux'
import {addCourse} from '../redux/actions.js'
import {connect} from 'react-redux';
import Show from './showCourses.js';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


const Form=()=>{
    let [title,setTitle]=useState(null);
    let [author,setAuthor]=useState(null);
    let [category,setCategory]=useState(null);
    let [length,setLength]=useState(null);
    const dispatch=useDispatch();
    
  
  const handleTitle=(e)=>{
      setTitle(e.target.value);
     // localStorage.setItem('title',JSON.stringify(e.target.value));
  }

  const handleAuthor=(e)=>{
    setAuthor(e.target.value);
   // localStorage.setItem('author',JSON.stringify(e.target.value));
}

const handleCategory=(e)=>{
    setCategory(e.target.value);
    //localStorage.setItem('category',JSON.stringify(e.target.value));
}

const handleLength=(e)=>{
    setLength(e.target.value);
  //  localStorage.setItem('length',JSON.stringify(e.target.value));
}

const handleNew=()=>{

    const data={
        id:new Date(),
        mytitle:title,
        myauthor:author,
        mycategory:category,
        mylength:length,
        isEdit:false
    }
 

    dispatch(addCourse(data));
    
}


    return(
        <div>
       <form >
           <label>Title</label><br/>
           <input onChange={handleTitle}></input><br/><br/>
           <label>Author</label><br/>
           <input onChange={handleAuthor}></input><br/><br/>
           <label>Category</label><br/>
           <input onChange={handleCategory}></input><br/><br/>
           <label>Length</label><br/>
           <input onChange={handleLength}></input> <br/><br/>

           <Button onClick={handleNew} style={ {marginLeft:"30px"} } size="small" variant="contained" color="secondary" startIcon={<SaveIcon />} >Save</Button>
       </form>
       <Show/>
        </div>
   )
}

export default connect()(Form);