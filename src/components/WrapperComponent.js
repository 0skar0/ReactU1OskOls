import React, { Component } from 'react';
import styles from './wrapperStyle.module.css';

class WrapperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOrHide: true,
    }
  }
  toggleContent = () => {
    this.setState(prevState =>({
      showOrHide: !prevState.showOrHide,
    }))
  }
  render() {

    return(
      <div className={`${styles.card} ${this.props.styling}`}>
        <div className="card-body">
          {this.state.showOrHide ? this.props.children : null}
          <hr/>
          <button className="btn btn-secondary" onClick={this.toggleContent}>{this.state.showOrHide ? 'Hide' : 'Show'} Content</button>
        </div>
      </div>
    );
  }
}

export default WrapperComponent;
