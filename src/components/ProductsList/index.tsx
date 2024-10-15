import Product from '../Product'
import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}
const ProductsList = ({ background, title }: Props) => (
  <S.Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <S.List>
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['R$ 150,00', '-10%']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['R$ 150,00', '-10%']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['R$ 150,00', '-10%']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['R$ 150,00', '-10%']}
          system="Windows"
          title="Nome do Jogo"
        />
      </S.List>
    </div>
  </S.Container>
)

export default ProductsList
