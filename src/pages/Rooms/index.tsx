import { useEffect, useState } from 'react';
import { Container } from './styles';

import { MdPlayCircleOutline, MdKeyboardBackspace } from 'react-icons/md';

import logoImg from '../../assets/images/logo.svg';

import Side from '../../components/Side';
import { database } from '../../services/firebase';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

type ListRoomsTypes = {
  id: string;
  authorId: string;
  title: string;
  isPrivate: boolean;
};

type FirebaseRooms = Record<
  string,
  {
    authorId: string;
    title: string;
    isPrivate: boolean;
  }
>;

function Rooms() {
  const [listRooms, setListRooms] = useState<ListRoomsTypes[]>([]);
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    const roomRef = database.ref('rooms');

    async function getRooms() {
      const firebaseRooms = await roomRef.get();
      const rooms: FirebaseRooms = await firebaseRooms.val();

      const parsedRooms = Object.entries(rooms).map(([key, value]) => {
        return {
          id: key,
          authorId: value.authorId,
          isPrivate: value.isPrivate,
          title: value.title,
        };
      });

      setListRooms(parsedRooms.filter(rooms => !rooms.isPrivate));
    }

    getRooms();
  }, []);

  async function handleEnterRoom(roomId: string, authorId: string) {
    if (user?.id === authorId) {
      history.push(`admin/rooms/${roomId}`);
    } else {
      history.push(`rooms/${roomId}`);
    }
  }

  return (
    <Container>
      <Side />
      <main>
        <Link to="/">
          <MdKeyboardBackspace size={20} /> Voltar para o Inicio
        </Link>
        <div>
          <img src={logoImg} alt="letmeask" />

          <h4>Salas</h4>
          <ul>
            {listRooms.length > 0 &&
              listRooms.map(room => (
                <li key={room.id}>
                  <button
                    onClick={() => handleEnterRoom(room.id, room.authorId)}
                  >
                    {room.title}
                    <MdPlayCircleOutline size={24} />
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </Container>
  );
}

export default Rooms;
