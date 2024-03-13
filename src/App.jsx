import { ItemListContainer } from './componentes/ItemListContainer';
import { NavBar } from './componentes/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings="Aca va mi paguina." />;
    </>
  );
}

export default App;
