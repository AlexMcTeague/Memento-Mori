import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './css/index.css';
import Home from './pages/Home.tsx';
import List from './pages/List.tsx';
import Layout from './components/Layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="list" element={<List />} />
      </Route>

      {/* Example Routes
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
      </Route>
      */}
    </Routes>
  </BrowserRouter>
)
