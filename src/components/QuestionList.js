import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  function onDelete(id) {
    setQuestions(questions.filter(question => {
      return question.id !== id;
    }))
  }

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(data => setQuestions(data))
  },[])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => {
        return <QuestionItem key={question.id} question={question} onDelete={onDelete} />
      })}</ul>
    </section>
  );
}

export default QuestionList;
