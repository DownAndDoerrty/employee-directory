import * as React from 'react';

const Button = (props: { handleClick: any; text: string; disabled: boolean }) => {
  return (
    <button disabled={props.disabled} onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

export default Button;
