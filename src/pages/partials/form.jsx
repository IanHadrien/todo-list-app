import PropTypes from 'prop-types'
import { CgSpinner } from 'react-icons/cg'
import Input from '../../components/form/input'

export default function Form({
  onSubmit,
  data,
  handleInputChange,
  errors,
  isLoading,
  closeModal,
  editMode,
  viewMode,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="px-4 pt-2">
        <Input
          label="Nome"
          id="task"
          type="text"
          placeholder="Digite o nome da task"
          name="task"
          value={data?.task}
          onChange={handleInputChange}
          autoComplete="task"
          editMode={editMode}
          error={errors && errors?.task}
          disabled={!!viewMode}
          required
        />

        <Input
          label="Data"
          id="due"
          type="date"
          placeholder="Digite a data"
          name="due"
          value={data?.due}
          onChange={handleInputChange}
          autoComplete="due"
          editMode={editMode}
          error={errors && errors?.due}
          disabled={!!viewMode}
          required
        />

        {!viewMode && (
          <p className="text-xs font-medium text-gray-700 pb-2">
            Os campos marcados com * são obrigatórios.
          </p>
        )}
      </div>

      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        {!viewMode && (
          <button
            className="inline-flex w-full justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-80 sm:ml-3 sm:w-auto"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-1">
                <CgSpinner size={18} className="animate-spin" />
                <span>Salvando...</span>
              </div>
            ) : (
              <span>Salvar</span>
            )}
          </button>
        )}
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={closeModal}
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  data: PropTypes.object,
  handleInputChange: PropTypes.func,
  errors: PropTypes.object,
  isLoading: PropTypes.bool,
  closeModal: PropTypes.func,
  editMode: PropTypes.bool,
  viewMode: PropTypes.bool,
}
