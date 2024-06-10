/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import DeleteModal from './deleteModal'

export function Tasks({ tasks, loading }) {
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
  const [idDelete, setIdDelete] = useState('')

  const removeTaksk = (id) => {
    setIsOpenModalDelete(true)
    setIdDelete(id)
  }

  const handleCloseModalDelete = () => {
    setIsOpenModalDelete(false)
  }

  if (loading) return <div>Carregando...</div>
  return (
    <div className="flex w-700 flex-col items-start gap-6 mt-16">
      <div className="flex justify-between items-end self-stretch">
        <div className="flex items-center gap-2">
          <p className="text-ignite-blue text-sm font-bold">Tarefas criadas</p>
          <div className="text-xs flex py-p2x px-2 flex-col justify-center items-center gap-2 rounded-full bg-ignite-gary400 text-ignite-gary100">
            <strong>{tasks?.length}</strong>
          </div>
        </div>
      </div>
      {tasks?.length <= 0 && (
        <div className="flex py-16 px-6 flex-col justify-center items-center gap-4 self-stretch rounded-lg border-t border-ignite-gary400">
          <div>
            <p className="text-ignite-gary300 text-center text-base font-bold">
              Você ainda não tem tarefas cadastradas
            </p>
            <p className="text-ignite-gary300 text-center text-base font-normal">
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
      )}
      {tasks?.length > 0 &&
        tasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-col items-start gap-3 self-stretch"
          >
            <div className="flex p-4 items-start gap-3 self-stretch rounded-lg border border-ignite-gary400 bg-ignite-gary500 shadow">
              <p
                className={`flex-1 text-sm font-normal
              ${
                task.value === 'concluid'
                  ? 'line-through text-ignite-gary300'
                  : 'text-ignite-gary100'
              }
              `}
              >
                {task.task}
              </p>
              <div className="flex justify-center items-center text-ignite-gary300 hover:text-ignite-danger transition">
                <FaRegTrashAlt size={24} onClick={() => removeTaksk(task.id)} />
              </div>
            </div>
          </div>
        ))}

      <DeleteModal
        closeModal={handleCloseModalDelete}
        id={idDelete}
        isOpen={isOpenModalDelete}
      />
    </div>
  )
}
