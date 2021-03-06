import { RootState } from '../../index';
import { AddFormState, LoadingState, TweetsStateInterface } from './contracts/state';
import { createSelector } from 'reselect';

export const selectTweets = (store: RootState): TweetsStateInterface => store.tweets;

export const selectLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState;

export const selectAddFormState = (state: RootState): AddFormState => selectTweets(state).addFormState;

export const selectIsTweetsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetItems = createSelector(selectTweets, (tweets) => tweets.items);
