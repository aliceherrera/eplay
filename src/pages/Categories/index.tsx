import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Caregories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  // const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  // const [gamesEsporte, setGamesEsporte] = useState<Game[]>([])
  // const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  // const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  // const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
  //     .then((res) => res.json())
  //     .then((res) => setGamesAcao(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
  //     .then((res) => res.json())
  //     .then((res) => setGamesEsporte(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
  //     .then((res) => res.json())
  //     .then((res) => setGamesSimulacao(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
  //     .then((res) => res.json())
  //     .then((res) => setGamesLuta(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
  //     .then((res) => res.json())
  //     .then((res) => setGamesRPG(res))
  // }, [])

  if (actionGames && sportGames && fightGames && rpgGames && simulationGames) {
    return (
      <>
        <ProductsList
          id="action"
          games={actionGames}
          title="Ação"
          background="black"
        />
        <ProductsList
          id="sports"
          games={sportGames}
          title="Esportes"
          background="gray"
        />
        <ProductsList
          id="fight"
          games={fightGames}
          title="Luta"
          background="black"
        />
        <ProductsList id="rpg" games={rpgGames} title="RPG" background="gray" />
        <ProductsList
          id="simulation"
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Caregories
