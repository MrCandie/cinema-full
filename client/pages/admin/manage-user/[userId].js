import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import UserDetail from "../../../components/admin/manage-users/users/UserDetail";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser } from "../../../util/http";

export default function Userdetail() {
  const router = useRouter();
  const userId = router.query.userId;

  const [user, setUser] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUser(userId);
        setUser(response.data.data.user);
      } catch (err) {
        // setLoading(false);
        toast.error("An unknown error occurred...Try again");
        return;
      }
    }
    fetchUser();
  }, []);

  return (
    <Fragment>
      <UserDetail user={user} />
      <ToastContainer position="top-right" autoClose={2000} />
    </Fragment>
  );
}
