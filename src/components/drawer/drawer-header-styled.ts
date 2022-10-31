import { CSSObject, styled } from '@mui/material/styles';

export const DrawerHeaderStyled = styled('div')(
  ({ theme }): CSSObject => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  })
);
