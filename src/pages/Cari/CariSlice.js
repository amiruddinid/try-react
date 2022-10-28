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
        data: [],
        initData: [],
        status: 'idle',
    },
    reducers:{
        filterMotor: (state, action) => {
            const filters = action.payload
            state.data = state.initData.filter(el => {
                return Object.keys(filters).every(filter => {
                    if(filter === 'availableAt') {
                        const d1 = new Date(filters[filter]);
                        const d2 = new Date(el[filter]);
                        return d1.getTime() >= d2.getTime() 
                    }
                    return filters[filter] === el[filter]
                });
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
export const selectInitMotor = (state) => state.motor.initData;
export default motorSlice.reducer;