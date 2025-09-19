import React, { useState } from "react";
import "./Login.css";

export default function Login({ onLogin, language }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");
  const [grade, setGrade] = useState("6");

  const translations = {
    en: {
      welcome: "Welcome to Nabha Digital Learning",
      subtitle: "Quality education for rural students",
      name: "Your Name",
      selectRole: "Select Your Role",
      student: "Student",
      teacher: "Teacher",
      grade: "Select Grade",
      login: "Start Learning",
      enterName: "Please enter your name",
    },
    hi: {
      welcome: "नाभा डिजिटल लर्निंग में आपका स्वागत है",
      subtitle: "ग्रामीण छात्रों के लिए गुणवत्तापूर्ण शिक्षा",
      name: "आपका नाम",
      selectRole: "अपनी भूमिका चुनें",
      student: "छात्र",
      teacher: "शिक्षक",
      grade: "कक्षा चुनें",
      login: "सीखना शुरू करें",
      enterName: "कृपया अपना नाम दर्ज करें",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert(translations[language].enterName);
      return;
    }

    const user = {
      id: Date.now().toString(),
      name: name.trim(),
      role,
      grade: role === "student" ? grade : undefined,
      language,
    };

    onLogin(user);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">
  <img src="./assets/pngwing.com.png" alt="Book" style={{ width: "40px", height: "40px" }} />
</div>
          <h2>{translations[language].welcome}</h2>
          <p>{translations[language].subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>{translations[language].name}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={translations[language].name}
            />
          </div>

          <div className="form-group">
            <label>{translations[language].selectRole}</label>
            <div className="role-options">
              <label className={`role-option ${role === "student" ? "active" : ""}`}>
                <input
                  type="radio"
                  value="student"
                  checked={role === "student"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <div>
                  <div className="role-icon">👤</div>
                  <span>{translations[language].student}</span>
                </div>
              </label>

              <label className={`role-option ${role === "teacher" ? "active" : ""}`}>
                <input
                  type="radio"
                  value="teacher"
                  checked={role === "teacher"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <div>
                  <div className="role-icon">👥</div>
                  <span>{translations[language].teacher}</span>
                </div>
              </label>
            </div>
          </div>

          {role === "student" && (
            <div className="form-group">
              <label>{translations[language].grade}</label>
              <select value={grade} onChange={(e) => setGrade(e.target.value)}>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </div>
          )}

          <button type="submit" className="login-btn">
            {translations[language].login}
          </button>
        </form>
      </div>
    </div>
  );
}
