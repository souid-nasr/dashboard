import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {studentReducer} from './Reducers/StudentReducers';
import {adminReducer} from './Reducers/AdminReducers';
import {institutionReducer} from "./Reducers/InstitutionReducers";
import {moderatorReducer} from "./Reducers/ModeratorReducers";
import {courseReducer} from "./Reducers/CourseReducers"
const myReducer = combineReducers({
	institutionReducer:institutionReducer,
	adminReducer:adminReducer,
    studentReducer: studentReducer,
	moderatorReducer: moderatorReducer,
	courseReducer: courseReducer
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
	myReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;