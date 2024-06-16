import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainApp from './05-useContext/MainApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <MainApp />

    {/* </React.StrictMode> */}
  </BrowserRouter>
);
