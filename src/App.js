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
        <ul className="head cv">
          <li className="title">
            <div className="year">
              2017 - 2019
            </div>
            Whois. 아주대학교 정보보호 소학회
          </li>
          <ul className="cv">
            <li>
              Study Repositody 사이트 개발 및 운영
            </li>
            <li>
              Thinking in Javascript 강의 운영
            </li>
          </ul>
          <li className="title">
            <div className="year">
              2017 - 2018
            </div>
            Best of the Best 6th, Kitri
          </li>
          <ul className="cv">
            <li>
              Top 30
            </li>
          </ul>
          <li className="title">
            <div className="year">
              2017 - now
            </div>
            Ajou University, Suwon, Korea.
          </li>
          <ul className="cv">
            <li>
              B.S. Student
            </li>
            <li>
              Major in Cyber Security
            </li>
            <li>
              FE Engineer of Paranajou.
            </li>
            <li>
              <div className="year">
                2018
              </div>
              코드게이트 해킹시연 공모전 1위
            </li>
            <li>
              <div className="year">
                2018
              </div>
              교내 창업 아이디어 경진대회 1위
            </li>
            <li>
              <div className="year">
                2019
              </div>
              공개SW 개발자 대회 은상
            </li>
            <li>
              <div className="year">
                2019
              </div>
              SW중심대학 융합SW 공모전 1위
            </li>
          </ul>
          <li className="title">
            <div className="year">
              2015
            </div>
            숙련기술연수원 IT infra administrator 멘토링
          </li>
          <li className="title">
            <div className="year">
              2015
            </div>
            KISA K-Shield Junior
          </li>
          <li className="title">
            <div className="year">
              2014 - 2017
            </div>
            선린인터넷고등학교
          </li>
          <ul className="cv">
            <li>
              Server admin of Unifox.
            </li>
            <li>
              <div className="year">
                2015
              </div>
              교내 포트폴리오 경진대회 1위
            </li>
            <li>
              <div className="year">
                2015
              </div>
              교내 네트워크 구축대회 2위
            </li>
          </ul>
        </ul>
        <h2>
          Experience
        </h2>
        <h2>
          Open Source
        </h2>
      </div>
    </div>
  );
}

export default App;
