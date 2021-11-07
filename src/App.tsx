import Home from '@components/Home'
import { Header } from '@components/Header'
import { Flex } from '@components/Flex'

function App() {
  return (
    <Flex center column style={{ overflow: 'hidden' }}>
      <Header />
      <Home />
    </Flex>
  )
}

export default App
