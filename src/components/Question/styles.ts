import styled from 'styled-components';

export const Container = styled.div`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + div {
    margin-top: 8px;
  }

  p {
    color: #29292e;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    > div:first-child {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: #737380;
        font-size: 14px;
      }
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;

      transition: filter 0.2;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;
