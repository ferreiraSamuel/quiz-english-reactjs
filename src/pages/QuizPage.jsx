import {
  Box,
  makeStyles,
  Typography,
  Button,
  alpha,
  useTheme,
} from '@material-ui/core';
import React, { useContext } from 'react';
import Footer from '../components/molecules/Footer';
import ContainerContext from '../templates/ContainerContext';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';
import getOnlyAnswers from '../utils/getOnlyAnswers';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const PrepareStage = () => {
  const useStyles = makeStyles((theme) => ({
    title: {
      color: theme.palette.grey[700],
    },
    category: {
      color: theme.palette.grey[700],
      marginBottom: 5,
    },
    optionText: {
      color: theme.palette.grey[700],
      padding: '15px 10px',
      margin: '15px 0px',
    },
    option: {
      borderRadius: '10px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  }));

  const classes = useStyles();
  const navigation = useNavigate();
  const theme = useTheme();

  const [questionsByApi, setQuestionsByApi] = useContext(Context);
  const [currentIndexQuestion, setCurrentIndexQuestion] = React.useState(0);
  const [indexAnswerChoose, setIndexAnswerChoose] = React.useState(null);
  const [answers, setAnswers] = React.useState([]);
  const [submittedAnswer, setSubmittedAnswer] = React.useState(false);
  const [labelButton, setLabelButton] = React.useState('Confirm');
  const [availableNewQuestion, setAvailableNewQuestion] = React.useState(false);

  React.useEffect(() => {
    if (!questionsByApi[0]) {
      return;
    }
    localStorage.setItem('qtdCorrectlyAnswers', 0);
    localStorage.setItem('qtdIncorrectlyAnswers', 0);
    setAnswers(getOnlyAnswers(questionsByApi[currentIndexQuestion]));
  }, []);

  React.useEffect(() => {
    if (!questionsByApi[0]) {
      return;
    }
    setAnswers(getOnlyAnswers(questionsByApi[currentIndexQuestion]));
  }, [currentIndexQuestion]);

  const checkAnswer = () => {
    if (availableNewQuestion) {
      if (!questionsByApi[currentIndexQuestion + 1]) {
        navigation('/result');
      }
      setSubmittedAnswer(false);
      setAnswers([]);
      setIndexAnswerChoose(null);
      setLabelButton('Confirm');
      setAvailableNewQuestion(false);
      setCurrentIndexQuestion((oldState) => oldState + 1);
      return;
    }

    setSubmittedAnswer(true);
    setAvailableNewQuestion(true);

    const optionSelected = answers[indexAnswerChoose];

    if (
      questionsByApi[currentIndexQuestion].correct_answer === optionSelected
    ) {
      localStorage.setItem(
        'qtdCorrectlyAnswers',
        Number(localStorage?.getItem('qtdCorrectlyAnswers')) + 1,
      );
    } else {
      localStorage.setItem(
        'qtdIncorrectlyAnswers',
        Number(localStorage?.getItem('qtdCorrectlyAnswers')) + 1,
      );
    }

    setLabelButton('Next');
  };

  if (!questionsByApi[0]) {
    return (
      <ContainerContext>
        <Box
          height="100vh"
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
          sx={{
            gap: 20,
          }}
        >
          <Typography variant="h2" className={classes.title}>
            Sorry, something went wrong :(
          </Typography>
          <Button
            onClick={() => navigation('/')}
            type="submit"
            color="primary"
            variant="contained"
            disableElevation
          >
            Back
          </Button>
        </Box>
      </ContainerContext>
    );
  }

  return (
    <>
      <ContainerContext>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          padding={1}
          right={0}
          top={20}
          bgcolor="primary.main"
          width={80}
        >
          <Typography variant="h5" className={classes.indicator}>
            {`${currentIndexQuestion + 1}/${localStorage.getItem(
              'qtdQuestionsChoose',
            )}`}
          </Typography>
        </Box>
        <Box mt="20vh">
          <Box>
            <Typography variant="h6" className={classes.category}>
              {questionsByApi[currentIndexQuestion]?.category}
            </Typography>
            <Typography variant="h2" color="primary">
              {questionsByApi[currentIndexQuestion]?.question.replace(
                /&quot;/g,
                '"',
              )}
            </Typography>
          </Box>
          <Box>
            {answers.map((item, index) => {
              return (
                <Box key={index} mt={2} display={'flex'} alignItems={'center'}>
                  <Box
                    width={'50%'}
                    className={classes.option}
                    onClick={() => {
                      if (submittedAnswer) {
                        return;
                      }
                      setIndexAnswerChoose(index);
                    }}
                    sx={
                      indexAnswerChoose === index && {
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      }
                    }
                  >
                    <Typography variant="h5" className={classes.optionText}>
                      {`${index + 1}) ${item}`}
                    </Typography>
                  </Box>
                  <Box ml={2}>
                    {submittedAnswer &&
                      questionsByApi[currentIndexQuestion].correct_answer ===
                        item && (
                        <Box color={'success.main'}>
                          <CheckCircleOutlineIcon
                            fontSize="large"
                            color="inherit"
                          />
                        </Box>
                      )}
                    {submittedAnswer &&
                      questionsByApi[currentIndexQuestion].correct_answer !==
                        item && (
                        <HighlightOffIcon fontSize="large" color="error" />
                      )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </ContainerContext>
      <Footer
        onClickStart={() => {
          checkAnswer();
        }}
        labelStart={labelButton}
      />
    </>
  );
};

export default PrepareStage;
