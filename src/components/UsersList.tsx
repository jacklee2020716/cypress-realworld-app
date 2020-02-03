import React from "react";

import UserListItem from "./UserListItem";
import List from "@material-ui/core/List";
import { User } from "../models";

export interface UsersListProps {
  users: User[];
  setReceiver: Function;
}

const UsersList: React.FC<UsersListProps> = ({ users, setReceiver }) => {
  return (
    <List data-test="users-list">
      {users &&
        users.map((user: User) => (
          <UserListItem key={user.id} user={user} setReceiver={setReceiver} />
        ))}
    </List>
  );
};

export default UsersList;
