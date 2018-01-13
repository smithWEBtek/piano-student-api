import React, { Component } from 'react';
import styles from './EditStudent.css';

class EditStudent extends Component {
  state = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    level: '',
    teacher_id: ''
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      email: this.props.email,
      level: this.props.level,
      teacher_id: this.props.teacher_id
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    e.preventDefault()
  }

  handleSubmit = (e) => {
    let data = this.state;
    this.props.updateStudent(data)
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <p className={styles.FormInstructions}>Edit form and click 'Update Student'</p>
        <form className={styles.Form}>
          <p><label htmlFor="student_name">First name </label>
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            /></p>
          <p><label>Last name </label>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
            /></p>
          <p><label>Email </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            /></p>
          <p><label>Level </label>
            <input
              type="text"
              name="level"
              value={this.state.level}
              onChange={this.handleChange}
            /></p>
          <p><label>Teacher ID </label>
            <input
              type="text"
              name="teacher_id"
              value={this.state.teacher_id}
              onChange={this.handleChange}
            /></p>
          <button
            type="button"
            name="cancel"
            onClick={this.props.close}
            className={styles.Danger}
          >CANCEL</button>
          <button
            type='button'
            className={styles.Success}
            onClick={(e) => this.handleSubmit(e)}
          >SAVE</button>
        </form>
      </div>
    )
  }
}

export default EditStudent
