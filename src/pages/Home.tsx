import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { AddTweetForm } from '../components/AddTweetForm';
import Tweet from '../components/Tweet';
import { useHomeStyles } from './theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../store/ducks/tweets/actions';
import { selectIsTweetsLoading, selectTweetItems } from '../store/ducks/tweets/selectors';
import { Route } from 'react-router-dom';
import BackButton from '../components/BackButton';
import FullTweet from '../components/FullTweet';
import { fetchTags } from '../store/ducks/tags/actions';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Home = (): React.ReactElement => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <Paper className={classes.tweetsWrapper} variant="outlined">
      <Paper className={classes.tweetsHeader} variant="outlined">
        <Route path="/home/:any">
          <BackButton />
        </Route>

        <Route path={['/home', '/home/search']} exact>
          <Typography variant="h6">Твиты</Typography>
        </Route>

        <Route path="/home/tweet">
          <Typography variant="h6">Твитнуть</Typography>
        </Route>
      </Paper>

      <Route path={['/home', '/home/search']} exact>
        <Paper>
          <div className={classes.addForm}>
            <AddTweetForm classes={classes} />
          </div>
          <div className={classes.addFormBottomLine} />
        </Paper>
      </Route>

      <Route path="/home" exact>
        {isLoading ? (
          <div className={classes.tweetsCentred}>
            <CircularProgress />
          </div>
        ) : (
          tweets.map((tweet) => <Tweet key={tweet._id} classes={classes} {...tweet} />)
        )}
      </Route>

      <Route path="/home/tweet/:id" component={FullTweet} exact />
    </Paper>
  );
};

export default Home;
