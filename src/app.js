import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'

import SearchBar from './components/searchBar'
import Greeter from './components/greeter'
import AppList from './components/appList'
import BookmarkList from './components/bookmarkList'
import SettingsModal from './components/settingsModal'

import selectedTheme from './components/themeManager'

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

const AppContainer = styled.div`
    max-width: 80%;
    margin: auto;
    padding: 10px;
`

const App = () => (
  <ZeitProvider>
    <CssBaseline />
    <GlobalStyle />
    <AppContainer>
      <SearchBar />
      <SettingsModal />
      <Greeter />
      <AppList />
      <BookmarkList />
    </AppContainer>
  </ZeitProvider>
)

export default App
