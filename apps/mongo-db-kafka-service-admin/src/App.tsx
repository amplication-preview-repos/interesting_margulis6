import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PostStatsList } from "./postStats/PostStatsList";
import { PostStatsCreate } from "./postStats/PostStatsCreate";
import { PostStatsEdit } from "./postStats/PostStatsEdit";
import { PostStatsShow } from "./postStats/PostStatsShow";
import { CommentStatsList } from "./commentStats/CommentStatsList";
import { CommentStatsCreate } from "./commentStats/CommentStatsCreate";
import { CommentStatsEdit } from "./commentStats/CommentStatsEdit";
import { CommentStatsShow } from "./commentStats/CommentStatsShow";
import { UserActivityList } from "./userActivity/UserActivityList";
import { UserActivityCreate } from "./userActivity/UserActivityCreate";
import { UserActivityEdit } from "./userActivity/UserActivityEdit";
import { UserActivityShow } from "./userActivity/UserActivityShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"MongoDB-Kafka-Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PostStats"
          list={PostStatsList}
          edit={PostStatsEdit}
          create={PostStatsCreate}
          show={PostStatsShow}
        />
        <Resource
          name="CommentStats"
          list={CommentStatsList}
          edit={CommentStatsEdit}
          create={CommentStatsCreate}
          show={CommentStatsShow}
        />
        <Resource
          name="UserActivity"
          list={UserActivityList}
          edit={UserActivityEdit}
          create={UserActivityCreate}
          show={UserActivityShow}
        />
      </Admin>
    </div>
  );
};

export default App;
