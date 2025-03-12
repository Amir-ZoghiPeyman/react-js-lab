import { styled } from "@mui/material/styles";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

export default function ShoppingIcon({ onClick }) {
  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;
  return (
    <>
      <IconButton onClick={onClick}>
        <ShoppingCartIcon fontSize="small" />
        <CartBadge badgeContent={2} color="primary" overlap="circular" />
      </IconButton>
    </>
  );
}
