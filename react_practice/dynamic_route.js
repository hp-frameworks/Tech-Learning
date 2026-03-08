<Route path="/users/:id" element={<UserProfile />} /> /
  users /
  1 /
  users /
  5 /
  users /
  100;

//:id is a route parameter that means a dynamic value. If captures a dynamic value from URL.
// The component is read using useParams()

import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
}

/* /user/7 = user ID: 7