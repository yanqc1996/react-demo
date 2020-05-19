import React, { Component } from "react";
//connet的作用就是与外部的Provide进行连接
import { connect } from "react-redux";
import '@/pages/home/less/index.less'


class Home extends Component {
  render() {
    return (
      <div className="box">home</div>
    );
  }
}

// state--store内的state
const mapStateToProps = state => {};

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = dispatch => {};

export default connect(mapStateToProps, mapDispathToProps)(Home);
