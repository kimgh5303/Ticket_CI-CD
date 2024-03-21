import './index.css';
import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from 'react-modal'
import Loginuser from './loginuser';
import Maincom from './maincom';
import Mypage from './mypage';
import SignUp_User from './signUp_user';

Modal.setAppElement('#root');

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/home' element={<Maincom />} />
            <Route path='/home/MyPage' element={<Mypage />} />
            <Route path='/loginuser' element={<Loginuser />} />
            <Route path='/signup_user' element={<SignUp_User />} />
        </Routes>
    </BrowserRouter>
);
