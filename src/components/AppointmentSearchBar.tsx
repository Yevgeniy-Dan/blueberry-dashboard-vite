import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { onSearchText } from "../redux/appNavigation/slice";
import { DebouncedInput } from "./DebounceInput";
import search from "../assets/images/search.svg";

const AppointmentSearchBar = () => {
  const { searchText } = useAppSelector((state) => state.navbar);

  const dispatch = useAppDispatch();

  return (
    <form className="search-form" action="search.php">
      <DebouncedInput
        type="text"
        className="keyword form-control w-100 bg-muted"
        placeholder="Search customer by name or email"
        value={searchText}
        onChange={(value) => dispatch(onSearchText(String(value)))}
      />
      <button type="submit" className="btn">
        <img src={search} alt="" />
      </button>
    </form>
  );
};

export default AppointmentSearchBar;
