import Button from 'components/shared/Button'
import Text from 'components/shared/Text'
import './App.css'

function App() {
  return (
    <div>
      <Text typography="t1">t1</Text>
      <Button color="success">이상진</Button>
      <Button color="error">이상진</Button>
      <Button color="success" weak={true} full={true}>
        이상진
      </Button>
    </div>
  )
}

export default App
