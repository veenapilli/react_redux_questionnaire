import React from 'react'
import PropTypes from 'prop-types'
const Question = ({text}) => {
  return(
    <div>
      <h1>
        {text}
      </h1>
    </div>
  )
}

Question.propTypes = {
/*  quesText: PropTypes.string.isRequired
*/}

export default Question