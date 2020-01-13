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
          영감을 주는 인터페이스와 인터랙션을 창조하고자 하는 비전과 Virtual-DOM diffing 기반의 렌더링 최적화를 넘어선 FE 고도화 세대를 이루고자 하는 비전을 가지고 있습니다.
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
          <div className="list"></div>
            NLP 기반 리뷰 관리 자동화 서비스, UnifoCS
            <div className="tag">
              UI/UX, ES6+, React, React-Router, JEST
            </div>
        </div>
        <ul className="ex-ul">
          <li><div className="list second"></div><a href="https://youtu.be/LNmBgMDj7V0">데모영상</a></li>
          <li><div className="list second"></div>2019 공개SW 개발자 대회 은상</li>
          <li><div className="list second"></div>2019 SW중심대학 융합SW 공모전 대상</li>
        </ul>
        <div className="ex title">
          <div className="list"></div>
            헬스장 통합 회원관리 서비스, Fitmin
            <div className="tag">
              UI/UX, Vue Native, React Native, ES6+, Vue
            </div>
        </div>
        <div className="ex title">
          <div className="list"></div>
            시각화 기반 커리어관리 SNS, Whoami/WeArtist
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
          <div className="list"></div>
            zziz/pwc : CVPR2019 컨퍼런스 사이트 개발
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
          <div className="list"></div>
            Whois 스터디 레포지토리 사이트 개발
            <div className="tag">
              React, Gatsby, ES6+, TypeScript
            </div>
        </div>
        <div className="ex title">
          <div className="list"></div>
            아주대학교 강의평가 서비스, 파란아주 강의평가
            <div className="tag">
              UI/UX, Vue, Devops
            </div>
        </div>
        <ul className="ex-ul">
          <li><div className="list second"></div>Private Repo. 2019년 7월 계약 만료와 함께 서비스 종료</li>
        </ul>
        <div className="ex title">
          <div className="list"></div>
            아주대학교 커뮤니티, 파란아주
            <div className="tag">
              UI/UX, Vue, Devops
            </div>
        </div>
        <ul className="ex-ul">
          <li><div className="list second"></div>Private Repo. 2019년 7월 계약 만료와 함께 서비스 종료</li>
        </ul>
        <h3>Security</h3>
        <div className="ex title">
          <div className="list"></div>
            스마트홈 제어시스템 취약점 다면진단
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
          <div className="list"></div>
            2018 코드엔진 컨퍼런스 발표
        </div>
        <ul className="ex-ul">
          <li><div className="list second"></div>
          <a href="https://github.com/codeengn/codeengn-conference/blob/master/15/2018%20CodeEngn%20Conference%2015%2C%20%EC%8A%A4%EB%A7%88%ED%8A%B8%20%ED%99%88%20%EC%A0%9C%EC%96%B4%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EB%8B%A4%EB%A9%B4%EC%A7%84%EB%8B%A8%20%5B%EC%B5%9C%EC%86%8C%ED%98%9C%5D.pdf">스마트홈 제어시스템 취약점 다면진단</a>
          </li>
        </ul>
        <h3>System Programming</h3>
        <div className="ex title">
          <div className="list"></div>
          <a href="https://bitbucket.org/purelledhand/mybuddy">purelledhand/mybuddy</a>
          <div className="tag">
            C, automated test code
          </div>
        </div>
        <ul className="ex-ul">
          <li><div className="list second"></div>
          C implementation of kernel buddy memory allocator.
          </li>
        </ul>
        <div className="ex title">
          <div className="list"></div>
          <a href="https://bitbucket.org/purelledhand/mylock">purelledhand/mylock</a>
          <div className="tag">
            C, automated test code
          </div>
        </div>
        <ul className="ex-ul">
          <li><div className="list second"></div>
          C implementation of spinlock, mutex, semaphore.
          </li>
        </ul>
        <h3>Infra Engineering</h3>
        <div className="ex title">
          <div className="list"></div>
            수원공업고등학교 IT인프라 기능경기대회 강사
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
          <div className="list"></div>
            Configuring SW Raid with mdadm
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
          <div className="list"></div>
            KISA 케이쉴드 주니어 이상적인 학사망 운용 프로젝트
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
          <div className="list"></div>
            실장비 활용 WAN 구축 프로젝트
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
        Any contact is welcomed. Be my friends!
        </div>
        <div className="contacts">
          <a href="https://github.com/purelledhand"><div className="contact-point git">
            Github
          </div></a>
          <a href="https://www.facebook.com/purelledhand"><div className="contact-point fb">
            Facebook
          </div></a>
          <a href="https://open.kakao.com/o/sUOCsNPb"><div className="contact-point kakao">
            Kakaotalk (fast-response)
          </div></a>
        </div>
      </div>
    </div>
  );
}

export default App;
