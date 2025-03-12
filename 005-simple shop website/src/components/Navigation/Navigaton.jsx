import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingIcon from "../ShoppingIcon/ShoppingIcon";

export default function BottomNavigationBar({ cart }) {
  return (
    <BottomNavigation className="fixed bottom-0 left-0 w-full">
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <div className="relative">
        <span className="absolute top-0 right-0 bg-red-300 rounded-full">
          {cart?.length || 0}
        </span>
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      </div>
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
