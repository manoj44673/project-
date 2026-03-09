import "./App.css";

function App() {
  const subjects = [
    { name: "Data Structures", percent: 82 },
    { name: "Database Management Systems", percent: 74 },
    { name: "Computer Networks", percent: 58 },
    { name: "Operating Systems", percent: 91 },
    { name: "Software Engineering", percent: 67 },
  ];

  const getStatus = (p) => {
    if (p >= 75) return "good";
    if (p >= 60) return "warning";
    return "low";
  };

  const getText = (p) => {
    if (p >= 75) return "Good";
    if (p >= 60) return "Warning";
    return "Low";
  };

  return (
    <div className="container">

      <div className="header">
        <h1>Student Attendance Dashboard</h1>
        <p>University Portal</p>
      </div>

      <div className="student-info">
        <p><strong>Student Name:</strong> MANOJ</p>
        <p><strong>Register Number:</strong> 2500032577</p>
        <p><strong>Department:</strong> Computer Science and Engineering</p>
      </div>

      <h2>Subject Attendance</h2>

      <div className="cards">
        {subjects.map((sub, index) => (
          <div className="card" key={index}>
            <h3>{sub.name}</h3>
            <p>Attendance Status: {getText(sub.percent)}</p>
            <p>{sub.percent}%</p>

            <div className="progress-bar">
              <div
                className={`progress ${getStatus(sub.percent)}`}
                style={{ width: sub.percent + "%" }}
              ></div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default App;