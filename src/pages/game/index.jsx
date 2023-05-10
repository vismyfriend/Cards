import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import deck from '../../images/cards.png'
import { questions, answers } from '../../utils/ques-answ'
import Card from './components/Card'

let shuffleAnswers = null
let shuffleQuestions = null
let answerNumber = 0
let questionNumber = 0

function shuffleDecks(name) {
  shuffleQuestions = questions[name].sort(function () {
    return Math.random() - 0.5;
  });
  shuffleAnswers = answers[name].sort(function () {
    return Math.random() - 0.5;
  });
}

function Game() {
  const [question, setQuestion] = useState(null)
  const [answer, setAnswer] = useState(null)
  const { name } = useParams();
  useEffect(() => {
    shuffleDecks(name)
  }, [])
  function getAnswerNumber() {
    setAnswer(null)
    setTimeout(function () { setAnswer(shuffleAnswers[answerNumber]) }, 0);
    answerNumber++
  }
  function getQuestionNumber() {
    setQuestion(null)
    setTimeout(function () { setQuestion(shuffleQuestions[questionNumber]) }, 0);
    questionNumber++
  }
  function handelShuffle() {
    shuffleDecks(name)
    setAnswer(null)
    setQuestion(null)
    answerNumber = 0
    questionNumber = 0
  }

  return (
    <>
      <Card value={question}
        classes={`card card_question ${question && 'open'}`} />
      <img src={deck} alt="deck of cards" className="deck" />
      <div className="buttons-container">
        <button onClick={getAnswerNumber}
          disabled={questionNumber > shuffleQuestions?.length - 1}
          className={`ask ${answerNumber > shuffleAnswers?.length - 1 && 'finish'}`} >
          deck 1
        </button>
        <button onClick={handelShuffle} className="check">shuffle</button>
        <button onClick={getQuestionNumber}
          disabled={questionNumber > shuffleQuestions?.length - 1}
          className={`next ${questionNumber > shuffleQuestions?.length - 1 && 'finish'}`} >
          deck 2
        </button>
      </div>
      <img src={deck} alt="deck of cards" className="deck" />
      <Card value={answer}
        classes={`card card_answer ${answer && 'open'}`} />
    </>
  );
}

export default Game;