// react
import { useState } from "react";

// components
import Header from "./components/layout/Header";
import Main from "./components/pages/Main";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(
    window.innerWidth > 1024
  );

  const [language, setLanguage] = useState<string>("PT");

  function displayMenu() {
    setShowMobileMenu(!showMobileMenu);
  }

  function hideMenu() {
    if (window.innerWidth < 1024) {
      setShowMobileMenu(false);
    }
  }

  function goTo(section: string) {
    const destination = document.getElementById(section);

    if (destination) {
      const offset = window.innerWidth < 1024 ? 144 : 104;
      window.scrollTo({
        top: destination.offsetTop - offset,
        behavior: "smooth",
      });
    }
  }

  window.addEventListener("resize", () =>
    setShowMobileMenu(window.innerWidth > 1024)
  );

  return (
    <>
      <Header
        goTo={goTo}
        showMobileMenu={showMobileMenu}
        displayMenu={displayMenu}
        language={language}
      />
      <Main goTo={goTo} hideMenu={hideMenu} language={language} setLanguage={setLanguage} />
    </>
  );
}

export default App;
