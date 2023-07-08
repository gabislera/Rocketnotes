import { useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { Container, Form } from './styles'
import { api } from '../../services/api'
import { ButtonText } from '../../components/ButtonText'
import { useNavigate } from 'react-router-dom'

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState<String[]>([])
  const [newLink, setNewLink] = useState<string>('')

  const [tags, setTags] = useState<String[]>([])
  const [newTag, setNewTag] = useState<string>('')

  const navigate = useNavigate()

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted: any) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted))
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted: any) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleNewNote(e: any) {
    e.preventDefault()

    if (newTag) {
      return alert('Você deixou uma tag sem adicionar') // not working
    }

    if (newLink) {
      return alert('Você deixou um link sem adicionar') // not working
    }

    await api.post('/notes', {
      title,
      description,
      tags,
      links,
    })
    alert('Nota criada com sucesso')

    navigate(-1)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      <main>
        <Form onSubmit={handleNewNote}>
          <header>
            <h1>Criar nota</h1>
            <ButtonText onClick={handleBack} title="voltar" />
          </header>
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            isTitle
          />
          <Textarea
            placeholder="Observações"
            onChange={(e: any) => setDescription(e.target.value)}
          />
          <Section title="Links Úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              placeholder="Novo LInk"
              isNew
              value={newLink}
              onChange={(e: any) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={index}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <NoteItem
                placeholder="Nova tag"
                isNew
                onChange={(e: any) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button type="submit" title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}
