import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'
import { SignUp } from './pages/SignUp'
// import { Details } from './pages/Details'
// import { Home } from './pages/Home'
// import { SignIn } from './pages/SignIn'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {/* <Details /> */}
      {/* <Home /> */}
      {/* <SignIn /> */}
      <SignUp />
    </ThemeProvider>
  )
}
