import { styled, ListItemButton } from '@mui/material';
import { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton';
import { CSSObject } from '@mui/material/styles';

interface ListItemButtonProps extends MuiListItemButtonProps {
  height?: number;
  paddingleft?: number | string;
  color?: string;
}

const ListItemButtonStyled = styled(ListItemButton)<ListItemButtonProps>(
  ({ theme, height, paddingleft, color }): CSSObject => ({
    padding: 0,
    paddingLeft: paddingleft,
    height: height,
    color: color,

    ':hover': {
      backgroundColor: 'transparent'
    },

    '& .MuiTypography-root': {
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '14px',
      lineHeight: '16px'
    }
  })
);

export default ListItemButtonStyled;
