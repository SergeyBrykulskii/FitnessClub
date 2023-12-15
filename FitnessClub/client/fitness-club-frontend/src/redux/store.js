import { configureStore } from '@reduxjs/toolkit';
import { membershipsReducer } from './slices/memberships';
import { authReducer } from './slices/auth';
import { newsReducer } from './slices/news';

const store = configureStore({
    reducer: {
        memberships: membershipsReducer,
        auth: authReducer,
        news: newsReducer,
    },
});

export default store;