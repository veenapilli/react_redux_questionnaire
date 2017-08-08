import { connect } from 'react-redux'
import OptionList from './OptionList'
import { chooseAnswer } from './actions'


const getCurrOptions = (optionList = [ ], index) => {
  console.log(optionList)
  if(optionList!= null){
   return optionList[index]
     }else{
    return null
  }
}

const mapStateToProps = state => {
  return {
    options: getCurrOptions(state.solutions.options, state.solutions.currentQues),
    current: state.solutions.currentQues
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOptionClick: (current, id) => {
      console.log(id)
      dispatch(chooseAnswer(current, id))
    }
  }
}

const DisplayOptions = connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionList)

export default DisplayOptions