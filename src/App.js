import React from 'react';
import ContactCard from './components/ContactCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left">
        <ContactCard></ContactCard>
      </div>
      <div className="right">
        <div className="intro">
          영감을 주는 인터페이스와 인터랙션을 창조하고자 합니다.
          16살 때 포토샵과 HTML으로 개인 홈페이지를 만든 것을 시작으로 웹퍼블리싱과 디자인을 시작하게 되었습니다.
          고등학생이 되어 Vanilla JS를 사용하며 본격적으로 웹 프론트엔드를 시작하였으며, 
          현재는 고도화된 FE 생태계와 JS 런타임 엔진, Devops를 공부하고 있습니다.
        </div>
        <h2>
          Curriculum Vitae
        </h2>
      </div>
    </div>
  );
}

export default App;
