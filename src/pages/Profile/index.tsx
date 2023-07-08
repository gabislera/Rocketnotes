import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Form, Avatar } from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useState, FormEvent } from 'react'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState<string>(user.name)
  const [email, setEmail] = useState<string>(user.email)
  const [passwordOld, setPasswordOld] = useState('')
  const [passwordNew, setPasswordNew] = useState('')

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const [avatar, setAvatar] = useState(user.avatar)
  const [avatarFile, setAvatarFile] = useState(null)
  const navigate = useNavigate()

  async function handleUpdateUser(event: FormEvent<HTMLElement>) {
    event.preventDefault()
    const userData = {
      name,
      email,
      avatar: user.avatar, // const userUpdated = Object.assign(userData, updated)
      password: passwordNew,
      old_password: passwordOld,
    }
    await updateProfile({ userData, avatarFile })
    console.log(avatar) // bug avatar
  }

  function handleChangeAvatar(event: any) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview) // arrumar para aparecer primeiro preview
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>

      <Form onSubmit={handleUpdateUser}>
        <Avatar>
          <img src={avatarUrl} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          value={passwordOld}
          onChange={(e) => setPasswordOld(e.target.value)}
        />
        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          value={passwordNew}
          onChange={(e) => setPasswordNew(e.target.value)}
        />
        <Button type="submit" title="Salvar" />
      </Form>
    </Container>
  )
}
