function percentHits() {
  const hits = localStorage.getItem('qtdCorrectlyAnswers');
  const questionsTotal = localStorage.getItem('qtdQuestionsChoose');
  const percent = (Number(hits) * 100) / questionsTotal;

  return String(percent).substring(0, 4);
}

export default percentHits;
