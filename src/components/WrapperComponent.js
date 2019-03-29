import React, { Component } from 'react';
import styles from './wrapperStyle.module.css';

//Card-Component som renderar vad som passas in som children. Innehåller i princip bara en wrapper med en toggle-knapp(med ett state)
class WrapperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOrHide: true,
    }
  }

  //Togglar statet mellan true och false. True så visas children. False så visas ingenting.
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
          <button
          className="btn btn-secondary" onClick={this.toggleContent}
          >{this.state.showOrHide ? 'Hide' : 'Show'} Content</button>
        </div>
      </div>
    );
  }
}

export default WrapperComponent;
