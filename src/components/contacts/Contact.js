import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {

  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    console.log(this.state.showContactInfo);
    this.setState({
      showContactInfo: !this.state.showContactInfo      
    });
  }

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type: 'DELETE_CONTACT', payload: id });
    } catch(e) {
      dispatch({type: 'DELETE_CONTACT', payload: id });
    }
  }

  render() {
    const { id, name, email, phone } = this.props.contact;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
            <h4>{name}{' '} 
              <i onClick={this.onShowClick.bind(this,name)} 
                 className="fas fa-sort-down" 
                 style={{cursor : 'pointer'}} />
              <i className="fas fa-times"
                 onClick={this.onDeleteClick.bind(this, id, dispatch)} 
                 style={{cursor: 'pointer', float: 'right', color: 'red'}}></i>
              <Link to={`contact/edit/${id}`}>
                <i style={{
                      cursor: 'pointer',
                      float : 'right',
                      color: 'black',
                      marginRight: '1rem'
                   }}
                   className="fas fa-pencil-alt">
                </i>
              </Link>
            </h4>
            {this.state.showContactInfo ? (
              <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
            </ul>
            ) : null}
          </div>
          )
        }}
      </Consumer>
    );
  }
}

Contact.propType = {
  contact  : PropTypes.string.isRequired
};

export default Contact;
