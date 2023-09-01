import { Row } from "../../style";
import { AbsoluteImage, Container } from "./style";
import playerAvatar from '../../assets/avt_empty.png'

interface IPlayerPlaceholderProps {
    player: string;
  }

const PlayerPlaceholder = ({player}: IPlayerPlaceholderProps) => {
  return (
    <Container>
      <Row>
        <AbsoluteImage src={playerAvatar} alt="player" height={30} width={25}/>
        {player}
      </Row>
    </Container>
  );
};

export default PlayerPlaceholder;