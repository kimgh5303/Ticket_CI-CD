/* eslint-disable */
import { useState, useRef, useEffect } from "react";
import axios from "axios";

export const useLogin = (Path) => {
    const [ID, setID] = useState('');
    const [PW, setPW] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const inputRef = useRef(null);

    const config = {
        "/users/login": {
            idKey: "userid",
            pwKey: "userpw",
            redirectPath: () => '/home',
        }
    };

    const { idKey, pwKey, nameKey, redirectPath } = config[Path] || {};

    useEffect(() => {
        if (!ID && !PW) {
            inputRef.current.focus();
        }
        setIsButtonClicked(false);
    }, [isButtonClicked]);

    const handleInputId = (e) => {
        setID(e.target.value);
    }

    const handleInputPw = (e) => {
        setPW(e.target.value);
    }

    const onClickLogin = () => {
        setIsButtonClicked(true)
        if (!(ID && PW)) {
            alert('모든 정보를 입력해주세요.');
            return;
        }
        let data = {
            [idKey]: ID,
            [pwKey]: PW
        };

        axios.post(Path, JSON.stringify(data), {
            headers: {
                "Content-Type": `application/json`,
            }
        })
            .then(response => {
                const res = response.data
                if (res.success === true) {
                    alert(res.data[idKey] + "님 환영합니다.")
                    localStorage.setItem(idKey, res.data[idKey]); // id를 localStorage에 저장
                    document.location.href = redirectPath(localStorage.getItem(idKey));
                }
            })
            .catch((error) => {
                console.log(error)
                alert("회원정보가 일치하지 않습니다.");
            })
        setID('');
        setPW('');
    }
    const Enter = (e) => {
        if (e.key === 'Enter') {
            onClickLogin()
        }
    }
    return { ID, PW, inputRef, handleInputId, handleInputPw, onClickLogin, Enter }
}