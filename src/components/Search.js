const Search = () => {
  return (
    <div className=" m-4 p-4">
      <input
        className="border border-solid border-black rounded-md"
        type="text"
        placeholder="Search"
        value={SearchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      <button
        className="px-4 py-2 bg-green-100 rounded-md m-4 "
        onClick={() => {
          const filterdata = filter(SearchText, allrestaurants);
          console.log(filterdata);
          setfilteredrestaurant(filterdata);
        }}
      >
        Search
      </button>
    </div>
  );
};
