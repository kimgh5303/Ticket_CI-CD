import React, { useEffect, useState } from "react";
import Nav from "./navuser";
import axios from "axios";

export default function Maincom() {
    if (localStorage.getItem('userid') === null){
        alert('로그인이 필요합니다.');
        window.location.href="/";
    }
    const [imageList, setImageList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const eventList = axios.get("/events");

        axios
            .all([eventList])
            .then(axios.spread((eventListResponse) => {
                const eventListData = eventListResponse.data.data;

                if (Array.isArray(eventListData)) {
                    const updatedImageList = eventListData.map((data) => {
                        const imageInfo = {
                            id: data[0],
                            name: data[1],
                            stime: data[2],
                            etime: data[3],
                            // imageName: data[4],
                        };
                        return imageInfo;
                    });

                    setImageList(updatedImageList);
                }
            }))
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const ReservationClick = (id) =>{
        // window.confirm을 사용하여 사용자에게 확인을 요청
        const isConfirmed = window.confirm("예매하시겠습니까?");
    
        if (isConfirmed) {  

            const rData = {
                "eventid" : id,
                "usid" : localStorage.getItem('userid')
            };
            console.log(rData)

            axios.post("/tickets", JSON.stringify(rData), {
                headers: {
                    "Content-Type": `application/json`,
                }
            })
                .then(response => {
                    const res = response.data
                    if (res.success === true) {
                        alert("예매가 완료되었습니다.")
                    }
                })
                .catch((error) => {
                    console.log(error)
                    alert("예매가 완료되지 않았습니다.");
                })
            window.location.href = "/home";
        }
    };

    const handleSearch = () => {
        const searchTermLower = searchTerm.toLowerCase(); // 검색어를 소문자로 변환하여 저장
        if (!searchTermLower) { // 검색어가 없는 경우
            return imageList; // 전체 이미지 목록 반환
        } else {
            return imageList.filter((product) => {
                // 제품 이름이 소문자로 변환된 검색어를 포함하는지 확인
                const includesName = (product.name || "").toLowerCase().includes(searchTermLower);
                return includesName; // 결과 반환
            });
        }
    };

    return (
        <div>
            <Nav />
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 pt-4 pb-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">리스트</h2>
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {handleSearch().map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="group relative">
                                    <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={"/" + product.imageName} // public 폴더의 경로를 직접 사용합니다.
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            alt={product.name}
                                        />
                                    </div>
                                    <div className="mt-4 flex flex-col items-center">
                                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                            <button className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" onClick={() => ReservationClick(product.id)}>예매하기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};