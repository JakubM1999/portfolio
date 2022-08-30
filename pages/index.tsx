import { ThemeProvider, responsiveFontSizes, createTheme } from '@mui/material'
import { Layout } from '../components/layout'

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
    <Layout />
    </ThemeProvider>
  )
}

export default Home
