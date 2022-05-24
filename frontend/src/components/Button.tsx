import * as React from 'react';
import { MouseEventHandler } from 'react';

const Button = (props: {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
  disabled: boolean;
}) => {
  return (
    <button disabled={props.disabled} onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

export default Button;
