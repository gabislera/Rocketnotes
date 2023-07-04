import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

interface NoteItemProps {
  isNew?: any
  value?: string
  onClick?: any
  placeholder?: string
}

// ...rest

export function NoteItem({
  isNew,
  value,
  onClick,
  placeholder,
}: NoteItemProps) {
  return (
    <Container $isNew={isNew}>
      <input
        placeholder={placeholder}
        type="text"
        value={value}
        readOnly={!isNew}
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
