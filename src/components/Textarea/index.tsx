import { Container } from './styles'

interface TextareaProps {
  value?: string
  placeholder: string
  onChange: any
}

// ...rest

export function Textarea({ value, placeholder, onChange }: TextareaProps) {
  return (
    <Container onChange={onChange} placeholder={placeholder}>
      {value}
    </Container>
  )
}
