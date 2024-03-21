/* eslint-disable */
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import InputForm from './formComponent/inputForm';

export default function SignUp_User() {
    return (
            <SignUpForm />
    )
}

function SignUpForm() {
    const [inputName, setInputName] = useState('');
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleInputName = (e) => {
        setInputName(e.target.value);
    }
    const handleInputId = (e) => {
        setInputId(e.target.value);
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    }

    const onClickSignup = () => {
        if (!(inputName && inputId && inputPw)) {
            alert('모든 칸을 채워주세요.')
            return;
        }
        let data = {
            "userid": inputId,
            "userpw": inputPw,
            "username": inputName,
        }
        console.log(data)
        axios.post("/users/join", JSON.stringify(data), {
            headers: {
                "Content-Type": `application/json`,
            }
        })
            .then(response => {
                const res = response.data
                alert('회원가입이 완료되었습니다.')
                localStorage.setItem("userid", data["userid"]);
                localStorage.setItem("userpw", data["userpw"]);
                document.location.href = '/home'
            })
            .catch((error) => console.log(error));
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow">
                <div class="container px-5">
                    <a class="navbar-brand" href="/">
                        <span class="fw-bolder text-primary">Ticket mall</span>
                    </a>
                </div>
            </nav>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 pt-4 pb-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div class="card shadow border-3 rounded-4 mb-5">
                        <div class="card-body p-5">
                            <div class="mb-0">
                                <div class="d-flex align-items-center mb-4">
                                    <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                                    <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">회원가입</span></h3>
                                </div>
                                <InputForm
                                    ph="아이디를 입력하세요."
                                    text="아이디" type={"email"} value={inputId} handle={handleInputId} />
                                <InputForm
                                    ph="비밀번호를 입력하세요."
                                    text="비밀번호" type={"password"} value={inputPw} handle={handleInputPw} />
                                <InputForm
                                    ph="이름을 입력하세요."
                                    text="이름" type={"name"} value={inputName} handle={handleInputName} />
                            </div>
                            <button type="button" onClick={onClickSignup} className="relative z-10 inline-flex items-center rounded-3 bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 float-right mt-3">
                                가입하기
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}