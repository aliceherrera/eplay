import Section from '../Section'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import spider from '../../assets/images/banner-homem-aranha.png'
import play from '../../assets/images/play.png'
import close from '../../assets/images/fechar.png'

import zoom from '../../assets/images/zoom.png'
import { Action, Item, Itens, Modal, ModalContent } from './styles'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spider
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/BtyBjOW8sGY?si=v3W48kbiMMgzCYyT'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Itens>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img src={getMediaIcon(media)} alt="Clique para maximizar" />
              </Action>
            </Item>
          ))}
        </Itens>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="ícone de fechar" />
          </header>
          <img src={spider} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
