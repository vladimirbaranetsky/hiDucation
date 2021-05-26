import React from "react";
import style from "./Dashboard.module.css";

const Dashboard = () => {
    return <React.Fragment>
        <div className={style.dashboard}>
            <div className={style.dashboard__header}>
                <div className={style.dashboard__header_strip}>
                    <div/>
                </div>
                <span className={style.dashboard__header_title}>Dashboard</span>
            </div>
        </div>
    </React.Fragment>
}

export default Dashboard;