import produce, { Draft } from 'immer';
import { LoadingState, TweetStateInterface } from './contracts/state';
import { TweetAction, TweetsActionType } from './actions';

const initialTweetState: TweetStateInterface = {
  items: [],
  loadingState: LoadingState.NEVER
};

export const tweet = produce((draft: Draft<TweetStateInterface>, action: TweetAction) => {
  if (action.type === TweetsActionType.SET_TWEETS) {
    draft.items = action.payload;
  }
}, initialTweetState);