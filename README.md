# F1 2026 🏎️

F1을 처음 접하는 사람들을 위한 F1 정보 웹사이트입니다. 드라이버/팀 순위, 레이스 일정, 서킷 정보와 함께 초보자가 궁금해할 만한 F1 용어를 쉽게 설명합니다.

## 소개

F1은 룰과 용어가 복잡해서 입문 장벽이 높은 스포츠입니다. 이 프로젝트는 **F1을 잘 모르는 사람도 쉽게 즐길 수 있도록**, 순위 정보를 보기 쉽게 정리하고 DRS, 언더컷 같은 전문 용어를 용어집으로 풀어서 제공하는 것을 목표로 합니다.

## 주요 기능

- 🏁 **드라이버 순위** — 2026시즌 드라이버 챔피언십 순위표
- 🏆 **컨스트럭터 순위** — 팀별 순위 및 시즌 소속 드라이버 (레이스 출전 드라이버만 필터링)
- 👤 **드라이버 프로필** — 개인 정보, 시즌 레이스 결과, 프로필 사진
- 🏎️ **컨스트럭터 프로필** — 팀 소속 드라이버 목록 (사진 클릭 시 프로필로 이동)
- 📖 **F1 용어집** — DRS, 세이프티카, 언더컷 등 입문자를 위한 용어 설명
- 🗺️ **서킷 정보** — 시즌 레이스 서킷 목록
- 📅 **레이스 캘린더** — 시즌 전체 일정

## 기술 스택

- **Frontend**: React 19, React Router 7, Vite 8
- **Styling**: Tailwind CSS 4
- **Data**: [Jolpica F1 API](https://api.jolpi.ca/ergast/f1) (Ergast API 후속)
- **Lint**: ESLint

## 시작하기

```bash
# 저장소 클론
git clone https://github.com/yhkwon28/f1-project.git
cd f1-project/f1-frontend

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

## 폴더 구조

```
f1-frontend/
├── public/
│   └── drivers/         # 드라이버 프로필 이미지 (기본/대체 이미지)
├── src/
│   ├── api/
│   │   └── wikipedia.js # 위키피디아 API로 드라이버 사진 연동
│   ├── components/
│   │   └── CircuitSlider.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Drivers.jsx
│   │   ├── DriverDetail.jsx
│   │   ├── Constructors.jsx
│   │   ├── ConstructorDetail.jsx
│   │   ├── Circuits.jsx
│   │   ├── Calendar.jsx
│   │   └── Glossary.jsx
│   ├── App.jsx
│   └── main.jsx
```

## 데이터 출처 및 이미지 관련

- 레이스/드라이버/팀 데이터는 [Jolpica API](https://api.jolpi.ca/ergast/f1)에서 가져옵니다.
- 드라이버 프로필 사진은 [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/)를 통해 CC 라이선스 이미지를 사용합니다.

## 라이선스

개인 학습 목적으로 제작한 프로젝트입니다.
