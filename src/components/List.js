import React from 'react'

function List({children,layout}) {
    let style='circle';
    switch(layout){
        case 'numbered':
            style='upper-roman' ;
        break;
        case 'alpha':
            style='lower-alpha' ;
        break;
        default:
            style='circle';
        
        
        }

  return (
    <ul style={{listStyleType:style}}>
        {
            children.map(it=><li>{it.title}</li>)
        }
    </ul>
  )
}

export default List
