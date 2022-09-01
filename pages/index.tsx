import { ThemeProvider, responsiveFontSizes, createTheme } from '@mui/material'
import { Layout } from '../components/layout'

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 960,
      md: 1280,
      lg: 1920,
      xl: 2040,
    }
  }
});
theme = responsiveFontSizes(theme);

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
    <Layout />
    </ThemeProvider>
  )
}

export default Home
