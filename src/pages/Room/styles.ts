import styled, { css } from 'styled-components';

export const Container = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;

    > div {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 45px;
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;

    > div:first-child {
      margin: 32px auto;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: #29292e;
      }

      span {
        margin-left: 16px;
        background: #e559f9;
        border-radius: 9999px;
        padding: 8px 16px;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: #fefefe;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
        resize: vertical;
        min-height: 130px;
        max-height: 500px;
      }

      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        > div {
          display: flex;
          align-items: center;

          > img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }

          > span {
            margin-left: 8px;
            color: #29292e;
            font-size: 14px;
            font-weight: 500;
          }
        }

        > span {
          font-size: 14px;
          color: #737380;
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: #835afd;
            text-decoration: underline;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
          }
        }
      }
    }

    > div:last-child {
      margin-top: 32px;
    }
  }
`;

export const ButtonLike = styled.button<{ liked: boolean }>`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  color: #737380;

  ${props =>
    props.liked &&
    css`
      color: #835afd;
      svg path {
        stroke: #835afd;
      }
    `};
`;
