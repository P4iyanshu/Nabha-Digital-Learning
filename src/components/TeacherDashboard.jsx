import React, { useState } from "react";
import { announcements } from "../data/announcements";
import MessageBoard from "./MessageBoard";

export default function TeacherDashboard({ user, onLogout }) {
  const [newAnnouncement, setNewAnnouncement] = useState("");

  const addAnnouncement = () => {
    if (newAnnouncement.trim()) {
      announcements.push({ id: Date.now(), message: newAnnouncement });
      setNewAnnouncement("");
      alert("Announcement added!");
    }
  };

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name} (Teacher)</h2>
      <button onClick={onLogout}>Logout</button>

      <section>
        <h3>📢 Post Announcements</h3>
        <input
          value={newAnnouncement}
          onChange={(e) => setNewAnnouncement(e.target.value)}
          placeholder="Type announcement..."
        />
        <button onClick={addAnnouncement}>Post</button>
      </section>

      <section>
        <h3>💬 Teacher-Student Discussion</h3>
        <MessageBoard />
      </section>
    </div>
  );
}
