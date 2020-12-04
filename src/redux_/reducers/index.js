import searchSlice, {setSearchValue} from './search_reducer';
// import {combineReducers} from 'redux';

// const rootReducer = combineReducers({
//     search: searchSlice.reducer,
// })
export {setSearchValue}
export default {search : searchSlice.reducer};