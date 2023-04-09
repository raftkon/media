import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser, deleteUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import UsersLisItem from "./UsersLisItem";

const UsersList = () => {
  const [isLoadingUsers, loadingUsersError, doFetchUsers] =
    useThunk(fetchUsers);
  const [isCreatingUser, creatingUserError, doCreateUser] = useThunk(addUser);

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div className="">Error fetching</div>;
  } else {
    content = data.map((user) => {
      return <UsersLisItem key={user.id} user={user} />;
    });
  }
  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {creatingUserError && "Error creating user..."}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
