import React, { useState } from 'react';

// Recursive component to render folders and files
const FileSystemItem = ({ item, path }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  if (item.type === 'folder') {
    return (
      <div>
        <div onClick={handleToggle} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          📁 {path}
        </div>
        {expanded && (
          <div style={{ marginLeft: '20px' }}>
            {Object.keys(item.children).map((key) => (
              <FileSystemItem key={key} item={item.children[key]} path={key} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return <div>📄 {path}</div>;
  }
};
export default FileSystemItem;