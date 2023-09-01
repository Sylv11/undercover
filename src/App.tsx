import PlayerForm from './components/PlayerForm'
import { Button } from './components/style'
import { Column, Grid, MainContainer, Row } from './style'
import PlayIcon from './components/PlayIcon'

const App = () => {

  return (
    <MainContainer>
      <Grid>
        <Column>
        <PlayerForm />
        </Column>
        <Column>
        <Button>
          <Row>
          <PlayIcon />
          Start
          </Row>
        </Button>
        </Column>
      </Grid>
    </MainContainer>
  )
}

export default App
