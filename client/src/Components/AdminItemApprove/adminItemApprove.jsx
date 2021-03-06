import React, { Component } from "react";
import axios from "axios";
import Table from "./ItemTable/ItemTable";
export default class adminItemApprove extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios.get(`/api/items`).then((res) => {
      const items = res.data;
      console.log("hello world");

      this.setState({ items });
    });
  }

  declineItem = (id) => {
    console.log(id);
    this.setState({
      items: [...this.state.items.filter((item) => item._id !== id)],
    });

    axios.delete(`/api/items/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  //approving the item
  approveItem = (id) => {
    console.log(id);
    this.setState({
      items: [...this.state.items.filter((item) => item._id !== id)],
    });

    axios
      .patch(`/api/items/${id}`, {
        isApproved: true,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div className="container">
 
        <Table
          items={this.state.items}
          declineItem={this.declineItem}
          approveItem={this.approveItem}
        />
      </div>
    );
  }
}
