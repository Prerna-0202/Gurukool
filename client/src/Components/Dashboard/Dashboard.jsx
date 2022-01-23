import React from "react";
import Flex from "../Ui/Flex/Flex";
import Classes from "./DashBoard.module.css";
function Dashboard(props) {
  return (
    <Flex className={Classes.Dashboard}>
      <div className={Classes.Setting_icon}>
        <i className="fas fa-cog"></i>
      </div>
    </Flex>
  );
}

export default Dashboard;
