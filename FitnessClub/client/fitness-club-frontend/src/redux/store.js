import { configureStore } from '@reduxjs/toolkit';
import { membershipsReducer } from './slices/membership';
import { authReducer } from './slices/auth';

const store = configureStore({
    reducer: {
        memberships: membershipsReducer,
        auth: authReducer,
    },
});

export default store;