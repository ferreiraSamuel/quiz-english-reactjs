import { Box, Button, Container, makeStyles } from '@material-ui/core';
import React from 'react';

const Footer = ({
  onClickCancel,
  onClickStart,
  labelCancel = 'Cancel',
  labelStart = 'Start',
}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: 0,
      left: 0,
    },
  }));

  const classes = useStyles();

  return (
    <Container disableGutters maxWidth={false} className={classes.root}>
      <Box
        bgcolor={'secondary.main'}
        py={8}
        px={12}
        display={'flex'}
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          borderRadius: '50px 50px 0px 0px',
          gap: '25px'
        }}
      >
        {onClickCancel && (
          <Button
            onClick={onClickCancel}
            type="submit"
            color="primary"
            variant="text"
            disableElevation
          >
            {labelCancel}
          </Button>
        )}
        <Button
          onClick={onClickStart}
          type="submit"
          color="primary"
          variant="contained"
          disableElevation
        >
          {labelStart}
        </Button>
      </Box>
    </Container>
  );
};

export default Footer;
