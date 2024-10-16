import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <S.Link href="#">RPG</S.Link>
          <S.Link href="#">Ação</S.Link>
          <S.Link href="#">Aventura</S.Link>
          <S.Link href="#">Esportes</S.Link>
          <S.Link href="#">Simulação</S.Link>
          <S.Link href="#">Estratégia</S.Link>
          <S.Link href="#">FPS</S.Link>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <S.Link href="#">Novidades</S.Link>
          <S.Link href="#">Promoções</S.Link>
          <S.Link href="#">Em breve</S.Link>
        </S.Links>
      </S.FooterSection>
      <p> {currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
