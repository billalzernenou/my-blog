const Item = (propos) => {
  return (
    <div class="item">
      <h1>{propos.ItemTitle}</h1>
      <h2>{propos.ItemSubTitle}</h2>
      <img src={propos.ItemPicture} alt="javascript" />
      <p>{propos.ItemDescription}</p>
    </div>
  );
};

export default Item;
