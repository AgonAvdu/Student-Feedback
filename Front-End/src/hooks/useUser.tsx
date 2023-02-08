import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";


import { getToken } from "../helpers";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getUser } from "../store/auth/selectors";
import { setUser } from "../store/auth/slice";
import { getCurrentUser } from "../api/Auth/getCurrentUser";

const useUser = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);

  const { refetch } = useQuery(["user/get"], getCurrentUser, {
    enabled: false,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    if (!!getToken() && !user?.id) {
      const response = await refetch();
      const {token, ...user} = response.data      
      dispatch(setUser(user));
    }
    setLoading(false);
  };

  return { isLoading: loading };
};

export default useUser;
