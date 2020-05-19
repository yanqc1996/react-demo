import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
//connet的作用就是与外部的Provide进行连接
import { connect } from "react-redux";

class Main extends Component {
  render() {
    return (
      <div>
        Main
        <Link to="/main/home">home</Link>
        {this.props.children}
      </div>
    );
  }
}

// state--store内的state
const mapStateToProps = state => {};

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = dispatch => {};

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Main));
