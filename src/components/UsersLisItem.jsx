import React, { Fragment } from "react";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import { deleteUser } from "../store";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UsersLisItem = ({ user }) => {
  const [isLoading, error, doDeleteUser] = useThunk(deleteUser);

  const handleClick = (id) => {
    doDeleteUser(id);
  };
  const header = (
    <Fragment>
      <Button
        loading={isLoading}
        rounded
        outline
        onClick={() => handleClick(user.id)}
      >
        <GoTrashcan />
      </Button>
      {error && <div className="">Error deleting user.</div>}
      {user.name}
    </Fragment>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};

export default UsersLisItem;
