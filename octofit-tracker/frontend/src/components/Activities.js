import React from 'react';

function Activities() {
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        Activities
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Calories</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Activity rows will go here */}
            <tr>
              <td colSpan="5" className="text-center">No activities yet.</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-success">Add Activity</button>
      </div>
    </div>
  );
}

export default Activities;
