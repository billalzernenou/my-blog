import Item from "./Item";
import SideContent from "./SideContent";
const Content = (propos) => {
  return (
    <div className="content">
      <div className="items">
        <Item
          ItemTitle="TITLE HEADING"
          ItemSubTitle="Title description"
          ItemPicture="https://images.ctfassets.net/yr4qj72ki4ky/legacyBlogPost77Thumbnail/cd4783ad7b35efc4367166a570a9952e/bigstock-Real-Java-Script-Code-Developi-217215433.jpg"
          ItemDescription="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et 
      erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam 
      aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat,
       quis porttitor tortor. In a congue neque.

      "
        />
        <Item
          ItemTitle="TITLE HEADING"
          ItemSubTitle="Title description"
          ItemPicture="https://i.ytimg.com/vi/BFHMsD1dsto/maxresdefault.jpg"
          ItemDescription="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et 
      erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam 
      aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat,
       quis porttitor tortor. In a congue neque.

      "
        />
      </div>
      <div className="side-contents">
        <SideContent
          ItemTitle="About me"
          ItemPicture="https://avatars.githubusercontent.com/u/38529753?s=400&u=d14417617aa958beb40aa229740e9ed075dd5e21&v=4"
          ItemDescription="Cras interdum pharetra felis eu faucibus."
        />
      </div>
    </div>
  );
};

export default Content;
