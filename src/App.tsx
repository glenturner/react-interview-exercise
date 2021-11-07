import Home from '@components/Home'
import { Navbar } from '@components/Navbar'
import { Flex } from '@components/Flex'

function App() {
  return (
    <Flex center column style={{ overflow: 'hidden' }}>
      <Navbar />
      <Home />
    </Flex>
  )
}

export default App
