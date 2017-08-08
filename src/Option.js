import React from 'react'
import PropTypes from 'prop-types'
const Options = (props) => {
  return(
  <div  onClick = {() => {props.handleClick()} }>
    <button style = {{
    border: "1px solid gray",
    width: "70%",
    height: "auto",
    minHeight: "60px",
    padding: "20px"
    }} >
    {props.option}
    </button>
  </div>
  )
}

Options.propTypes = {
  /*handleClick: PropTypes.func.isRequired,
  current: PropTypes.int.isRequired, 
  item: PropTypes.int.isRequired, 
  option: PropTypes.string.isRequired*/
}

export default Options