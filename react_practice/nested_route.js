<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="settings" element={<Settings />} />
</Route>;

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

/*React Router allows nested routes. Only the content changes when navigating.
 <Outlet /> is where the nest page appears*/
