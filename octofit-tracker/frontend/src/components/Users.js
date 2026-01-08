import React from 'react';

function Users() {
  return (
    <div className="card">
      <div className="card-header bg-secondary text-white">
        Users
      </div>
      <div className="card-body">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            {/* User rows will go here */}
            <tr>
              <td colSpan="3" className="text-center">No users found.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
