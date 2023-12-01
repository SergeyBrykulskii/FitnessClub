import { configureStore } from '@reduxjs/toolkit';
import { membershipsReducer } from './slices/membership';


const store = configureStore({
    reducer: {
        memberships: membershipsReducer,
    },
});

export default store;