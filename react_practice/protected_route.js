// Requires a log in to access selected route. If user has not logged in = login request

/login
/dashboard
/profile

function ProtectedRoute({ children }) {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/login" />; //sends user to log in page if not logged in
  }

  return children;
}


//usage:
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
