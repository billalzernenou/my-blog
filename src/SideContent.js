const SideContent = (propos) => {
  return (
    <div className="side-content">
      <h1>{propos.ItemTitle}</h1>
      <img src={propos.ItemPicture} alt="avatar" />
      <p>{propos.ItemDescription}</p>
    </div>
  );
};

export default SideContent;
