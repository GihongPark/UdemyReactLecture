import React from 'react';          // react : 컴포넌트 생성 및 관리
import ReactDOM from 'react-dom';   // react-dom : 컴포넌트를 DOM에 삽입

import SearchBar from './components/search_bar';    // 현재 파일에서 상대 경로 값으로 경로를 잡아준다

const API_KEY = 'AIzaSyALn7H03EFVZl4yrPi61hIHAMko9mcFrw4';

// 함수형 컴포넌트 생성
const App = () => {

    // JSX(JavaScriptXML) : React에서 HTML 요소를 간편하게 넣을수 있게 해주는 표현식
    return (
        <div>
            <SearchBar />
        </div>
    )
    // <SearchBar /> : import한 컨테이너
}

// DOM에 삽입
ReactDOM.render(<App />, document.querySelector('.container'));     // <App /> : App 클래스를 인스턴스로 만들기
// ReactDOM.render(element, container); : element : 컴포넌트 인스턴스, container : 컴포넌트를 담을 요소