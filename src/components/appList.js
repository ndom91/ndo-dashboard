import React, { useCallback, useEffect, useState } from 'react'
import MaterialIcon from 'material-icons-react'
import styled from 'styled-components'

import selectedTheme from './themeManager'

import {
  handleResponse,
  Headline,
  ListContainer,
  ItemList,
  Item,
  ErrorMessage
} from './elements'

const IconContainer = styled.div`
    margin-right: 0.5vh;
`

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Link = styled.a`
    font-family: Roboto, sans-serif;
    flex: 1 0 auto;
    color: ${selectedTheme.mainColor};
    font-weight: 500;
    text-transform: uppercase;
    margin: 0;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
        text-decoration: underline;
    }
`

const Description = styled.p`
    font-family: Roboto, sans-serif;
    text-transform: uppercase;
    margin: 0;
    font-size: 0.65rem;
    font-weight: 400;
    color: ${selectedTheme.accentColor};
`

const App = styled.div`
    display: flex;
    flex-basis: 25%;
    padding: 1rem;
`

const useAppData = () => {
  const [appData, setAppData] = useState({ apps: [], error: false })
  const fetchAppData = useCallback(async () => {
    (process.env.NODE_ENV === 'production'
      ? fetch('/apps.json').then(handleResponse)
      : import('./data/apps.json')
    )
      .then(async jsonResponse => {
        const resp = await fetch('https://wtfismyip.com/json').then(data => data.json())
        const isp = resp.YourFuckingISP
        console.log('ISP: ', isp)

        const unitymediaRegex = /unitymedia/i
        const ghostnetRegex = /ghostnet./i
        unitymediaRegex.test(isp)
          ? setAppData({ apps: jsonResponse.apps.textor, error: false })
          : ghostnetRegex.test(isp)
            ? setAppData({ apps: jsonResponse.apps.newtelco, error: false })
            : setAppData({ apps: [{ name: 'No App', displayURL: 'For this environment', icon: 'error' }], error: true })
      })
      .catch(error => {
        setAppData({ apps: [], error: error.message })
      })
  }, [])

  useEffect(() => {
    fetchAppData()
  }, [fetchAppData])
  return { appData, fetchAppData }
}

const AppList = () => {
  const {
    appData: { apps, error }
  } = useAppData()
  return (
    <ListContainer>
      <Headline>Applications</Headline>
      <ItemList>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {apps.map((app, idx) => {
          const { name } = app
          return (
            <Item key={[name, idx].join('')}>
              <App>
                <IconContainer>
                  <MaterialIcon
                    icon={app.icon}
                    color={selectedTheme.mainColor}
                  />
                </IconContainer>
                <DetailsContainer>
                  <Link href={app.URL}>{app.name}</Link>
                  <Description>{app.displayURL}</Description>
                </DetailsContainer>
              </App>
            </Item>
          )
        })}
      </ItemList>
    </ListContainer>
  )
}

export default AppList
