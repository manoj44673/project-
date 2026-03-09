function Navbar({ student }) {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Student Attendance Dashboard</h1>
          <p className="text-sm text-blue-100">
            University Portal
          </p>
        </div>

        <div className="grid gap-2 text-sm sm:grid-cols-3 sm:gap-6">
          <div className="rounded-lg bg-blue-800/60 px-4 py-2">
            <p className="text-blue-100">Student Name</p>
            <p className="font-semibold">{student.name}</p>
          </div>

          <div className="rounded-lg bg-blue-800/60 px-4 py-2">
            <p className="text-blue-100">Register Number</p>
            <p className="font-semibold">{student.registerNumber}</p>
          </div>

          <div className="rounded-lg bg-blue-800/60 px-4 py-2">
            <p className="text-blue-100">Department</p>
            <p className="font-semibold">{student.department}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;