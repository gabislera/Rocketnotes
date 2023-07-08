import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Tag } from '../Tags'
import { Container } from './styles'

interface TagsProps {
  id: string
  name: string
}

interface DataProps {
  title: string
  tags?: TagsProps[]
}

interface NoteProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  data: DataProps
}

// ...rest

export function Note({ data, ...rest }: NoteProps) {
  return (
    <Container {...rest}>
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
