import React, { Component } from "react";

export default class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      code: "",
      genderType: "",
      selectedGender: "",
      updatedCategoryName: "",
      updatedCode: "",
      updatedGenderType: "",
    };
  }

  onChange = (e) => {
    this.setState({ ...this.state.category, [e.target.name]: e.target.value });
  };

  onUpdateChange = (e) => {
    this.setState({
      updatedCategoryName: this.props.updatingCategory.categoryName,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCategory(this.state);
  };

  render() {
   
    return (
      <div className="container">
       <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Add New Category</h3>

              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i className="fas fa-minus"></i></button>
              </div>
            </div>
        <form role="form" onSubmit={this.handleSubmit}>
          <div className="card-body">
            <div className="form-group">
              <label for="exampleInputEmail1">Category Name</label>
              <input
                type="text"
                name="categoryName"
                className="form-control"
                placeholder="Enter Category Name"
                onChange={this.onChange}
              />
            </div>
            <div class="form-group">
              <label>Select</label>
              <select
                class="form-control"
                onChange={this.onChange}
                name="genderType"
              >
                <option>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Any">Any</option>
              </select>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Code Name</label>
              <input
                type="text"
                name="code"
                className="form-control"
                placeholder="Enter code name"
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="card-footer">
            <button
              type="submit"
              className="btn btn-primary btn-block"

            >
              {this.props.updatingCategory.edit ? "Edit Item" : "Add Item "}
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}
