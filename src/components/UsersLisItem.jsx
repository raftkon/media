import React from "react";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import { deleteUser } from "../store";
import { GoTrashcan } from "react-icons/go";

const UsersLisItem = ({ user }) => {
  const [isLoading, error, doDeleteUser] = useThunk(deleteUser);

  const handleClick = (id) => {
    doDeleteUser(id);
  };
  return (
    <div>
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          <div className="flex items-center gap-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersLisItem;
