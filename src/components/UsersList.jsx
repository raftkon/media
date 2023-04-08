import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";

const UsersList = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }
  if (error) {
    return <div className="">Error!</div>;
  }
  return <div>{data.length}</div>;
};

export default UsersList;
