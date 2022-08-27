import { Button, Container, Box } from '@mui/material'
import { Navbar } from '../components/navbar'

const Home = () => {
  return (
    <>
    <Navbar />
    <Container>
    <Button onClick={() => { console.log("hello world")}}>
      <h1>click me</h1>
    </Button>
    </Container>
    </>
  )
}

export default Home
