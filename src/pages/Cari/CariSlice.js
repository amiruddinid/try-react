import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMotor } from './CariAPI';

export const getMotor = createAsyncThunk(
    'motor/fetchMotor',
    async() => {
        const response = await fetchMotor();
        return response;
    }
)

export const motorSlice = createSlice({
    name:'motor',
    initialState: {
        data: null,
        initData: null,
        status: 'idle',
    },
    reducers:{
        filterMotor: (state, action) => {
            console.log(action);
            state.data = state.initData.filter(el => {
                return el[action.payload.type].toString() === action.payload.value
            })
        },
        sortMotor: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMotor.pending, (state) => {
                console.log('test');
                state.status = 'loading';
            })
            .addCase(getMotor.fulfilled, (state, action) => {
                state.status = 'idle';
                state.data = action.payload;
                state.initData = action.payload;
            })
    }
})

export const { filterMotor, sortMotor } = motorSlice.actions;
export const selectMotor = (state) => state.motor.data;
export default motorSlice.reducer;