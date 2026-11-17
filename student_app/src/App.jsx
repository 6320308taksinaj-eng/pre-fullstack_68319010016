
import React, { useState } from 'react'
import StudentForm from './components/StudentForm'
import StudentCard from './components/StudentCard'

const App = () => {

  const [students, setStudents] = useState([])

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [major, setMajor] = useState('')

  const [editingId, setEditingId] = useState(null)

  // เพิ่มและแก้ไขนักศึกษา
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !age || !major) {
      alert('กรุณากรอกข้อมูลให้ครบ')
      return
    }

    if (editingId !== null) {
      setStudents(students.map((student) =>
        student.id === editingId
          ? { ...student, name, age, major }
          : student
      ))

      alert('แก้ไขข้อมูลเรียบร้อย')
    } else {
      const newStudent = {
        id: Date.now(),
        name,
        age,
        major
      }

      setStudents([...students, newStudent])

      alert('เพิ่มนักศึกษาเรียบร้อย')
    }

    clearForm()
  }

  // ล้างข้อมูลในฟอร์ม
  const clearForm = () => {
    setName('')
    setAge('')
    setMajor('')
    setEditingId(null)
  }

  // เลือกข้อมูลเพื่อแก้ไข
  const handleEdit = (student) => {
    setEditingId(student.id)
    setName(student.name)
    setAge(student.age)
    setMajor(student.major)
  }

  // ลบนักศึกษา
  const handleDelete = (id) => {
    if (window.confirm('ต้องการลบข้อมูลนักศึกษาหรือไม่?')) {
      setStudents(students.filter(
        (student) => student.id !== id
      ))
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-2xl font-bold mb-6 text-center">
          ระบบจัดการข้อมูลนักศึกษา
        </h1>

        <StudentForm
          name={name}
          setName={setName}
          age={age}
          setAge={setAge}
          major={major}
          setMajor={setMajor}
          editingId={editingId}
          onSubmit={handleSubmit}
          onClick={clearForm}
        />

        <h2 className="text-xl font-bold mb-4">
          รายชื่อนักศึกษา ({students.length} คน)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {students.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              age={student.age}
              major={student.major}
              onEdit={() => handleEdit(student)}
              onDelete={() => handleDelete(student.id)}
            />
          ))}

        </div>

      </div>
    </div>
  )
}

export default App
