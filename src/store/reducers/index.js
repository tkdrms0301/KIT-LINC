// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import checkInfo from './difficult-Tech/approveProject';
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, checkInfo });

export default reducers;
