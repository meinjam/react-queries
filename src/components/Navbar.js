const Navbar = ({ setPage }) => {
  const planet = () => {
    setPage('planet');
  };
  const people = () => {
    setPage('people');
  };

  return (
    <nav>
      <button onClick={planet}>Planets</button>
      <button onClick={people}>People</button>
    </nav>
  );
};

export default Navbar;
