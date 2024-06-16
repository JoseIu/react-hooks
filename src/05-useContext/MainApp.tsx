import { Navigate, Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import { UserProvider } from './context/UserProvider';
import { AboutPage, HomePage, LoginPage } from './pages';

const MainApp = () => {
  return (
    <UserProvider>
      <main className="wrapper">
        <h1>Main APP</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </UserProvider>
  );
};

export default MainApp;
