import { FormEvent, useState } from 'react';
import Tweet from '../../components/Tweet/Tweet';
import Header from '../../components/Header/Header';
import Separator from '../../components/Separator/Separator';
import { PaperPlaneRight } from 'phosphor-react';
import './Status.css';


const Status = () => {
  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState(['Não desista!']);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();
    setAnswers([newAnswer, ...answers]);
    setNewAnswer('');
  }

  return (
    <main className='status'>
      <Header title='Tweet' />

      <Tweet content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eveniet deserunt libero. Ut inventore eos voluptatum molestiae nemo, quia doloremque. Facilis modi quia eaque, exercitationem cum dolorum officia facere. Labore.'/>

      <Separator />
      
      <form className="answer-tweet-form" onSubmit={createNewAnswer}>
        <label htmlFor='tweet'>
          <img src="https://github.com/cauastupp.png" alt="User photo" />
          <textarea 
            id='tweet' 
            placeholder="Tweet your answer"
            onChange={({target}) => setNewAnswer(target.value)}
            value={newAnswer}
          />
        </label>
        <button>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      

      {answers.map((answer, index) => (
        <Tweet key={index} content={answer}/>
      ))}
    </main>
  )
}

export default Status