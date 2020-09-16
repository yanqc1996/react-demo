import React, { Component } from "react";
//connet的作用就是与外部的Provide进行连接
import { connect } from "react-redux";
import './home.less'


class Home extends Component {
  render() {
    return (
      <div className="box">home</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispathToProps)(Home);
