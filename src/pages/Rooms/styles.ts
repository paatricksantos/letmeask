import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  > main {
    position: relative;
    flex: 60%;
    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    h4 {
      color: #29292e;
    }

    > a {
      position: absolute;
      top: 50px;
      left: 10px;

      text-decoration: none;
      color: #835afd;

      font-size: 14px;

      display: flex;
      align-items: center;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(75%);
      }
    }

    button {
      cursor: pointer;
      border: 0;
      background: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

      padding: 5px 10px;

      border-radius: 8px;

      width: 100%;

      height: 50px;
      color: #29292e;

      font-size: 16px;
      font-weight: 500;

      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;

      transition: all 0.2s;

      &:hover {
        transform: scale(1.02);
        filter: brightness(95%);
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;

      img {
        margin-bottom: 30px;
      }

      ul {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 70vh;
        min-width: 300px;
        overflow-y: auto;
      }
    }
  }
`;
