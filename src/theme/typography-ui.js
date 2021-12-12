import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

export const typography = {
  h1: {
    fontSize: '2.875rem' /* 46px */,
    fontWeight: 700,
    margin: 0,
    [breakpoints.down('sm')]: {
      fontSize: '2.4rem',
    },
    [breakpoints.down('xs')]: {
      fontSize: '1.8rem',
    },
  },
  h2: {
    fontSize: '2rem' /* 32px */,
    fontWeight: 700,
    margin: 0,
    [breakpoints.down('sm')]: {
      fontSize: '1.75rem',
    },
    [breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  h3: {
    fontSize: '1.75rem' /* 28px */,
    fontWeight: 700,
    margin: 0,
    [breakpoints.down('sm')]: {
      fontSize: '1.625rem',
    },
    [breakpoints.down('xs')]: {
      fontSize: '1.25rem',
    },
  },
  h5: {
    fontSize: '1.25rem' /* 20px */,
    fontWeight: 700,
    margin: 0,
    [breakpoints.down('sm')]: {
      fontSize: '1.125rem',
    },
    [breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  h6: {
    fontSize: '1rem' /* 16px */,
    fontWeight: 700,
    margin: 0,
    [breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
    [breakpoints.down('xs')]: {
      fontSize: '0.8125rem',
    },
  },
  body1: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '1.125rem' /* 18px */,
    marginTop: 20,
    marginBottom: 20,
    [breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  buttonSm: {
    fontSize: '0.875rem' /* 14px */,
    fontWeight: 700,
    [breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
    [breakpoints.down('xs')]: {
      fontSize: '0.6875rem',
    },
  },
  inputMd: {
    fontSize: '1rem' /* 16px */,
    fontWeight: 400,
    [breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
    [breakpoints.down('xs')]: {
      fontSize: '0.9375rem',
    },
  },
};

export default typography;
