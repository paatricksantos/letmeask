import { useHistory } from 'react-router-dom';

import googleIconImg from '../assets/images/google-icon.svg';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { useAuth } from '../hooks/useAuth';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }

  return (
    <Layout>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire suas dúvidas da sua audiêcia em tempo-real</p>
      </aside>

      <main>
        <div>
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="google" />
            Crie sua sala com o Google
          </button>
          <div>ou entre em um sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </Layout>
  );
}
