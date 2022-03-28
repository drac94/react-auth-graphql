import React from 'react';

type Props = {
  onClick: () => void;
  label?: string;
};

const Button = (props: Props) => {
  const { onClick, label } = props;
  return <button onClick={onClick}>{label || 'Hello'}</button>;
};

export default Button;
