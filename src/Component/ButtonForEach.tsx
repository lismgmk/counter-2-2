import React from 'react';
import s from './ButtonForEach.module.css';

export type ButtonIncType = {
    title: string
    onClickButton: (e : any) => void

    disable: boolean

}

export function ButtonForEach(props : ButtonIncType) {



  return (
      <div
          className={`${s.buttonInc} ${ props.disable ? s.disable : null}`}
          onClick={props.onClickButton }
      >
          {props.title}
      </div>
  );
}


