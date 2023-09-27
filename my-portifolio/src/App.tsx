import Header from "./components/layout/Header";
import Main from "./components/pages/Main";

function App() {
  function goTo(section: string) {
    const destination = document.getElementById(section);

    if (destination) {
      const offset = window.innerWidth < 1024 ? 136 : 96;
      window.scrollTo({
        top: destination.offsetTop - offset,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <Header goTo={goTo} />
      <Main goTo={goTo} />
    </>
  );
}

export default App;
