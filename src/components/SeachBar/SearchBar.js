import "./searchbar.css";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({title, style}) => {
  return (
    <div className="searchContainer"     style={style} component="form">
      <IconButton type="submit"  aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase  placeholder="Search" />
    </div>
  );
};

export default SearchBar;