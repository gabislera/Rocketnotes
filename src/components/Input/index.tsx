import { Container } from './styles'

interface InputProps {
  icon?: any
  placeholder: string
  type?: string
}

// ...rest

export function Input({ icon: Icon, placeholder, type }: InputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input type={type} placeholder={placeholder} />
    </Container>
  )
}
