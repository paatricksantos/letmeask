import { ReactNode } from 'react';
import { Container } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  content,
  author,
  isHighlighted = false,
  isAnswered = false,
  children,
}: QuestionProps) {
  return (
    <Container
      isAnswered={isAnswered}
      isHighlighted={isHighlighted && !isAnswered}
    >
      <p>{content}</p>
      <footer>
        <div>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </Container>
  );
}
