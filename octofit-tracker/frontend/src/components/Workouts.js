import React from 'react';

function Workouts() {
  return (
    <div className="card">
      <div className="card-header bg-warning text-dark">
        Workouts
      </div>
      <div className="card-body">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {/* Workout rows will go here */}
            <tr>
              <td colSpan="4" className="text-center">No workouts available.</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-warning">Suggest Workout</button>
      </div>
    </div>
  );
}

export default Workouts;
