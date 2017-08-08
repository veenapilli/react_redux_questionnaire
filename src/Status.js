import React from 'react'
import PropTypes from 'prop-types'
const Status = ({correct, incorrect}) => {
	return(
	  <div>
	    <br/><br/>
	    <h3>Correct: {correct}</h3>
	    <br/><br/>
	    <h3>Incorrect: {incorrect}</h3>
	  </div>
  )
}

Status.propTypes = {
}

export default Status