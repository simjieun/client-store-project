import { Provider } from './store';
import EditPerson from './EditPerson';
import ShowPerson from './ShowPerson';

const App = () => (
  <Provider>
    <EditPerson />
    <ShowPerson />
  </Provider>
);

export default App;
