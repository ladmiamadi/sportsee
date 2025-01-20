import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Error from './pages/Error/Error.jsx';
import Home from './pages/Home/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from './components/Header/Header.jsx';
import './assets/style/_global.scss';
import VerticalMenu from './components/VerticalMenu/VerticalMenu.jsx';
import Layout from './components/Layout/Layout.jsx';

createRoot(document.getElementById('root')).render(
     <StrictMode>
          <BrowserRouter>
               <Header />
               <div className="container">
                    <VerticalMenu />
                    <Layout>
                         <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="*" element={<Error />} />
                         </Routes>
                    </Layout>
               </div>
          </BrowserRouter>
     </StrictMode>,
);
