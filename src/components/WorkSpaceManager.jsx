import PropTypes from 'prop-types';
import WorkSpace from './WorkSpace.jsx';
import { useState, useEffect } from 'react';

function WorkSpaceManager({ headers, tabDataFrame }) {
  const [workspaces, setWorkspaces] = useState([{ id: 1, headers, tabDataFrame }]);
  const [activeWorkspace, setActiveWorkspace] = useState(1);

  useEffect(() => {
    setWorkspaces((prevWorkspaces) =>
      prevWorkspaces.map((workspace) =>
        workspace.id === activeWorkspace ? { ...workspace, headers, tabDataFrame } : workspace
      )
    );
  }, [headers, tabDataFrame, activeWorkspace]);

  const addWorkspace = () => {
    const newId = workspaces.length + 1;
    setWorkspaces([...workspaces, { id: newId, headers, tabDataFrame }]);
    setActiveWorkspace(newId);
  };

  const selectWorkspace = (id) => {
    setActiveWorkspace(id);
  };

  return (
    <div>
      <div className="tabs">
        {workspaces.map((workspace) => (
          <button
            key={workspace.id}
            className={activeWorkspace === workspace.id ? 'active' : ''}
            onClick={() => selectWorkspace(workspace.id)}
          >
            Workspace {workspace.id}
          </button>
        ))}
        <button onClick={addWorkspace}>+</button>
      </div>
      <div className="workspace-container">
        {workspaces.map((workspace) =>
          activeWorkspace === workspace.id ? (
            <WorkSpace
              key={workspace.id}
              headers={workspace.headers}
              tabDataFrame={workspace.tabDataFrame}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

WorkSpaceManager.propTypes = {
  tabDataFrame: PropTypes.object,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WorkSpaceManager;