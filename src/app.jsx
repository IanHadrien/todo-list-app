import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TodoListIndex } from './pages'

export function App() {
  return (
    <>
      <TodoListIndex />
      <ToastContainer />
    </>
  )
}
