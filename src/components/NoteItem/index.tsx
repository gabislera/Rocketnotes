import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

interface NoteItemProps {
  isNew?: any
  value?: any
  onClick?: any
  placeholder?: string
  onChange?: any
}

// ...rest

export function NoteItem({
  isNew,
  value,
  onClick,
  placeholder,
  onChange,
}: NoteItemProps) {
  return (
    <Container $isNew={isNew}>
      <input
        placeholder={placeholder}
        type="text"
        value={value}
        readOnly={!isNew}
        onChange={onChange}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
