import { Tag } from '../Tags'
import { Container } from './styles'

interface TagsProps {
  id: string
  name: string
}

interface DataProps {
  title: string
  tags: TagsProps[]
}

interface NoteProps {
  data: DataProps
}

// ...rest

export function Note({ data }: NoteProps) {
  return (
    <Container>
      <h1>{data.title}</h1>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
