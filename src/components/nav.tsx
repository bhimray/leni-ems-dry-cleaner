import * as React from 'react';
import menu from '../images/menu-1.svg'

export interface  NavProps {
    onClick:()=>void;

}

export default function Nav (props:  NavProps) {
  return (
    <div>
      <img src={menu} className='menu' onClick={props.onClick}/>
    </div>
  );
}
