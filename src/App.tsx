import PlayerForm from './components/PlayerForm'
import { Button } from './components/style'
import { Column, Grid, MainContainer } from './style'

const App = () => {

  return (
    <MainContainer>
      <Grid>
        <Column>
        <PlayerForm />
        </Column>
        <Column>
        <Button>
          Start
        </Button>
        </Column>
      </Grid>
    </MainContainer>
  )
}

export default App
