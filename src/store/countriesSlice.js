import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        fetchCountriesRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchCountriesSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchCountriesFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchCountriesRequest,
    fetchCountriesSuccess,
    fetchCountriesFailure
} = countriesSlice.actions;

export const fetchCountries = () => async (dispatch) => {
    dispatch(fetchCountriesRequest());
    try {
        const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');
        dispatch(fetchCountriesSuccess(response.data));
    } catch (error) {
        dispatch(fetchCountriesFailure(error.message));
    }
};

export default countriesSlice.reducer;