
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from './store/counterSlice'

function App() {
  const count = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const handleDecrease = () => {
    dispatch(decrease(count));
  }

  const hadleIncrease = () => {
    dispatch(increase(count));
  }

  return (
    <>
      
      <p>{count}</p>
      <button onClick={hadleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>    
    
    </>
  )
}

export default App
