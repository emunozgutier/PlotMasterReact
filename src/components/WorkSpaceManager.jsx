import PropTypes from 'prop-types';
import WorkSpace from './WorkSpace';
import { useState } from 'react';

function WorkSpaceManager({ headers, tabDataFrame }) {
    const [workspaces, setWorkspaces] = useState([
        { id: 1, xAxisHeaders: '', yAxisHeaders: [], plotType: 'scatter' }
    ]);
    const [activeWorkspaceId, setActiveWorkspaceId] = useState(1);

    const addWorkspace = () => {
        const newId = workspaces.length ? workspaces[workspaces.length - 1].id + 1 : 1;
        setWorkspaces([...workspaces, { id: newId, xAxisHeaders: '', yAxisHeaders: [], plotType: 'scatter' }]);
        setActiveWorkspaceId(newId);
    };

    const updateXAxisHeaders = (id, newHeaders) => {
        setWorkspaces(workspaces.map(ws => ws.id === id ? { ...ws, xAxisHeaders: newHeaders } : ws));
    };

    const updateYAxisHeaders = (id, newHeaders) => {
        setWorkspaces(workspaces.map(ws => ws.id === id ? { ...ws, yAxisHeaders: newHeaders } : ws));
    };

    const updatePlotType = (id, newPlotType) => {
        setWorkspaces(workspaces.map(ws => ws.id === id ? { ...ws, plotType: newPlotType } : ws));
    };

    return (
        <div className="h-100">
            <div className="tabs">
                {workspaces.map(ws => (
                    <button
                        key={ws.id}
                        onClick={() => setActiveWorkspaceId(ws.id)}
                        className={`btn ${activeWorkspaceId === ws.id ? 'btn-primary' : 'btn-secondary'}`}
                    >
                        Workspace {ws.id}
                    </button>
                ))}
                <button onClick={addWorkspace} className="btn btn-secondary">+</button>
            </div>
            <div className="tab-content h-100">
                {workspaces.map(ws => (
                    ws.id === activeWorkspaceId && (
                        <WorkSpace
                            key={ws.id}
                            headers={headers}
                            xAxisHeaders={ws.xAxisHeaders}
                            setXAxisHeaders={(newHeaders) => updateXAxisHeaders(ws.id, newHeaders)}
                            yAxisHeaders={ws.yAxisHeaders}
                            setYAxisHeaders={(newHeaders) => updateYAxisHeaders(ws.id, newHeaders)}
                            plotType={ws.plotType}
                            setPlotType={(newPlotType) => updatePlotType(ws.id, newPlotType)}
                            tabDataFrame={tabDataFrame}
                        />
                    )
                ))}
            </div>
        </div>
    );
}

WorkSpaceManager.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    tabDataFrame: PropTypes.object,
};

export default WorkSpaceManager;