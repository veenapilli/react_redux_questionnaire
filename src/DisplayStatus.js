import { connect } from 'react-redux'
import Status from './Status'
const mapStateToProps = state => {
  return {
    correct: state.solutions.correctCount,
    incorrect: state.solutions.incorrectCount
  }
}

const mapDispatchToProps = dispatch => {
  return {
   
    }
}


const DisplayStatus = connect(
  mapStateToProps,
  mapDispatchToProps
)(Status)

export default DisplayStatus