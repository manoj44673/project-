function AttendanceCard({ subject }) {
  const { name, attendance } = subject;

  const getCardStyle = () => {
    if (attendance > 75) {
      return "border-green-500 bg-green-50 text-green-700";
    }
    if (attendance >= 60 && attendance <= 75) {
      return "border-yellow-500 bg-yellow-50 text-yellow-700";
    }
    return "border-red-500 bg-red-50 text-red-700";
  };

  const getStatus = () => {
    if (attendance > 75) return "Good";
    if (attendance >= 60 && attendance <= 75) return "Warning";
    return "Low";
  };

  return (
    <div
      className={`rounded-xl border-l-8 p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg ${getCardStyle()}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="mt-1 text-sm font-medium">Attendance Status: {getStatus()}</p>
        </div>

        <div className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow">
          {attendance}%
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex justify-between text-sm font-medium">
          <span>Progress</span>
          <span>{attendance}%</span>
        </div>

        <div className="h-3 w-full rounded-full bg-white/80">
          <div
            className="h-3 rounded-full bg-current"
            style={{ width: `${attendance}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceCard;