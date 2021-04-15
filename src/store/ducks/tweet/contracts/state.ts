export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER'
}

export interface TweetInterface {
  _id: string
  text: string
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
}

export interface TweetStateInterface {
  items: TweetInterface[]
  loadingState: LoadingState
}
