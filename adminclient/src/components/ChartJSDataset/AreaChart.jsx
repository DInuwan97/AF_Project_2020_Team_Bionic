import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Spinner from "../Spinner/Spinner";
export default class AreaChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nyName: "dinuwan",
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Add to wishlist",
            backgroundColor: "rgba(210, 214, 222, 1)",
            borderColor: "rgba(210, 214, 222, 1)",
            pointRadius: false,
            pointColor: "rgba(210, 214, 222, 1)",
            pointStrokeColor: "#c1c7d1",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 78, 82, 88],
          },
          {
            label: "Add to cart",
            backgroundColor: "rgba(0, 64, 255 ,0.9)",
            borderColor: "rgba(0, 64, 255 ,0.8)",
            pointRadius: false,
            pointColor: "#3b8bba",
            pointStrokeColor: "rgba(0, 64, 255 ,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0, 64, 255 ,1)",
            data: [51, 48, 46, 66, 60, 50, 55],
          },
          {
            label: "Purchased",
            backgroundColor: "rgba(255, 0, 0, 1)",
            borderColor: "rgba(255, 0, 0, 1)",
            pointRadius: false,
            pointColor: "rgba(255, 0, 0, 1)",
            pointStrokeColor: "#c1c7d1",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(255, 0, 0,1)",
            data: [35, 29, 40, 61, 56, 55, 40],
          },
        ],
      },
      isLoading: true,
    };
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 300);
  }
  render() {
    return (
      <div class="card card-primary">
        <div className="card-header">
          <h3 className="card-title">User Behavior in Last Week</h3>

          <div class="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
            >
              <i className="fas fa-minus"></i>
            </button>
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="remove"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <div className="chart">
              <Line
                data={this.state.chartData}
                options={{
                  title: {
                    display: false,
                    text: "sachin",
                    fontSize: 25,
                  },
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
