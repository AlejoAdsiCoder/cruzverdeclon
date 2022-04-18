import { Logo } from './header/logo/Logo';
import { Nav } from './header/nav/Nav';
import Form from './main/form/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <section className='main'>
        <Form />
      </section>
    </div>
  );
}

export default App;
