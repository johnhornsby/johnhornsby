import React from 'react';

export default ({ data }) => {
  if (!data) return null;

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '100px',
        lineHeight: 0,
        width: '100px',
      }}>
      <img
        alt={data.filename}
        style={{ maxHeight: '100%', maxWidth: '100%' }}
        src={data.publicUrlTransformed}
      />
    </div>
  );
};
