import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/index'
import { Container, Row, Col, Table } from 'reactstrap'

class LessonResources extends Component {

  componentDidMount() {
    this.props.onFetchLessonResources()
  }

  render() {

    const lessonResources = this.props.lessonResources

    let clickableNames = lessonResources.map((lesres, index) => {
      return (
        <Link to={`/lessonResources/${lesres.id}`}
          style={{ marginRight: '5px' }}
          key={lesres.id}
          onClick={() => this.setState({ showLessonResourcesList: false })}
        >{lesres.id}
        </Link>
      )
    })

    const renderLessonResources = this.props.lessonResources.map((lesres, index) => {
      return (
        <tr key={index}>
          <th scope="row">{lesres.id}</th>
          <td><Link
            to={`/lessons/${lesres.lesson_id}`}
            style={{ marginRight: '5px' }}
            key={lesres.id}>{lesres.lesson.teacher.lastname} ~ {lesres.lesson.student.lastname}</Link></td>
          <td>{lesres.lesson.date}</td>
          <td><Link to={`/teachers/${lesres.lesson.teacher_id}`}>{lesres.lesson.teacher.firstname} {lesres.lesson.teacher.lastname}</Link></td>
          <td><Link to={`/students/${lesres.lesson.student_id}`}>{lesres.lesson.student.firstname} {lesres.lesson.student.lastname}</Link></td>
        </tr>
      )
    })

    return (
      <Container>
        {/* <Row>
          <Col>
            {clickableNames}
          </Col>
        </Row> */}
        <Table striped size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Teacher - Student</th>
              <th>Date</th>
              <th>Teacher</th>
              <th>Student</th>
            </tr>
          </thead>
          <tbody>
            {renderLessonResources}
          </tbody>
        </Table>
        <div>
          <Switch>
            <Route path='/lesson_resources/:id' exact />
            <Route path='/lesson_resources' exact />
          </Switch>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    lessonResources: state.lesres.lessonResources
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchLessonResources: () => dispatch(actionCreators.fetchLessonResources())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LessonResources)
