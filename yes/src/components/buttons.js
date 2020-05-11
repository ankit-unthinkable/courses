import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Form from './form.js'
import Edit from './edit.js'
import {connect} from 'react-redux';
import { useDispatch} from 'react-redux'




 function Buttons() {
    let [add,setAdd]= useState(false);
    

    const handleNew=()=>{
        setAdd(true);
    }

  

    return(
        <div>
        <Button size="small" variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleNew}>NEW</Button>
       
       {add?<Form/>:null}
     
      
        </div>
   )
}

export default Buttons;