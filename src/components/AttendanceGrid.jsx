import AttendanceCard from "./AttendanceCard";

function AttendanceGrid({ subjects }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Subject Attendance</h2>
        <p className="mt-1 text-gray-600">
          Overview of attendance percentage for five subjects
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <AttendanceCard key={subject.id} subject={subject} />
        ))}
      </div>
    </section>
  );
}

export default AttendanceGrid;