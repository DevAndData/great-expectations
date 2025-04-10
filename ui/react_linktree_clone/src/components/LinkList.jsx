import React from 'react';
import LinkButton from './LinkButton';

function LinkList({ links }) {
  return (
    <div className="links">
      {links.map((link) => (
        <LinkButton
          key={link.id}
          text={link.text}
          url={link.url}
          iconKey={link.iconKey}
        />
      ))}
    </div>
  );
}

export default LinkList;