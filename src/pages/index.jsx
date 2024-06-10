// import { Tasks } from "./components/Tasks";
import { useEffect, useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import { CiCircleList } from 'react-icons/ci'
import axios from 'axios'
import { Tasks } from '../components/tasks'
// import TodoApi from '../api'
import { toast } from 'react-toastify'
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const APP_URL = 'http://127.0.0.1:8000/api'

export function TodoListIndex() {
  // const queryClient = useQueryClient()
  const [textTask, setTextTask] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  // Exemplo 1 GET
  const fetchData = async () => {
    setLoading(true)
    try {
      // const response = await TodoApi.GetAll()
      const response = await axios.get(`${APP_URL}/todos`)
      setData(response?.data?.data)
    } catch (err) {
      console.error(err)
      toast.success('Erro ao buscar tarefas.')
    } finally {
      setLoading(false)
    }
  }

  // const { data, isLoading } = useQuery({
  //   queryKey: ['todoGetAll'],
  //   queryFn: () => TodoApi.GetAll(),
  // })
  // console.log(data)

  useEffect(() => {
    fetchData()
  }, [])

  // Exemplo 2 POST
  const submit = async () => {
    try {
      await axios.post(APP_URL + '/todos', {
        task: textTask,
        due: '22-09-2024',
        status: false,
      })
      toast.success('Tarefa cadastrada com sucesso.')
    } catch (err) {
      console.error('Error: ', err?.response?.data?.data)
      toast.error('Erro ao cadastrar a tarefa.')
    } finally {
      fetchData()
    }
  }

  // const { mutate, isLoading: isLoadingAdd } = useMutation({
  //   mutationFn: async (data) => await TodoApi.Add(data),
  //   onSuccess: () => {
  //     // queryClient.refetchQueries(['todoGetAll'])
  //     toast.success('Tarefa cadastrada com sucesso.')
  //   },
  //   onError: () => {
  //     toast.error('Não foi possível excluir a plantação')
  //   },
  // })

  const addTask = (e) => {
    e.preventDefault()
    submit()
    // const tempObj = {
    //   task: textTask,
    //   due: '22-09-2024',
    //   status: false,
    // }
    // mutate(tempObj)
    setTextTask('')
  }

  return (
    <div className="h-screen bg-gray-50">
      <header className="bg-gray-300 w-full h-48">
        <div className="flex items-center justify-center text-ignite-gary100 h-full">
          <CiCircleList size={40} color="#015958" />
          <p className="px-3 text-ignite-blue text-text40 font-black">
            <span className="text-ignite-purpleDark">Todo </span>
            <span>List</span>
          </p>
        </div>
      </header>

      <main className="bg-gray-50 flex justify-center">
        <div>
          <form
            onSubmit={addTask}
            className="flex w-700 items-center gap-2 -mt-7"
          >
            <input
              className="flex flex-1 p-4 text-ignite-gary100 items-center gap-2 rounded-lg border border-ignite-gary700 bg-ignite-gary500 default:text-ignite-gary500"
              type="text"
              placeholder="Adicione uma nova tarefa"
              value={textTask}
              onChange={(e) => setTextTask(e.target.value)}
              required
            />
            <button className="inline-block p-4 justify-center items-center gap-2 rounded-lg bg-ignite-blueDark hover:bg-ignite-blue transition">
              <p className="text-ignite-gary100 text-sm font-bold flex">
                <span className="pr-2">Criar</span>
                <IoAddSharp size={20} />
              </p>
            </button>
          </form>
          <Tasks tasks={data} loading={loading} />
        </div>
      </main>
    </div>
  )
}
