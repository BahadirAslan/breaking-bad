import Mainpage from './component/layout/mainpage';
import CharacterPage from './component/layout/character';

function App(props) {
  console.log("window.location", window.location);
  console.log("window.location.pathname", window.location.pathname);
  const showMainPage = () => {
    if (window.location.pathname === "/") {
      return <Mainpage />
    }
  }
  
  const showCharacterPage = () => {
    if (window.location.pathname) {
      return <CharacterPage characterId={window.location.pathname} />
    }
  }
  return (
      <div>
        {showMainPage()}
        {showCharacterPage()}
      </div>
  );
}

export default App;
