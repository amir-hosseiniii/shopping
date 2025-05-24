import { Suspense, useEffect, useState } from 'react';
import './App.css';
import StartPage from './pages/startlanding/StartPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Use from './pages/use/Use';
import Loading from './pages/loadingpage/Loading';
import Modiriat from './pages/modiriat/Modiriat';
import AfzoodanKharid from './pages/afzoodan/AfzoodanKharid';

function App() {


  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/enter' element={<StartPage /> } />
        <Route path='/use' element={<Use />} />
        <Route path='/' element={<Use />} />
        <Route path='/modiriat' element={<Modiriat/>} />
        <Route path='/afzoodan' element={<AfzoodanKharid />} />
      </Routes>
    </Suspense>
  );
}

export default App;
