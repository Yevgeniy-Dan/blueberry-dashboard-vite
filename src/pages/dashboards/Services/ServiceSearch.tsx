const ServiceSearch = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onSearch(value);
  };
  return (
    <div className="input-group">
      <input
        className="form-control"
        type="text"
        onChange={handleChange}
        placeholder="Search here"
      />
    </div>
  );
};

export default ServiceSearch;
