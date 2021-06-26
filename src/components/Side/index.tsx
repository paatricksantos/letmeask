import { Container } from './styles';
import illustrationImg from '../../assets/images/illustration.svg';

function Side() {
  return (
    <Container>
      <img
        src={illustrationImg}
        alt="Ilustração simbolizando perguntas e respostas"
      />
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>Tire suas dúvidas da sua audiêcia em tempo-real</p>
    </Container>
  );
}

export default Side;
