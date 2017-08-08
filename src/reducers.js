import  {combineReducers } from 'redux'
import{
	CHOOSE_ANSWER,
	TOGGLE_QUES
} from './actions'



const initialStore = {
	question: ['What is 8*1?', 'Where does the sun rise?',
	'What is 0*0?', 'Which of these can you drink?',
	'Adult bicycle has how many wheels?', 'Steering has how many circles?',
	'What is the height of Mt. Everest?', 'What is the weight of a cricket ball?',
	'What color is blue?', 'Distance between 10 miles and 1000 miles is?'],
	
	options: [{o1: "8",o2: "4", o3: "16",o4: "10"},
	{o1: "North",o2: "South", o3: "West", o4: "East"}, 
	{o1: "1",o2: "Infinity", o3: "0",o4: "-1"},
	{o1: "Pizza",o2: "Juice", o3: "Pasts", o4: "Bread"}, 
	{o1: "0",o2: "1", o3: "2",o4: "3"},
	{o1: "18",o2: "3", o3: "5",o4: "1"},
	{o1: "8848m",o2: "100m", o3: "80080m",o4: "8km"},
	{o1: "100gm",o2: "163gm", o3: "15kg", o4: "19gm"}, 
	{o1: "pink",o2: "purple", o3: "red",o4: "blue"},
	{o1: "999",o2: "990", o3: "900",o4: "989"}], 
	
	answers: [1, 4, 3, 2, 3, 4, 1, 2, 4, 2],
	inProgress: true,
	currentQues: 0,
	correctCount: 0,
	incorrectCount: 0,
	selected: [],
	maxQuestions: 10
}

const solutions = (state = initialStore, action) =>{
	console.log("in solutions: ", action)
	switch(action.type){
		case CHOOSE_ANSWER:
			var dotProp = require('dot-prop-immutable');
			var value = action.option
			if(value == state.answers[action.index.current]){
				state = {...state, 
					selected: [
					...state.selected.slice(0, state.currentQues),
					{...state.selected[state.currentQues], value },
					...state.selected.slice(state.currentQues + 1)
					]}, 
					state.currentQues = state.currentQues +1,
					state.correctCount= state.correctCount + 1;
			}else{
				state = {...state, 
					selected: [
					...state.selected.slice(0, state.currentQues),
					{...state.selected[state.currentQues], value },
					...state.selected.slice(state.currentQues + 1)
					]}, 
					state.currentQues = state.currentQues +1,
					state.incorrectCount= state.incorrectCount + 1;
			}
			if(state.currentQues == state.maxQuestions){
				console.log("maxQuestions hit")
				state = {...state,
					inProgress: false
				}
			}
			console.log("Updated state: ", state)
			return state
		case TOGGLE_QUES:
			return []	
		default: 
			return state
		}
	}

	const quizApp = combineReducers({
		solutions
	})

	export default quizApp
