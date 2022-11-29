import React from "react";
import DashboardPanel from "./DashboardPanel";
import Table from "./TableStudents";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <DashboardPanel/>
          <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
            <Table />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
