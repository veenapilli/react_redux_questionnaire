export const CHOOSE_ANSWER = 'CHOOSE_ANSWER'
export const TOGGLE_QUES = 'TOGGLE_QUES'
export const SET_QUES = 'SET_QUES'

export const chooseAnswer = (index, option) => {
	return { type: CHOOSE_ANSWER, index, option }
}

export const toggleQuestions = (toggle) => {
	return { type: TOGGLE_QUES, toggle }
}

export const setQuestion = (text) => {
	return { type: SET_QUES, text }
}
