import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


// ## from redux.js.org/recipes/usage-with-tyepscript:
// ## https://redux.js.org/recipes/usage-with-typescript

/*
```js

import { configureStore } from '@reduxjs/toolkit'
// ...

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer
  }
})

// Infer the \`RootState\` and \`AppDispatch\` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

```
*/

