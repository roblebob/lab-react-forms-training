import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [formName, setFormName] = useState("");
  const [formImage, setFormImage] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formProgram, setFormProgram] = useState("-- None --");
  const [formGraduationYear, setFormGraduationYear] = useState(0);
  const [formGraduated, setFormGraduated] = useState(false);

  const [password, setPassword] = useState("");

  const handleFormName = (e) => {
    console.log(e.target.value);
    setFormName(e.target.value);
  };

  const handleFormImage = (e) => {
    setFormImage(e.target.value);
  };

  const handleFormPhone = (e) => {
    setFormPhone(e.target.value);
  };

  const handleFormEmail = (e) => {
    setFormEmail(e.target.value);
  };

  const handleFormProgram = (e) => {
    setFormProgram(e.target.value);
  };

  const handleFormGraduationYear = (e) => {
    setFormGraduationYear(e.target.value);
  };

  const handleFormGraduated = (e) => {
    setFormGraduated(e.target.checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName: formName,
      image: formImage,
      phone: formPhone,
      email: formEmail,
      program: formProgram,
      graduationYear: formGraduationYear,
      graduated: formGraduated,
    };

    const newStudents = [...students, newStudent];
    setStudents(newStudents);

    // reset form
    setFormName("");
    setFormImage("");
    setFormPhone("");
    setFormEmail("");
    setFormProgram("-- None --");
    setFormGraduationYear(0);
    setFormGraduated(false);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              onChange={handleFormName}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              onChange={handleFormImage}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              onChange={handleFormPhone}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleFormEmail}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleFormProgram}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={handleFormGraduationYear}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              onChange={handleFormGraduated}
            />
          </label>

          <button type="submit" onClick={handleFormSubmit}>Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
