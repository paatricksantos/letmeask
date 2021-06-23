import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import googleIconImg from '../assets/images/google-icon.svg';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exist.');
      return;
    }

    history.push(`/rooms/${roomCode}`);
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
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </Layout>
  );
}
