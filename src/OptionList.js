import React from 'react'
import PropTypes from 'prop-types'
import Option from './Option'

const OptionList = ({options, current, onOptionClick}) => {
	console.log(options , current)
	if(options != null){
		return(
			<div>
			    <Option item='1' option={options.o1} current={current} handleClick={() => onOptionClick({current}, 1)} />
				<Option item='2' option={options.o2} current={current} handleClick={() => onOptionClick({current}, 2)} />
				<Option item='3' option={options.o3} current={current} handleClick={() => onOptionClick({current}, 3)} />
				<Option item='4' option={options.o4} current={current} handleClick={() => onOptionClick({current}, 4)} />
			</div>
		)
	}else{
		return(
		<h1> </h1>
		)
	}
}

OptionList.propTypes = {
	
}

export default OptionList
