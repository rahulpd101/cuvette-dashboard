import { AppBar, Paper, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
export const FullBodyContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const StyledAppBar = styled(AppBar)`
  background: #ffffff;
`;

export const StyledPaper = styled(Paper)`
  display: flex;
`;

export const PaddedContainer = styled("div")`
  padding: 1rem;
`;

export const StyledToolbar = styled(Toolbar)`
  border-bottom: 0.01px solid #ebf0f5;
`;
