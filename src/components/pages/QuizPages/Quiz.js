import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Answer from "./Answer";
import MiniPlayer from "./MiniPlayer";
import ProgressBar from "./ProgressBar";
import _ from "lodash";
import { useAuth } from "../../../Contexts/AuthContext";
import useQuestions from "../../../Hooks/useQuestions";

//Reducer hook
const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionId].options[action.optionIndex].checked =
        action.value;

      return questions;

    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { loading, error, questions } = useQuestions(id);

  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionId: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  //to go to the next question
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestionpage) => prevQuestionpage + 1);
    }
  }
  //to go to the previous question
  function previousQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevQuestionpage) => prevQuestionpage - 1);
    }
  }
  //percentage calculaton of qustion done

  const progress =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  //submit quiz

  async function submit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`);
  }

  return (
    <>
      {loading && <div>Loading..........</div>}
      {error && <div>There is an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answer
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={previousQuestion}
            progress={progress}
            submit={submit}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
}
