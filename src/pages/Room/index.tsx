import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Container } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

type RoomParams = {
  id: string;
};

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
  }
>;

type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

export function Room() {
  const { user } = useAuth();
  const { id: roomId } = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
          };
        }
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });
  }, [roomId]);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      //Implemetar tost
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions/`).push(question);

    setNewQuestion('');
  }

  return (
    <Container>
      <header>
        <div>
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={roomId} />
        </div>
      </header>

      <main>
        <div>
          <h1>Sala {title}</h1>
          {questions.length > 0 &&
            (questions.length > 1 ? (
              <span>{questions.length} perguntas</span>
            ) : (
              <span>{questions.length} pergunta</span>
            ))}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            value={newQuestion}
            onChange={event => setNewQuestion(event.target.value)}
            placeholder="O que você quer perguntar?"
          />
          <div>
            {user ? (
              <div>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login.</button>
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>
      </main>
    </Container>
  );
}
