import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import SearchBar from './components/searchBar'
import Greeter from './components/greeter'
import AppList from './components/appList'
import BookmarkList from './components/bookmarkList'
import SettingsModal from './components/settingsModal'

import selectedTheme from './components/themeManager'
import Background from './bg2.svg'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${selectedTheme.backgroundColor};
    height: 100%;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0);
    border-radius: 10px;
    background-color: ${selectedTheme.backgroundColor};
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: ${selectedTheme.backgroundColor};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.2);
    background-color: ${selectedTheme.accentColor};
  }
`

const Bg = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-image: url(${Background});
  z-index: 1;
  opacity: 0.1;
`

const AppContainer = styled.div`
  position: relative;
  max-width: 80%;
  margin: auto;
  padding: 10px;
  background: transparent;
  z-index: 99;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <SearchBar />
        <SettingsModal />
        <Greeter />
        <AppList />
        <BookmarkList />
      </AppContainer>
      <Bg />
    </>
  )
}

export default App
