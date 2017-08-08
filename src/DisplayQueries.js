import { connect } from 'react-redux'
import Question from './Question'
const mapStateToProps = state => {
	console.log("Queries: ", state)
	if(state.solutions.inProgress){
	  return {
	    text: "Ques: " + state.solutions.question[state.solutions.currentQues]
	  }
	}else{
		return {
			text: "Questionnaire Completed !!!"
		}
	}
}

const mapDispatchToProps = dispatch => {
  return {
   
    }
}

const DisplayQueries = connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)

export default DisplayQueries

