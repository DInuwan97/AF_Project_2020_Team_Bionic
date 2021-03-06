import React, { Component } from "react";
import CardList from './CategoryCardList'
import CategoryForm from "./CategoryForm";
import CategoryTable from "./CategoryTable";
import swal from "sweetalert";
import axios from "axios";
export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      updatingCategory: {}
    };
  }

  componentDidMount() {
    axios.get(`/api/category`).then((res) => {
      const items = res.data;
      this.setState({
        category: items,
      });
    });
  }

  //adding a new category
  addCategory = (category) => {
    
    axios
      .post("/api/category", {
        categoryName: category.categoryName,
        genderType: category.genderType,
        code: category.code,
      })
      .then((res) => {
        this.setState({ category: [...this.state.category, category] });
        swal({
          title: "THANK YOU",
          text: "ITEM ADDED SUCESSFULLY",
          icon: "success",
          button: "OKAY",
        });
      })
      .catch(function (error) {
        swal({
          title: "ERROR",
          text: "Please Enter the required Fields",
          icon: "error",
          button: "Try Again",
        });
      });

     
  };

  //deleting a category
  deleteCategory = (id) => {
    this.setState({
      category: [...this.state.category.filter((cat) => cat._id !== id)],
    });
    axios.delete(`/api/category/${id}`).then((res) => {
    });
  };

  //updating
  updateCategory = (id) => {
    this.setState({
      updatingCategory: {
        categoryName: "newCategory",
        genderType: "Male",
        code: "NM19",
        edit : true
      },
    });
  };

  render() {
    return (
      <div className="container">
        <CardList categoryList = {this.state.category}/>
        <CategoryForm
          addCategory={this.addCategory}
          updateCategory={this.updateCategory}
          updatingCategory = {this.state.updatingCategory}
        
        />
        <CategoryTable
          categories={this.state.category}
          deleteCategory={this.deleteCategory}
          updateCategory={this.updateCategory}
        />
      </div>
    );
  }
}
