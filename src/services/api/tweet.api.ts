import axios from '../../core/axios';
import { TweetsInterface, TweetsStateInterface } from '../../store/ducks/tweets/contracts/state';

interface Response<T> {
  status: string
  data: T
}

class TweetsApi {
  async fetchTweets(): Promise<TweetsStateInterface['items']> {
    const { data } = await axios.get<Response<TweetsStateInterface['items']>>('/tweets');
    return data.data;
  }

  async fetchTweetData(id: string): Promise<TweetsInterface> {
    const { data } = await axios.get<Response<TweetsInterface>>(`/tweets/${id}`);
    return data.data;
  }

  async addTweet(text: string): Promise<TweetsInterface> {
    const { data } = await axios.post<Response<TweetsInterface>>('/tweets', { text });
    return data.data;
  }
}

export default new TweetsApi();
