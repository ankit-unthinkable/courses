import React,{Component} from 'react';
import {connect} from 'react-redux';
import Buttons from './buttons'
import Display from './display';
import Edit from './edit';


class Show extends Component{

render(){
return(
  <div>

  <h3>Your have added:</h3>

 {this.props.courses.map((course) => (
                    <div key={course.id}>
                        {course.isEdit ? <Edit course={course} key={course.id} /> :
                            <Display key={course.id} course={course} />}   
                    </div>
                ))}


   
  </div>);
     }}

const mapStateToProps=(state)=>{
    return{
      courses:state
    }
  }

export default connect(mapStateToProps)(Show);

