/* eslint-disable react/prop-types */

export default function Input({
  editMode,
  label = '',
  value,
  setValue,
  error = '',
  errorData,
  required,
  optional = false,
  id,
  disabled = false,
  onChange,
  onSubmit,
  margin = true,
  labelSize = 'base',
  ...props
}) {
  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e)
    } else {
      setValue(e.target.value)
    }
  }

  const handleKeyPress = (event) => {
    if (onSubmit) {
      if (event.key === 'Enter') {
        onSubmit(event)
      }
    }
  }

  return (
    <div className={`${margin && 'mb-3'}`}>
      <div>
        <label
          htmlFor={id ?? null}
          className={`block font-bold text-${labelSize} text-gray-900`}
        >
          {label} {required && '*'}{' '}
          {optional && <span className="text-gray-400">(opcional)</span>}
        </label>
        {editMode ? (
          <input
            className={`${
              error || errorData
                ? 'border-red-300 focus:border-red-300 focus:ring-red-300'
                : 'border-gray-300'
            } 
                                  ${
                                    disabled ? 'bg-cinza-50 text-gray-500' : ''
                                  } 
                                  focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:border rounded-md shadow-sm mt-1 block w-full px-3 py-2 text-base border border-gray-300`}
            onChange={handleInputChange}
            disabled={disabled}
            id={id}
            value={value}
            {...props}
          />
        ) : (
          <input
            className={`${
              error || errorData
                ? 'border-red-300 focus:border-red-300 focus:ring-red-300'
                : 'border-gray-300'
            } 
                                  ${
                                    disabled ? 'bg-cinza-50 text-gray-500' : ''
                                  } 
                                  focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:border rounded-md shadow-sm mt-1 block w-full px-3 py-2 border border-gray-300 text-base`}
            onChange={handleInputChange} // e => setValue(e.target.value)}
            value={value}
            disabled={disabled}
            id={id}
            onKeyDown={handleKeyPress}
            {...props}
          />
        )}
        <small className="text-red-600">{error}</small>
      </div>
    </div>
  )
}
