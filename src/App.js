import "./App.css";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <div class="container">
      <Header title="My Blog" baseLine="An awesome baseline" />
      <NavigationMenu
        link1="https://github.com/billalzernenou"
        link2="https://github.com/billalzernenou"
        link3="https://github.com/billalzernenou"
        link4="https://github.com/billalzernenou"
      />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
