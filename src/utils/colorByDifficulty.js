import { useTheme } from '@material-ui/core';

/*
 * @param difficult - string
 */
function colorByDifficulty(difficult) {
  const theme = useTheme();
  console.log(difficult)
  switch (difficult) {
    case 'easy':
      return theme.palette.status.red;
    case 'medium':
      return theme.palette.status.red;
    case 'hard':
      return theme.palette.status.red;
    default:
      return theme.palette.text.lightGrey;
  }
}

export default colorByDifficulty;
