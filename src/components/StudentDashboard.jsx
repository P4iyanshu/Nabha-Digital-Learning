import React, { useState } from "react";
import { lessons } from "../data/lessons";
import { announcements } from "../data/announcements";
import LessonViewer from "./lessonviewer";
import Quiz from "./Quiz";
import MessageBoard from "./MessageBoard";

export default function StudentDashboard({ user, onLogout }) {
  const [selectedLesson, setSelectedLesson] = useState(null);

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name} (Class {user.grade})</h2>
      <button onClick={onLogout}>Logout</button>

      <section>
        <h3>📢 Announcements</h3>
        <ul>
          {announcements.map((a) => (
            <li key={a.id}>{a.message}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>📚 Lessons</h3>
        <ul>
          {lessons[user.grade]?.map((l) => (
            <li key={l.id}>
              <button onClick={() => setSelectedLesson(l)}>{l.title}</button>
            </li>
          ))}
        </ul>
      </section>

      {selectedLesson && <LessonViewer lesson={selectedLesson} />}

      <section>
        <h3>📝 Practice Quiz</h3>
        <Quiz topic="fractions" />
      </section>

      <section>
        <h3>💬 Discussion Board</h3>
        <MessageBoard />
      </section>
    </div>
  );
}
