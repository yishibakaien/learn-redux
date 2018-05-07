import React, { Component } from 'react';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import * as goodsActions from '../../actions/goods.js';

class Home extends Component {

  addApple = () => {
    this.props.goodsActions.add()
  }

  decApple = () => {
    this.props.goodsActions.dec()
  }
  asyncAddApple = () => {
    this.props.goodsActions.asyncAdd()
  }
  render() {
    return (
      <div>
        apple: {this.props.goods.apple}
        <div>
          <button onClick={this.addApple.bind(this)}> add 1 </button>
          <br/>
          <button onClick={this.decApple.bind(this)}> dec 1 </button>
          <br />
          <button onClick={this.asyncAddApple.bind(this)}> asycn add 1 </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    goods: state.goods
  };
}
function mapDispatchToProps(dispatch) {
  return {
    goodsActions: bindActionCreators(goodsActions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);