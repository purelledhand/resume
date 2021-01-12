import React from 'react';
import ContactCard from './components/ContactCard';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="header-bold">
        Optimize
        </div>
        <div>
        the world,
        </div>
        <div className="header-bold">
        Visualize
        </div>
        <div>
        the think.
        </div>
      </header>
      <div className="App">
        <div className="left">
          <ContactCard></ContactCard>
        </div>
        <div className="right">
          <div className="intro">
            사용자와 접점이 있는 서비스를 만드는 클라이언트 엔지니어링을 선호합니다.
            Virtual-DOM diffing 기반의 렌더링 최적화를 넘어선 FE 고도화 세대를 연구하고 싶습니다.
          </div>
          <h2>
            Curriculum Vitae
          </h2>
          <ul className="head cv">
            <li className="title">
              <div className="year">
                2020 - now
              </div>
              <a href="https://hyperconnect.com">hyperconnect</a>
            </li>
            <ul className="cv">
              <li>
                Azar Studio, Web Frontend Engineer
              </li>
              <li>
                <div className="year">
                  2020
                </div>
                <a href="https://hyperconnect.github.io/2020/12/14/typescript-build-optimization.html">CRA + TypeScript 환경 빌드 퍼포먼스 최적화</a>
              </li>
            </ul>
            <li className="title">
              <div className="year">
                2020 - 2020
              </div>
              <a href="https://squarelab.co">Square Lab</a>
            </li>
            <ul className="cv">
              <li>
                Client Engineer Intern
              </li>
              <li>
                
              </li>
            </ul>
            <li className="title">
              <div className="year">
                2017 - 2019
              </div>
              Whois. 아주대학교 정보보호 소학회
            </li>
            <ul className="cv">
              <li>
                Study Repository 사이트 개발 및 운영
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
                  2019
                </div>
                아주대학교 창업 아이디어 경진대회 1위
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
                2014
              </div>
              서울여대 정보보호 영재교육원 제1기 심화과정
            </li>
            <li className="title">
              <div className="year">
                2014 - 2017
              </div>
              선린인터넷고등학교
            </li>
            <ul className="cv">
              <li>
                Server admin of Unifox
              </li>
              <li>
                <div className="year">
                  2014
                </div>
                교내 네트워크 구축대회 3위
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
          
          <h3>Modern Web Development</h3>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              플레이윙즈 백오피스 대시보드 서비스
            </div>
            
              <div className="tag">
                Material-UI, React-Hooks, TypeScript, grpc, protobufjs
              </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div>2020.03 - 2020.06 스퀘어랩 사내 프로젝트</li>
            <li><div className="list second"></div>Implementing Codebase and UI</li>
            <li><div className="list second"></div>Multi-API handling strategy design</li>
            <li><div className="list second"></div>Client api model design based on rpc</li>
            <li><div className="list second"></div>Static typing with TypeScript</li>
          </ul>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              NLP 기반 리뷰 관리 자동화 서비스, UnifoCS
            </div>
            
              <div className="tag">
                UI/UX, ES6+, React, JEST
              </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div><a href="https://youtu.be/LNmBgMDj7V0">데모영상</a></li>
            <li><div className="list second"></div>2019 공개SW 개발자 대회 은상</li>
            <li><div className="list second"></div>2019 SW중심대학 융합SW 공모전 대상</li>
          </ul>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              헬스장 통합 회원관리 서비스, Fitmin
            </div>
            
              <div className="tag">
                UI/UX, Vue Native, React Native, ES6+, Vue
              </div>
          </div>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              React Hook Form 라이브러리 공식 페이지 번역
            </div>
            
              <div className="tag">
                Contributed PR : #46
              </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div>
            <a href="https://github.com/react-hook-form/react-hook-form-website">react-hook-form/react-hook-form-website</a></li>
          </ul>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              시각화 기반 커리어관리 SNS, Whoami/WeArtist
            </div>
            
              <div className="tag">
                UI/UX, React, React Native, Redux, ES6+
              </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div>Private Repo.</li>
            <li><div className="list second"></div>2019 아주대학교 창업 아이디어 경진대회 대상</li>
            <li><div className="list second"></div>2019 SW융합 창업 캠프 아이디어 마켓 2위</li>
          </ul>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              zziz/pwc : CVPR2019 컨퍼런스 사이트 개발
            </div>
            
              <div className="tag">
                UI/UX, ES6+
              </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div>
            <a href="https://github.com/zziz/pwc">zziz/pwc</a> : 14k github star</li>
            <li><div className="list second"></div><a href="http://paperake.com">paperake.com</a></li>
            <li><div className="list second"></div>gitlab repository maintainer</li>
          </ul>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              React.js 공식 문서 번역
            </div>
            
              <div className="tag">
                Contributed PR : #35
              </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div>
            <a href="https://github.com/reactjs/ko.reactjs.org">reactjs/ko.reactjs.org</a></li>
            <li><div className="list second"></div>
            <a href="https://ko.reactjs.org/docs/components-and-props.html">components and props</a>
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              Whois 스터디 레포지토리 사이트 개발
            </div>
            
              <div className="tag">
                React, Gatsby, ES6+, TypeScript
              </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div><a href="https://study.ajou-whois.org">study.ajou-whois.org</a></li>
          </ul>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              아주대학교 강의평가 서비스, 파란아주 강의평가
            </div>
            
              <div className="tag">
                UI/UX, Vue, Devops
              </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div>Private Repo. 2019년 7월 계약 만료와 함께 서비스 종료</li>
          </ul>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              아주대학교 커뮤니티, 파란아주
            </div>
            
              <div className="tag">
                UI/UX, Vue, Devops
              </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div>Private Repo. 2019년 7월 계약 만료와 함께 서비스 종료</li>
          </ul>
          <h3>Security</h3>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              스마트홈 제어시스템 취약점 다면진단
            </div>
            
              <div className="tag">
                Mobile, Network, Firmware
              </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div>
            2017 BoB 6th 프로젝트
            </li>
            <li><div className="list second"></div>
            데일리시큐 언론 노출  <a href="http://www.dailysecu.com/?mod=news&act=articleView&idxno=26932"> [긴급] 아파트 스마트홈에 심각한 취약점 발견…</a>
            </li>
            <li><div className="list second"></div>
            JTBC 언론 노출 <a href="http://news.jtbc.joins.com/article/article.aspx?news_id=NB11562517"> 똑똑한 줄 알았는데…맥없이 뚫린 '스마트 홈' 보안</a>
            </li>
            <li><div className="list second"></div>
            2018 코드게이트 해킹시연 공모전 최우수상 및 인기상
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              2018 코드엔진 컨퍼런스 발표
            </div>
            
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div>
            <a href="https://github.com/codeengn/codeengn-conference/blob/master/15/2018%20CodeEngn%20Conference%2015%2C%20%EC%8A%A4%EB%A7%88%ED%8A%B8%20%ED%99%88%20%EC%A0%9C%EC%96%B4%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EB%8B%A4%EB%A9%B4%EC%A7%84%EB%8B%A8%20%5B%EC%B5%9C%EC%86%8C%ED%98%9C%5D.pdf">스마트홈 제어시스템 취약점 다면진단</a>
            </li>
          </ul>
          <h3>Infra Engineering</h3>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              Kubernetes 공식 문서 번역
            </div>
            
            <div className="tag">
              Contributed PR : #16299
            </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div>
              <a href="https://github.com/kubernetes/website/">kubernetes/website</a> : 1.8k github star
            </li>
            <li><div className="list second"></div>
              DNS Pod Service
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              수원공업고등학교 IT인프라 기능경기대회 강사
            </div>
            <div className="tag">
              server infra, routing, switching, FW, UTM
            </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div>
            2017.12 ~ 2018.04
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              Configuring SW Raid with mdadm
            </div>
            
            <div className="tag">
              server infra
            </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div>
              <a href="https://blog.naver.com/wergreat10/220373421917">publishing link</a>
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              KISA 케이쉴드 주니어 이상적인 학사망 운용 프로젝트
            </div>
            
            <div className="tag">
              server infra, cisco2960, ASA5500
            </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div>
            Project Manager
            </li>
            <li><div className="list second"></div>
            실장비 이중화, 서비스 이중화, 망분리
            </li>
            <li><div className="list second"></div>
            모의해킹 후 보완
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              <div className="list"></div>
              실장비 활용 WAN 구축 프로젝트
            </div>
            
            <div className="tag">
              server infra, cisco2960, ASA5500, VoIP
            </div>
          </div>
          <ul className="ex-ul">
            <li><div className="list second"></div>
            Project Manager
            </li>
          </ul>
          <h2>
            Contact
          </h2>
          <div className="desc">
          Any contact is welcomed.
          </div>
          <div className="contacts">
            <a href="https://github.com/purelledhand"><div className="contact-point git">
              Github
            </div></a>
            <a href="https://www.facebook.com/purelledhand"><div className="contact-point fb">
              Facebook
            </div></a>
            <a href="https://open.kakao.com/o/sUOCsNPb"><div className="contact-point kakao">
              Kakaotalk
            </div></a>
          </div>
        </div>
      </div>
      <footer>
      <a href="https://github.com/purelledhand/resume/blob/master/LICENSE">AGPLv3 License</a>
      </footer>
    </>
  );
}

export default App;
