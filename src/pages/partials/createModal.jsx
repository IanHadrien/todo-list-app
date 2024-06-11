/* eslint-disable react/prop-types */
import { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import Modal from '../../components/modal'
import TodoApi from '../../api'
import Form from './form'

const defaultConfig = () => ({
  task: '',
  due: '',
  status: false,
})

export default function CreateModal({ closeModal = () => {}, isOpen = false }) {
  const queryClient = useQueryClient()

  const [newData, setNewData] = useState(defaultConfig())
  const [errors, setErrors] = useState({})

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => await TodoApi.Add(newData),
    onSuccess: () => {
      queryClient.refetchQueries(['todoGetAll'])
      toast.success('Tarefa cadastrada com sucesso.')
      handleClose()
    },
    onError: (e) => {
      console.log('Error: ', e?.data)
      setErrors(e?.data)
      toast.error('Não foi possível excluir a plantação')
    },
  })

  const handleInputChange = (e, fieldName) => {
    const value = e?.target?.value ?? e?.value
    const name = e?.target?.name ?? fieldName
    setNewData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    mutate()
  }

  const handleClose = () => {
    setErrors({})
    setNewData(defaultConfig)
    closeModal()
  }

  return (
    <Modal
      icon={<IoAddSharp size={25} />}
      title="Cadastrar"
      handleClose={handleClose}
      isOpen={isOpen}
    >
      <Form
        onSubmit={handleSubmit}
        data={newData}
        setData={setNewData}
        handleInputChange={handleInputChange}
        errors={errors}
        isLoading={isLoading}
        closeModal={handleClose}
        editMode={false}
      />
    </Modal>
  )
}
