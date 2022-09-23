// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import approveProject from './difficult-Tech/approveProject/approveProject';
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, approveProject });

export default reducers;
