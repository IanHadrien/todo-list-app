/* eslint-disable react/prop-types */
import { FiAlertTriangle } from 'react-icons/fi'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import Modal from '../../components/modal'
import TodoApi from '../../api'

export default function DeleteModal({ closeModal, id, isOpen }) {
  const queryClient = useQueryClient()

  const { mutate, isLoading, reset } = useMutation({
    mutationFn: async () => TodoApi.Delete(id),
    onSuccess: () => {
      queryClient.refetchQueries(['todoGetAll'])
      closeModal()
      toast.success('Tarefa excluído com sucesso')
      reset()
    },
    onError: () => {
      closeModal()

      toast.error('Não foi possível excluir a tarefa')
      reset()
    },
  })

  const handleDelete = () => mutate()

  return (
    <Modal
      icon={<FiAlertTriangle size={20} color="red" />}
      title="Excluir"
      handleClose={closeModal}
      isOpen={isOpen}
    >
      <div className="my-8 w-full pl-4">
        <p className="text-sm text-gray-500">
          Você tem certeza que deseja excluir está tarefa?
        </p>
      </div>

      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          disabled={isLoading}
          onClick={handleDelete}
        >
          Confirmar
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={closeModal}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  )
}
