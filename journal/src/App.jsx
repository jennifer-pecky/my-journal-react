import './App.css'
import Navbar from './component/Navbar'
import Card from './component/Card'
import data from './data'

function App() {

  const cards = data.map(item => {
    return (
      <Card
        item={item}
      />

    )
  })

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}

export default App
