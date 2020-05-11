import React, { Component } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { editCourse } from '../redux/actions';



const { SearchBar } = Search;

class Display extends Component {

  constructor(props){
    super(props);
     this.data = [
      {
        id: this.props.course.id,
        title: this.props.course.mytitle,
        length: this.props.course.mylength,
        category: this.props.course.mycategory,
        author: this.props.course.myauthor
      },
    ];
    localStorage.setItem('data',JSON.stringify(this.data));
  ;
this.columns = [
  {
    dataField: "id",
    hidden: true
  },
  {
    dataField: "title",
    text: "Title",
    

  },
  {
    dataField: "length",
    text: "Length",

  },
  {
    dataField: "category",
    text: "Category",

  },
  {
    dataField: "author",
    text: "Author",

  },

];


this.selectRow = {
 mode:'radio',
 hideSelectColumn:true,
 clickToSelect:true,
  bgColor: 'pink',
  onSelect:() => {
  
   return this.props.course.id;
      
    }


  
};
 



  }


  render() {

    return (
      <div>
      <ToolkitProvider
        keyField="id"
       
        data={this.data}
        columns={this.columns}
         
        striped
        hover
        condensed
       search
       filter={filterFactory()}
     
      > 
      {
    props => (
      <div>
       
        <SearchBar { ...props.searchProps } />

        <BootstrapTable  selectRow={ this.selectRow}
          { ...props.baseProps }
        />
      </div>
    )
  }

      </ToolkitProvider>
      <Button style={ {marginLeft:"30px"} } size="small" variant="contained" color="secondary" startIcon={<EditIcon />} onClick={()=>{this.props.dispatch(editCourse(this.selectRow.onSelect()))}}>Edit</Button>
     {console.log(this.selectRow.onSelect())}
      </div> 

    )
  }
}

export default connect()(Display);

