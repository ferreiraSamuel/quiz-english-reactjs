import {
  Box,
  Button,
  Input,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import ContainerContext from '../templates/ContainerContext';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const useStyles = makeStyles((theme) => ({
    title: {
      color: theme.palette.grey[700],
      marginBottom: '5vh',
    },
    form: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      gap: '5px', 
    },
    buttonIcon: {
      padding: '15px',
    },
    errorText: {
      color: theme.palette.error.main,
      margin: '0px',
    },
  }));

  const classes = useStyles();
  const navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      qtdQuestions: localStorage?.getItem('qtdQuestionsChoose') || 1,
    },
    validate: (values) => {
      const errors = {};
      if (values.qtdQuestions > 50 || values.qtdQuestions < 1) {
        errors.qtdQuestions = 'The question limit is 50.';
      }
      if ( values.qtdQuestions < 1) {
        errors.qtdQuestions = 'The question limit is 1.';
      }
      return errors;
    },
    onSubmit: (values) => {
      localStorage.setItem('qtdQuestionsChoose', values.qtdQuestions);
      navigation('/prepare');
    },
  });

  return (
    <ContainerContext>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={'center'}
        alignItems={'center'}
        height="100vh"
      >
        <Box>
          <Typography variant="h1" className={classes.title}>
            How many questions do you want to answer?
          </Typography>
        </Box>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Input
            id="qtdQuestions"
            name="qtdQuestions"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.qtdQuestions}
            error={formik.errors.qtdQuestions}
          />
          {formik.errors.qtdQuestions && (
            <Box>
              <Typography className={classes.errorText}>
                {formik.errors.qtdQuestions}
              </Typography>
            </Box>
          )}

          <Box display={'flex'} justifyContent="flex-end" sx={{ gap: '20px', marginTop: '2vh', }}>
            <Button variant="text" color="primary">History</Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={!!formik.errors.qtdQuestions}
            >
              Continue
            </Button>
          </Box>
        </form>
      </Box>
    </ContainerContext>
  );
};

export default Dashboard;
