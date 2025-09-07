// interfaces/index.ts

export interface CardProps {
  title: string;
  description: string;
  image: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}
