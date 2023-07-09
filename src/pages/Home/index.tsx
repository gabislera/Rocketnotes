import { useState, useEffect } from 'react'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { api } from '../../services/api'
import { Note } from '../../components/Note'
import { useNavigate } from 'react-router-dom'

interface TagProps {
  id: number
  name: string
}

interface NoteProps {
  id: number
  title: string
  description: string
}

export function Home() {
  const [tags, setTags] = useState<TagProps[]>([])
  const [search, setSearch] = useState('')
  const [tagsSelected, setTagsSelected] = useState<TagProps[]>([])
  const [notes, setNotes] = useState<NoteProps[]>([])

  const navigate = useNavigate()

  function handleTagSelected(tagName: any) {
    if (tagName === 'all') {
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected((prevState) => [...prevState, tagName])
    }
    console.log(alreadySelected)
  }

  function handleDetails(id: any) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`,
      )
      setNotes(response.data)
      console.log(response.data)
    }
    fetchNotes()
  }, [tagsSelected, search])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            isActive={tagsSelected.length === 0}
            onClick={() => handleTagSelected('all')}
          />
        </li>
        {tags &&
          tags.map((tag: any) => (
            <li key={tag.id}>
              <ButtonText
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
                title={tag.name}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar por título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {notes.map((note) => (
            <Note
              key={note.id}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
