const Header = (propos) => {
  return (
    <div className="header">
      <div className="header-title">{propos.title} </div>
      <div className="header-base-line">{propos.baseLine}</div>
    </div>
  );
};

export default Header;
