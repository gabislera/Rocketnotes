import { Container } from './styles'

interface InputProps {
  icon: any
  placeholder: string
}

// ...rest

export function Input({ icon: Icon, placeholder }: InputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input placeholder={placeholder} />
    </Container>
  )
}
