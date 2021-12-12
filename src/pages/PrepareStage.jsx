import {
  Box,
  makeStyles,
  Typography,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import React, { useContext } from 'react';
import Footer from '../components/molecules/Footer';
import ContainerContext from '../templates/ContainerContext';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import Context from '../Context';
import Alert from '../components/atoms/Alert';

const PrepareStage = () => {
  const useStyles = makeStyles((theme) => ({
    title: {
      color: theme.palette.grey[700],
    },
  }));

  const classes = useStyles();
  const navigation = useNavigate();

  const [questionsByApi, setQuestionsByApi] = useContext(Context);
  const [openAlertError, setOpenAlertError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  return (
    <>
      <ContainerContext>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height="80vh">
          <Typography variant="h2" className={classes.title}>
            Are you ready to start?
          </Typography>
        </Box>
      </ContainerContext>
      <Footer
        onClickCancel={() => navigation('/')}
        onClickStart={() => {
          setLoading(true);
          api
            .get(`?amount=${localStorage.getItem('qtdQuestionsChoose')}`)
            .then((response) => {
              setQuestionsByApi(response.data.results);
              return navigation('/quiz');
            })
            .catch((err) => {
              console.error(err);
              setOpenAlertError(true);
              setLoading(false);
            });
        }}
      />
      {openAlertError && (
        <Alert
          open={openAlertError}
          message="Oops, there was an error fetching the questions :("
          severity="error"
          handleClose={() => navigation('/')}
          variant="filled"
        />
      )}
      {loading && (
        <Backdrop open={loading} invisible>
          <CircularProgress />
        </Backdrop>
      )}
    </>
  );
};

export default PrepareStage;
