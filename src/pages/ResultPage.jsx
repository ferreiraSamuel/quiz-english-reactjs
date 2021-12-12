import {
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Footer from '../components/molecules/Footer';
import ContainerContext from '../templates/ContainerContext';
import { useNavigate } from 'react-router-dom';
import percentHits from '../utils/percentHits';
import messageByPercentHit from '../utils/messageByPercentHit';

const PrepareStage = () => {
  const useStyles = makeStyles((theme) => ({
    title: {
      color: theme.palette.grey[700],
    },
    titlePoints: {
      color: theme.palette.primary.main,
    },
  }));

  const classes = useStyles();
  const navigation = useNavigate();

  return (
    <>
      <ContainerContext>
        <Box
          mt={'10vh'}
          display="flex"
          flexDirection="column"
          alignItems={'center'}
          height="90vh"
        >
          <Typography variant="h3" className={classes.title}>
            You got
            <Box component={'span'} className={classes.titlePoints}>
              {` ${localStorage.getItem('qtdCorrectlyAnswers')} `}
            </Box>
            of
            <Box component={'span'} className={classes.titlePoints}>
              {` ${localStorage.getItem('qtdQuestionsChoose')} `}
            </Box>
            questions right
          </Typography>
          <Box
            width={'200px'}
            height={'200px'}
            bgcolor={'secondary.main'}
            borderRadius={100}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            mt={'10vh'}
            mb={'10vh'}
          >
            <Typography variant="h1" className={classes.titlePoints}>
              {percentHits()}%
            </Typography>
          </Box>
          <Typography variant="h3" className={classes.title}>
          {messageByPercentHit(percentHits())}
          </Typography>
        </Box>
      </ContainerContext>
      <Footer
        onClickCancel={() => navigation('/')}
        labelCancel="Revise/Questions"
        onClickStart={() => navigation('/')}
        labelStart="Finish"
      />      
    </>
  );
};

export default PrepareStage;
