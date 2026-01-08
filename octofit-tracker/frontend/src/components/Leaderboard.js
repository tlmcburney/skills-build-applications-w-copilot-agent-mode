import React from 'react';

function Leaderboard() {
  return (
    <div className="card">
      <div className="card-header bg-success text-white">
        Leaderboard
      </div>
      <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {/* Leaderboard rows will go here */}
            <tr>
              <td colSpan="3" className="text-center">No leaderboard data.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
