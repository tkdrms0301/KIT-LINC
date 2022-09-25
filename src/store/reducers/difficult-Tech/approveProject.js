// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = { checkOpen: false, rejectReason: '' };

const checkInfo = createSlice({
    name: 'checkInfo',
    initialState,
    reducers: {
        checkOpen: (state, action) => {
            state.checkOpen = true;
            state.rejectReason = action.payload;
        },
        checkClose: (state) => {
            state.checkOpen = false;
            state.rejectReason = '';
        }
    }
});

export default checkInfo.reducer;

export const { checkOpen, checkClose } = checkInfo.actions;
