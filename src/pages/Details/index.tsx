import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags'
import { Container, Links, Content } from './styles'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao react</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
            accusantium distinctio nihil ex voluptatibus et omnis, odit enim
            ipsam soluta totam autem tempora aspernatur ipsa, eveniet animi
            dolore iure. Consequatur? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Amet, accusantium distinctio nihil ex voluptatibus
            et omnis, odit enim ipsam soluta totam autem tempora aspernatur
            ipsa, eveniet animi dolore iure. Consequatur?Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Amet, accusantium distinctio
            nihil ex voluptatibus et omnis, odit enim ipsam soluta totam autem
            tempora aspernatur ipsa, eveniet animi dolore iure. Consequatur?
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>
          <Button title="Voltar" isLoading />
        </Content>
      </main>
    </Container>
  )
}
