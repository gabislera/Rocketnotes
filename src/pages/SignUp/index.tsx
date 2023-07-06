import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Container, Form } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../services/api'

const signUpSchema = z
  .object({
    name: z.string().max(30, { message: 'Tamanho limite de caracteres' }),
    email: z.string().email({ message: 'Digite um email válido' }),
    password: z
      .string()
      .min(5, { message: 'A senha deve ter no mínimo 5 caracteres' })
      .max(15),
  })
  .partial()

type SignUpInputs = z.infer<typeof signUpSchema>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({
    resolver: zodResolver(signUpSchema),
  })

  function handleSignUp(data: SignUpInputs) {
    console.log(data)

    api
      .post('/users', data)
      .then(() => {
        alert('Usuário cadastrado com sucesso')
        navigate('/')
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message)
        } else {
          alert('Não foi possível cadastrar')
        }
      })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          error={errors.name}
          {...register('name')}
        />
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          error={errors.email}
          {...register('email')}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          error={errors.password}
          {...register('password')}
        />

        <Button type="submit" title="Cadastrar" />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  )
}
