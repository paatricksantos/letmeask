import styled, { css } from 'styled-components';

export const Container = styled.button<{ isOutlined: boolean }>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;

  padding: 0 32px;

  ${props =>
    props.isOutlined
      ? css`
          color: #835afd;
          background: #fff;
          border: 1px solid #835afd;
        `
      : css`
          color: #fff;
          background: #835afd;
          border: 0;
        `}

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
