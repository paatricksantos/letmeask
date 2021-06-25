import styled, { css } from 'styled-components';

export const Container = styled.div<{
  isAnswered: boolean;
  isHighlighted: boolean;
}>`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isHighlighted &&
    css`
      background: #f4f4ff;
      border: 1px solid #835afd;
    `}
  ${props =>
    props.isAnswered &&
    css`
      background: #dbdcdd;
    `}

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
        ${props =>
          props.isHighlighted &&
          css`
            color: #29292e;
          `}
      }
    }

    > div:last-child {
      display: flex;
      align-items: center;
      gap: 16px;
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
