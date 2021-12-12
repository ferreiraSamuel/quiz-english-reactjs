import { alpha } from '@material-ui/core/styles';
import { palette, typography } from './index';

export const overrides = {
  MuiCssBaseline: {
    '@global': {
      body: {
        backgroundColor: palette.grey[850],
      },
    },
  },

  MuiButton: {
    root: {
      borderRadius: '10px',
      padding: '18px 28px',
      textTransform: 'normal',
      minWidth: 'unset',
      ...typography.buttonSm,
    },
    contained: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
    },
  },

  MuiInputBase: {
    root: {
      background: palette.secondary.main,
      color: palette.common.white,
      width: '100%',
      borderRadius: '10px',
      padding: '18px 28px',
      marginTop: '8px',
      marginBottom: '8px',
      ...typography.inputMd,
      '&:before': {
        display: 'none',
      },
      '&:after': {
        display: 'none',
      },
    },
  },

  MuiBackdrop: {
    root: {
      backgroundColor: alpha(palette.common.black, 0.3),
    },
  },
};

export default overrides;
