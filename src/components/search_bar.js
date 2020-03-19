import React, { Component } from 'react';   // { Component } : syntactic sugar(문법적 설탕) : 객체의 속성 값만 받아올 때 사용

// 함수형 컴포넌트 : 함수에서 JSX형태로 리턴할때 사용, 스테이트 사용 X
// const SearchBar = () => {
//     return <input />
// }

// 클래스형 컴포넌트 : 스테이트를 조작할 때 사용 (데이터가 바뀌고 이벤트가 생길때)
class SearchBar extends Component {
    constructor(props) {    // constructor() : 클래스가 생성될 때( 새 인스턴스가 생성될 때)마다 자동적으로 가장 먼저 실행
                            // 따라서 데이터를 초기화할때 사용

        super(props)        // 부모객체(React.Component)의 메소드(constructor) 호출

        this.state = {      // state를 정의하거나 재초기화
            term : '' 
        };
    }

    render() {
        return (
            <div>
                <input
                    value = {this.state.term}
                    onChange={e => this.setState({ term: e.target.value })}
                />
            </div>
        )
        // value = {this.state.term} : 제어 컴포넌트 => 화면과 데이터를 일치시키기 위해 사용
        // this.setState() : constructor에서 초기화할 때를 제외하곤 setState() 메소드 이용
    }
}

export default SearchBar;