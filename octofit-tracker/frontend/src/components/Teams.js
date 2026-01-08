import React from 'react';

function Teams() {
  return (
    <div className="card">
      <div className="card-header bg-info text-white">
        Teams
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Members</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Team rows will go here */}
            <tr>
              <td colSpan="3" className="text-center">No teams yet.</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary">Create Team</button>
      </div>
    </div>
  );
}

export default Teams;
