const NavigationMenu = (propos) => {
  return (
    <div class="navigation-menu">
      <div className="left-menu">
        <a href={propos.link1}>link</a>
        <a href={propos.link2}>link</a>
        <a href={propos.link3}>link</a>
      </div>
      <a href={propos.link4}>link</a>
    </div>
  );
};

export default NavigationMenu;
