import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { atom, Provider, useAtom } from 'jotai';

const countAtom = atom(0);

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);

  return <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>;
};
function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Jotai</h1>
      <div className="card">
        <Provider>
          <Counter />
        </Provider>
        <Provider>
          <Counter />
        </Provider>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
