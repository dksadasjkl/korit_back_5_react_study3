import RootContainer from "./components/RootContainer/RootContainer";
import RootHeader from "./components/RootHeader/RootHeader";
import RootLayout from "./components/RootLayout/RootLayout";
import RootSideMenuLeft from "./components/RootSideMenuLeft/RootSideMenuLeft";

// [vs code]
// npx create-react-app library

// npm i react-router-dom
// npm i @emotion/react
// npm i react-icons
// npm i recoil

// App.js => App.jsx



//  [MySQL]
// https://www.data.go.kr/data/15112631/fileData.do 
// 다운로드
 
// create chema
// library_db 생성

// Table data import Wizard
// next
// create new table : book_sample_tb


function App() {
  return (
    <RootLayout>
      <RootContainer>
        <RootSideMenuLeft />
        <RootHeader>
          
        </RootHeader>
      </RootContainer>
    </RootLayout>
  );
}

export default App;
