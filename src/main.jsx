import ReactDOM from 'react-dom/client'
import './style/index.css'
import { App } from './app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
