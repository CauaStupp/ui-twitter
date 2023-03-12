import { FormEvent, useState } from 'react';
import Tweet from '../../components/Tweet/Tweet';
import Header from '../../components/Header/Header';
import Separator from '../../components/Separator/Separator';
import './Timeline.css';



const Timeline = () => {
  const [tweets, setTweets] = useState(['Daora em men']);
  const [newTweet, setNewTweet] = useState('');

  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([newTweet, ...tweets]);
    setNewTweet('');
  }


  return (
    <main className='timeline'>
      <Header title='Home' />
              
      <form className="new-tweet-form" onSubmit={createNewTweet}>
        <label htmlFor='tweet'>
          <img src="https://github.com/cauastupp.png" alt="User photo" />
          <textarea 
            id='tweet' 
            placeholder="What's happening?"
            onChange={({target}) => setNewTweet(target.value)}
            value={newTweet}
          />
        </label>
        <button>Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => (
        <Tweet key={tweet} content={tweet}/>
      ))}
    </main>
  )
}

export default Timeline