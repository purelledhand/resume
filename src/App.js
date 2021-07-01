import React, { useEffect } from 'react';
import { getLocale, getTranslation, initializeI18next } from './utils/i18next';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  useEffect(() => {
    const locale = getLocale();
    const initI18next = async () => {
      const translation = await getTranslation(locale);
      initializeI18next(locale, translation);
    };
    initI18next();
  }, []);

  const { t } = useTranslation();

  return (
    <>
    <div class="circles">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
    </div>
      <header>
        <div className="header-bold">Optimize</div>
        <div>the world,</div>
        <div className="header-bold">Visualize</div>
        <div>the think.</div>
      </header>
      <div class="contents">
      <div className="App">
        <div className="profile card">
          <div class="profile-name">Sohye Choi, 최소혜</div>
          <div class="profile-position">
            Web Frontend Engineer
          </div>
        </div>
        <div className="card">
          <div className="intro">
            { t('bio') }
          </div>
          <h2>Curriculum Vitae</h2>
          <ul className="head cv">
            <li className="title">
              <div className="year">2020 - now</div>
              <span>HYPERCONNECT</span>
            </li>
            <ul className="cv">
              <li>
                <div className="year">2021</div>
                Enterprise Team, Web Frontend Engineer
              </li>
              <li>
                <div className="year">2020</div>
                Azar Studio, Web Frontend Engineer
              </li>
              <li>
                <div className="year">2020</div>
                <a href="https://hyperconnect.github.io/2020/12/14/typescript-build-optimization.html">
                  CRA + TypeScript 환경 빌드 퍼포먼스 최적화
                </a>
              </li>
            </ul>
            <li className="title">
              <div className="year">2021 - 2021</div>
              <span>SAP Labs Korea</span>
            </li>
            <ul className="cv">
              <li>
                Infra Service Team, UX Engineer (Contract)

              </li>
            </ul>
            <li className="title">
              <div className="year">2020 - 2020</div>
              <span>Square Lab</span>
            </li>
            <ul className="cv">
              <li>Client Engineer Intern</li>
            </ul>
            <li className="title">
              <div className="year">2017 - 2018</div>
              <span>Best of the Best 6th, Kitri</span>
            </li>
            <ul className="cv">
              <li>Top 30</li>
            </ul>
            <li className="title">
              <div className="year">2017 - 2021</div>
              <span>Ajou University</span>
            </li>
            <ul className="cv">
              <li>B.S. degree of cyber security</li>
              <li>
                <div className="year">2018</div>
                코드게이트 해킹시연 공모전 1위
              </li>
              <li>
                <div className="year">2019</div>
                아주대학교 창업 아이디어 경진대회 1위
              </li>
              <li>
                <div className="year">2019</div>
                공개SW 개발자 대회 은상
              </li>
              <li>
                <div className="year">2019</div>
                SW중심대학 융합SW 공모전 1위
              </li>
            </ul>
            <li className="title">
              <div className="year">2014 - 2017</div>
              <span>선린인터넷고등학교</span>
            </li>
            <ul className="cv">
              <li>Server admin of Unifox</li>
              <li>
                <div className="year">2014</div>
                교내 네트워크 구축대회 3위
              </li>
              <li>
                <div className="year">2015</div>
                교내 포트폴리오 경진대회 1위
              </li>
              <li>
                <div className="year">2015</div>
                교내 네트워크 구축대회 2위
              </li>
            </ul>
          </ul>
          <h2>Experience</h2>

          <h3>Modern Web Development</h3>
          <div className="ex title">
            <div className="row">
              플레이윙즈 백오피스 대시보드 서비스
              <div className="tag">
                Material-UI, React-Hooks, TypeScript, grpc, protobufjs
              </div>
            </div>
          </div>
          <ul className="ex-ul">
            <li>
              <div className="list second"></div>2020.03 - 2020.06 스퀘어랩 사내
              프로젝트
            </li>
            <li>
              <div className="list second"></div>Implementing Codebase and UI
            </li>
            <li>
              <div className="list second"></div>Multi-API handling strategy
              design
            </li>
            <li>
              <div className="list second"></div>Client api model design based
              on rpc
            </li>
            <li>
              <div className="list second"></div>Static typing with TypeScript
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              NLP 기반 리뷰 관리 자동화 서비스, UnifoCS
              <div className="tag">UI/UX, ES6+, React, JEST</div>
            </div>
          </div>
          <ul className="ex-ul">
            <li>
              <div className="list second"></div>
              <a href="https://youtu.be/LNmBgMDj7V0">데모영상</a>
            </li>
            <li>
              <div className="list second"></div>2019 공개SW 개발자 대회 은상
            </li>
            <li>
              <div className="list second"></div>2019 SW중심대학 융합SW 공모전
              대상
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              React Hook Form 라이브러리 공식 페이지 번역
              <div className="tag">Contributed PR : #46</div>
            </div>
          </div>
          <ul className="ex-ul">
            <li>
              <div className="list second"></div>
              <a href="https://github.com/react-hook-form/react-hook-form-website">
                react-hook-form/react-hook-form-website
              </a>
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              시각화 기반 커리어관리 SNS, Whoami/WeArtist
              <div className="tag">UI/UX, React, React Native, Redux, ES6+</div>
            </div>
          </div>
          <ul className="ex-ul">
            <li>
              <div className="list second"></div>2019 아주대학교 창업 아이디어
              경진대회 대상
            </li>
            <li>
              <div className="list second"></div>2019 SW융합 창업 캠프 아이디어
              마켓 2위
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              zziz/pwc : CVPR2019 컨퍼런스 사이트 개발
              <div className="tag">UI/UX, ES6+</div>
            </div>
          </div>
          <ul className="ex-ul">
            <li>
              <div className="list second"></div>
              <a href="https://github.com/zziz/pwc">zziz/pwc</a> : 14k github
              star
            </li>
            <li>
              <div className="list second"></div>
              <a href="http://paperake.com">paperake.com</a>
            </li>
            <li>
              <div className="list second"></div>gitlab repository maintainer
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              React.js 공식 문서 번역
              <div className="tag">Contributed PR : #35</div>
            </div>
          </div>
          <ul className="ex-ul">
            <li>
              <div className="list second"></div>
              <a href="https://github.com/reactjs/ko.reactjs.org">
                reactjs/ko.reactjs.org
              </a>
            </li>
            <li>
              <div className="list second"></div>
              <a href="https://ko.reactjs.org/docs/components-and-props.html">
                components and props
              </a>
            </li>
          </ul>

          <h3>Security</h3>
          <div className="ex title">
            <div className="row">
              스마트홈 제어시스템 취약점 다면진단
              <div className="tag">Mobile, Network, Firmware</div>
            </div>
          </div>
          <ul className="ex-ul">
            <li>
              <div className="list second"></div>
              2017 BoB 6th 프로젝트
            </li>
            <li>
              <div className="list second"></div>
              데일리시큐 언론 노출{" "}
              <a href="http://www.dailysecu.com/?mod=news&act=articleView&idxno=26932">
                {" "}
                [긴급] 아파트 스마트홈에 심각한 취약점 발견…
              </a>
            </li>
            <li>
              <div className="list second"></div>
              JTBC 언론 노출{" "}
              <a href="http://news.jtbc.joins.com/article/article.aspx?news_id=NB11562517">
                {" "}
                똑똑한 줄 알았는데…맥없이 뚫린 '스마트 홈' 보안
              </a>
            </li>
            <li>
              <div className="list second"></div>
              2018 코드게이트 해킹시연 공모전 최우수상 및 인기상
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              2018 코드엔진 컨퍼런스 발표
            </div>
          </div>
          <ul className="ex-ul">
            <li>
              <div className="list second"></div>
              <a href="https://github.com/codeengn/codeengn-conference/blob/master/15/2018%20CodeEngn%20Conference%2015%2C%20%EC%8A%A4%EB%A7%88%ED%8A%B8%20%ED%99%88%20%EC%A0%9C%EC%96%B4%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EB%8B%A4%EB%A9%B4%EC%A7%84%EB%8B%A8%20%5B%EC%B5%9C%EC%86%8C%ED%98%9C%5D.pdf">
                스마트홈 제어시스템 취약점 다면진단
              </a>
            </li>
          </ul>
          <h3>Infra Engineering</h3>
          <div className="ex title">
            <div className="row">
              Kubernetes 공식 문서 번역
              <div className="tag">Contributed PR : #16299</div>
            </div>
          </div>
          <ul className="ex-ul">
            <li>
              <div className="list second"></div>
              <a href="https://github.com/kubernetes/website/">
                kubernetes/website
              </a>{" "}
              : 1.8k github star
            </li>
            <li>
              <div className="list second"></div>
              DNS Pod Service
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              수원공업고등학교 IT인프라 기능경기대회 강사
              <div className="tag">server infra, routing, switching, FW, UTM</div>
            </div>
          </div>
          <ul className="ex-ul">
            <li>
              <div className="list second"></div>
              2017.12 ~ 2018.04
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              Configuring SW Raid with mdadm
              <div className="tag">server infra</div>
            </div>
          </div>
          <ul className="ex-ul">
            <li>
              <div className="list second"></div>
              <a href="https://blog.naver.com/wergreat10/220373421917">
                publishing link
              </a>
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              KISA 케이쉴드 주니어 이상적인 학사망 운용 프로젝트
              <div className="tag">server infra, cisco2960, ASA5500</div>
            </div>
          </div>
          <ul className="ex-ul">
            <li>
              <div className="list second"></div>
              Project Manager
            </li>
            <li>
              <div className="list second"></div>
              실장비 이중화, 서비스 이중화, 망분리
            </li>
            <li>
              <div className="list second"></div>
              모의해킹 후 보완
            </li>
          </ul>
          <div className="ex title">
            <div className="row">
              실장비 활용 WAN 구축 프로젝트
              <div className="tag">server infra, cisco2960, ASA5500, VoIP</div>
            </div>
          </div>
          <ul className="ex-ul">
            <li>
              <div className="list second"></div>
              Project Manager
            </li>
          </ul>
          <h2>Contact</h2>
          <div className="desc">purelledhand@gmail.com</div>
          <div className="contacts">
            <a href="https://github.com/purelledhand" target="_blank" rel="noopener noreferrer">
              <div className="contact-point git">Github</div>
            </a>
            <a href="https://www.linkedin.com/in/sohye" target="_blank" rel="noopener noreferrer">
              <div className="contact-point fb">Linkedin</div>
            </a>
        </div>
      </div>
      </div>
      <footer>
        <a href="https://github.com/purelledhand/resume/blob/master/LICENSE">
          AGPLv3 License
        </a>
      </footer>
      </div>
    </>
  );
}

export default App;
