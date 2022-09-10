import * as React from 'react';
import '../styles/header.css'
export interface header {
}

export default function Header (props: header) {
    const [unscrolled, setScrolled] = React.useState(false)

  return (
    <div className='unscrolled?'>
      <h1>Header</h1>
    </div>
  );
}
