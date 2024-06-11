// import { Tasks } from "./components/Tasks";
import { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import { CiCircleList } from 'react-icons/ci'
import { Tasks } from './partials/tasks'
import TodoApi from '../api'
import { useQuery } from '@tanstack/react-query'
import CreateModal from './partials/createModal'

// const APP_URL = 'http://127.0.0.1:8000/api'

export function TodoListIndex() {
  // const queryClient = useQueryClient()
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false)
  // const [data, setData] = useState([])
  // const [loading, setLoading] = useState(false)

  // Exemplo 1 GET
  // const fetchData = async () => {
  //   setLoading(true)
  //   try {
  //     // const response = await TodoApi.GetAll()
  //     const response = await axios.get(`${APP_URL}/todos`)
  //     setData(response?.data?.data)
  //   } catch (err) {
  //     console.error(err)
  //     toast.error('Erro ao buscar tarefas.')
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  const { data, isLoading } = useQuery({
    queryKey: ['todoGetAll'],
    queryFn: () => TodoApi.GetAll(),
  })
  // console.log(data)

  // Exemplo 2 POST
  // const submit = async () => {
  //   try {
  //     await axios.post(APP_URL + '/todos', {
  //       task: textTask,
  //       due: '22-09-2024',
  //       status: false,
  //     })
  //     toast.success('Tarefa cadastrada com sucesso.')
  //   } catch (err) {
  //     console.error('Error: ', err?.response?.data?.data)
  //     toast.error('Erro ao cadastrar a tarefa.')
  //   } finally {
  //     fetchData()
  //   }
  // }

  const addTask = (e) => {
    e.preventDefault()
    // submit()
    setIsOpenModalCreate(true)
  }

  const handleCloseModalCreate = () => {
    setIsOpenModalCreate(false)
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
            <button className="w-full inline-block p-4 justify-center items-center gap-2 rounded-lg bg-ignite-blueDark hover:bg-ignite-blue transition">
              <p className="text-ignite-gary100 text-sm font-bold flex items-center justify-center">
                <span className="pr-2">Criar</span>
                <IoAddSharp size={20} />
              </p>
            </button>
          </form>
          <Tasks tasks={data?.data?.data} loading={isLoading} />
        </div>
      </main>

      {isOpenModalCreate && (
        <CreateModal
          closeModal={handleCloseModalCreate}
          isOpen={isOpenModalCreate}
        />
      )}
    </div>
  )
}
