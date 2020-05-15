import React, { Component } from 'react';
import Axios from 'axios';
import ReviewReplyDataTableRow from './ReviewReplyTableRow';
import {withRouter} from 'react-router-dom';
const $ = require('jquery');
$.DataTable = require('datatables.net');


class ReviewReplyDataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }


    componentDidMount = () => {
        this.getTableData();
    }

    componentDidUpdate=()=>{
        $('#review-reply-table').DataTable();
    }

    getTableData = () => {
        const url = "/api/review/admin/getAdminReplyItems/";
        const token = localStorage.getItem('userLoginToken');
        if (token) {
            Axios.get(url, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            }).then(res => {
                this.setState({
                    items: res.data.data
                });
            }).catch(err=>{
                console.log(err);
                
            })
        }
    }

    goToItemReviewReplies = (itemId,itemName)=>{
        if(itemId){
            this.props.history.push({pathname:`/ReviewReplies/${itemId}`,state:{itemName}});
        }
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Item Replies</h3>
                    </div>
                    <div className="card-body">
                        <table id="review-reply-table" className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Item Name</th>
                                    <th>Reply Count</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    this.state.items.map((element,index,self)=>(
                                        <ReviewReplyDataTableRow itemData ={element} index ={index} 
                                        goToItemReviewReplies={this.goToItemReviewReplies} />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ReviewReplyDataTable);