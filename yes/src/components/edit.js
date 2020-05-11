import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {connect} from 'react-redux';
import { useDispatch} from 'react-redux'
import {update} from '../redux/actions.js'

const Edit=(props)=>{

let [mytitle,setTitle]=useState(props.course.mytitle);
let [mylength,setLength]=useState(props.course.mylength);
let [mycategory,setCategory]=useState(props.course.mycategory);
let [myauthor,setAuthor]=useState(props.course.myauthor);
const dispatch=useDispatch();
  
const handleEditTitle=(e)=>{
  e.preventDefault();
  setTitle(e.target.value);
}

const handleEditLength=(e)=>{
    e.preventDefault();
    setLength(e.target.value);
  }

  const handleEditCategory=(e)=>{
    e.preventDefault();
    setCategory(e.target.value);
  }

  const handleEditAuthor=(e)=>{
    e.preventDefault();
    setAuthor(e.target.value);
  }


const handleEdit=(e)=>{
  e.preventDefault();
 const data={
  
   newmytitle:mytitle,
   newmylength:mylength,
   newmycategory:mycategory,
   newmyauthor:myauthor,
   id:props.course.id,
   isEdit:false

}

console.log(data);

dispatch(update(props.course.id,data.newmytitle,data.newmylength,data.newmycategory,data.newmyauthor));


}


return(
    <div>
      <form onSubmit={handleEdit}>
    <input  defaultValue={props.course.mytitle} onChange={handleEditTitle} />
    <input  defaultValue={props.course.mylength} onChange={handleEditLength} />
    <input  defaultValue={props.course.mycategory} onChange={handleEditCategory} />
    <input  defaultValue={props.course.myauthor} onChange={handleEditAuthor} />
    <Button type="submit" size="small" startIcon={<SaveIcon />} >Update</Button>
    </form>
  </div>
    )
}



export default connect()(Edit);

