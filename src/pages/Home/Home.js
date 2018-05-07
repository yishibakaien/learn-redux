import React, { Component } from 'react';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import * as goodsActions from '../../actions/goods.js';

class Home extends Component {

  addApple = () => {
    return this.props.goodsActions.add()
  }

  decApple = () => {
    return this.props.goodsActions.dec()
  }
  render() {
    return (
      <div>
        apple: {this.props.goods.apple}
        <div>
          <button onClick={this.addApple.bind(this)}> add 1 </button>
          <br/>
          <button onClick={this.decApple.bind(this)}> dec 1 </button>
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