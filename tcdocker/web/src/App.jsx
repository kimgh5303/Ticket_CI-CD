import './App.css';
import { useEffect } from 'react';
import {GifComponent} from './gifcomponent';
import pandaGif from './imgfile/panda.gif';
import rabbitGif from './imgfile/rabbit.gif';

export default function App() {

    useEffect(() => {
        localStorage.clear();
    })

    return (
        <div id="App">
            <div className='overflow-y-hidden'>
                <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow">
                    <div className="container px-5">
                        <a className="navbar-brand" href="">
                            <span className="fw-bolder text-primary">Ticket mall</span>
                        </a>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item">
                                <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="/loginuser">로그인</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <header className="py-5">
                    <div className="container px-5 pb-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-xxl-5">
                                <div className="text-center text-xxl-start ml-5">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                                        <div className="text-uppercase">편리하게 예약하고 즐기자!</div>
                                    </div>
                                    <h1 className="display-3 fw-bolder mb-5">
                                        <span className="text-gradient d-inline">모두의 티켓 <br />여기서 시작</span>
                                    </h1>
                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 w-auto">
                                <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                    <div className="profile  flex justify-center items-center">
                                        <GifComponent gif={pandaGif} />
                                    </div>
                                    <div className="profile  flex justify-center items-center">
                                        <GifComponent gif={rabbitGif} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}