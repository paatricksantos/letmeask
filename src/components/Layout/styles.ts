import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;

    background: #835afd;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'Poppings', sans-serif;
      line-height: 32px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: #f8f8f8;
    }
  }

  main {
    flex: 8;

    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      width: 100%;
      max-width: 320px;
      text-align: center;

      h2 {
        font-size: 24px;
        margin: 64px 0 24px;
        font-family: 'Poppins', sans-serif;
      }

      > button {
        margin-top: 64px;
        height: 50px;
        border-radius: 8px;
        font-weight: 500;
        background: #ea4335;
        color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        border: 0;

        transition: filter 0.2;

        img {
          margin-right: 8px;
        }

        &:hover {
          filter: brightness(0.9);
        }
      }

      > img {
        align-self: center;
      }

      //! Separador
      div {
        font-size: 14px;
        color: #a8a8b3;
        margin: 32px 0;

        display: flex;
        align-items: center;

        &:before {
          content: '';
          flex: 1;
          height: 1px;
          background: #a8a8b3;
          margin-right: 16px;
        }

        &:after {
          content: '';
          flex: 1;
          height: 1px;
          background: #a8a8b3;
          margin-left: 16px;
        }
      }

      form {
        > input {
          width: 100%;

          height: 50px;
          border-radius: 8px;
          padding: 0 16px;
          background: #fff;
          border: 1px solid #a8a8b3;
        }

        > label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          margin-left: 5px;

          input {
            background: red;
          }
        }

        a {
          color: #a8a8b3;
          display: block;
          text-align: left;
          margin-left: 5px;
          margin-top: 5px;

          transition: all 0.2s;

          &:hover {
            filter: brightness(110%);
          }
        }

        button {
          margin-top: 16px;
          width: 100%;
        }
      }

      p {
        font-size: 14px;
        color: #737380;
        margin-top: 16px;

        a {
          color: #e559f9;
        }
      }
    }
  }
`;
