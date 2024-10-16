import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`
export const SectionTitle = styled.h4`
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
`
export const Links = styled.ul`
  margin-top: 16px;
  display: flex;
`
export const Link = styled.a`
  color: ${cores.cinzaClaro};
  margin-right: 8px;
  text-decoration: none;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
