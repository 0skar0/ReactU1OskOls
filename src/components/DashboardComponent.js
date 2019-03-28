import React, { Component } from 'react';
import WrapperComponent from './WrapperComponent';
import UserComponent from './UserComponent';
import styles from './dashboardStyle.module.css';

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ['Tord Yvel'],
      color: true,
      userToConcat: ['']
    }
  }

  toggleColorFunc = () => {
    this.setState(prevState =>({
      color: !prevState.color,
    }))
  }

  addUser = (user) => {
    let userArray = this.state.userName.concat(user);
    this.setState({
      userName: userArray,
    })
  }

  removeUser = () => {
    let userToRemove = this.state.userName.slice(0, -1);
    this.setState( {
      userName: userToRemove
    })
  }

  handleChange = (event) => {
    this.setState({
      userToConcat: event.target.value,
    })
  }

  render() {
    return(
      <div className={styles.dashboard}>
        <WrapperComponent>

          <UserComponent color={this.state.color} userName={this.state.userName}/>
          <button style={{width: '100%'}} className="btn btn-primary" onClick={this.toggleColorFunc}>Toggle Colors</button>
        </WrapperComponent>

        <WrapperComponent styling={styles.manageUserWrapper}>
          <div className={styles.buttonWrapper}>
            <input type="text" value={this.state.userToConcat} onChange={this.handleChange} className="form-control mb-2" placeholder="New User"></input>

            <button className="btn btn-success mb-2" onClick={() => this.addUser(this.state.userToConcat)}>Add User</button>
            <button className="btn btn-danger" onClick={() => this.removeUser()}>Remove User</button>
          </div>
        </WrapperComponent>
      </div>
        )
  }
}

export default DashboardComponent;
