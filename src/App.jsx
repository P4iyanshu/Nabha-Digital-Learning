import React, { useState } from "react";
import Login from "./components/login";
import StudentDashboard from "./components/StudentDashboard";
import TeacherDashboard from "./components/TeacherDashboard";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (u) => {
    setUser(u);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} language="en" />;
  }

  if (user.role === "student") {
    return <StudentDashboard user={user} onLogout={handleLogout} />;
  }

  if (user.role === "teacher") {
    return <TeacherDashboard user={user} onLogout={handleLogout} />;
  }

  return <div>Unknown role</div>;
}
