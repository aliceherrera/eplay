import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Caregories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        id="action"
        games={actionGames}
        title="Ação"
        background="black"
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sports"
        games={sportGames}
        title="Esportes"
        background="gray"
        isLoading={isLoadingSport}
      />
      <ProductsList
        id="fight"
        games={fightGames}
        title="Luta"
        background="black"
        isLoading={isLoadingFight}
      />
      <ProductsList
        id="rpg"
        games={rpgGames}
        title="RPG"
        background="gray"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        id="simulation"
        games={simulationGames}
        title="Simulação"
        background="black"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Caregories
