import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import Container from './components/Container';
import InnerContainer from './components/InnnerContainer';
import FoodDeteil from './components/FoodDeteil';




function App() {

  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState('642583')

  return (
    <div className='App'>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDeteil foodId={foodId} />
        </InnerContainer>
      </Container>

    </div>
  )
}

export default App
