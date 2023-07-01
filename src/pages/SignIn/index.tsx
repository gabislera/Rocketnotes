import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Form } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <a href="">Criar conta</a>
      </Form>
    </Container>
  )
}
