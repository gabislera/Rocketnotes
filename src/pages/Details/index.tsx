import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags'
import { Container, Links, Content } from './styles'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

interface TagProps {
  id: string
  name: string
}

interface LinkProps {
  id: number
  url: string
}

interface DataProps {
  title: string
  description: string
  links: LinkProps[]
  tags: TagProps[]
}

export function Details() {
  const params = useParams()
  const [data, setData] = useState<DataProps>()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm('Deseja realmente remover a nota?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  }, [params.id])

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleRemove} />

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link: LinkProps) => (
                    <li key={link.id}>
                      <a target="_blank" href={link.url} rel="noreferrer">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag: TagProps) => (
                  <Tag key={tag.id} title={tag.name} />
                ))}
              </Section>
            )}

            <Button type="button" title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  )
}
