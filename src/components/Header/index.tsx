import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <S.Links>
            <S.LinkItem>
              <Link to="/categories">Categorias</Link>
            </S.LinkItem>
            <S.LinkItem>
              <a href="">Novidades</a>
            </S.LinkItem>
            <S.LinkItem>
              <a href="">Promoções</a>
            </S.LinkItem>
          </S.Links>
        </nav>
      </div>
      <S.CartButton onClick={openCart}>
        {itens.length} - produtos(s)
        <img src={carrinho} alt="Carrinho" />
      </S.CartButton>
    </S.HeaderBar>
  )
}

export default Header
