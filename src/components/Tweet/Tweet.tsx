import { Link } from 'react-router-dom'
import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react';
import './Tweet.css';
import { useState } from 'react';

interface TweetProps {
  content: string
}

const Tweet = (props: TweetProps) => {

  const [likes, setLikes] = useState(0);

  function updateLikes() {
    setLikes(likes + 1)
  }

  return (
    <Link to='/status' className='tweet'>
      <img src="https://github.com/diego3g.png" alt="User photo" />
      <div className='tweet-content'>
        <div className="tweet-content-header">
          <strong>Diego Fernandes</strong>
          <span>@dieegosf</span>
        </div>

        <p>
          {props.content}
        </p>

        <div className="tweet-content-footer">
          <button>
            <ChatCircle />
            20
          </button>
          <button>
            <ArrowsClockwise />
            20
          </button>
          <button onClick={updateLikes}>
            <Heart />
            {likes}
          </button>
        </div>
      </div>
    </Link>
  )
}

export default Tweet