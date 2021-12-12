function getOnlyAnswers(question) {
  const allAnswers = [];
  const answersIncorrect = question.incorrect_answers;
  const answersCorrect = question.correct_answer;
  allAnswers.push(...answersIncorrect);
  allAnswers.push(answersCorrect);
  return allAnswers;
}

export default getOnlyAnswers;
