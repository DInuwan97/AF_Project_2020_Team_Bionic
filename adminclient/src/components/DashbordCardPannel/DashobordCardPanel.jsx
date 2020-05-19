import React, { Component } from 'react'

export default class DashobordCardPanel extends Component {


  constructor(props){
    super(props);
    this.state={
      usersList:[],
      loggedUserDetails:''
    }
  }


  componentDidMount() {
    this.setState({
      usersList:this.props.usersList,
      loggedUserDetails:this.props.loggedUserDetails
    })
  }


    render() {
        return (
          
            <div className="row">
              <div className="col-lg-3 col-6">
                
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>150</h3>
    
                    <p>New Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
             
              <div className="col-lg-3 col-6">
                
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
    
                    <p>Bounce Rate</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>


              {((this.state.loggedUserDetails.isAdmin === true))&&
           
              <div className="col-lg-3 col-6">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>{this.state.usersList.length}</h3>
    
                    <p>User Registrations</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              }

              {((this.state.loggedUserDetails.isSalesManager === true))&&
                   <div className="col-lg-3 col-6">
                   <div className="small-box bg-warning">
                     <div className="inner">
                       <h3>99</h3>
       
                       <p>User Registrations</p>
                     </div>
                     <div className="icon">
                       <i className="ion ion-person-add"></i>
                     </div>
                     <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                   </div>
                 </div>
              }

              <div className="col-lg-3 col-6">
               
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>65</h3>
    
                    <p>Unique Visitors</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
           
            </div>
        )
    }
}
