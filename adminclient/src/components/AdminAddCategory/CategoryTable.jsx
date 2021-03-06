import React, { Component } from "react";
import TableRow from "./CategoryTableRow";

const $ = require("jquery");
$.DataTable = require("datatables.net");

export default class CategoryTable extends Component {
  getRow() {
    return this.props.categories.map(
      ({ _id, categoryName, code, genderType }) => {
        return (
          <TableRow
            id={_id}
            categoryName={categoryName}
            code={code}
            genderType={genderType}
            deleteCategory={this.props.deleteCategory}
            updateCategory={this.props.updateCategory}
          />
        );
      }
    );
  }

  componentDidUpdate = () => {
    $("#category-table").DataTable();
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <table
            id="category-table"
            className="table table-bordered table-striped"
          >
            <thead>
              <tr>
                <th>Category Name</th>
                <th>Category Code</th>
                <th>Gender</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{this.getRow()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
