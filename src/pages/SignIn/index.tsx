import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { Container, Form } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
// import { api } from '../../services/api'

const signInSchema = z
  .object({
    email: z.string().email({ message: 'Digite um email válido' }),
    password: z
      .string()
      .min(5, { message: 'A senha deve ter no mínimo 5 caracteres' })
      .max(15),
  })
  .partial()

type SignInInputs = z.infer<typeof signInSchema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>({
    resolver: zodResolver(signInSchema),
  })

  const { signIn } = useAuth()

  function handleSignIn(data: SignInInputs) {
    console.log(data)
    signIn(data)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          {...register('email')}
          error={errors.email}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          {...register('password')}
          error={errors.password}
        />

        <Button type="submit" title="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>
    </Container>
  )
}
