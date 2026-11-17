
import React from 'react'

const StudentCard = (props) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-1">

      <h2 className="text-lg font-bold text-blue-600">
        {props.name}
      </h2>

      <p>รหัสนักศึกษา: {props.id}</p>
      <p>อายุ: {props.age} ปี</p>
      <p>สาขาวิชา: {props.major}</p>

      <div className="flex gap-2 mt-3">

        <button
          className="flex-1 bg-amber-400 hover:bg-amber-500 rounded-lg py-2"
          onClick={props.onEdit}
        >
          แก้ไข
        </button>

        <button
          className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg py-2"
          onClick={props.onDelete}
        >
          ลบ
        </button>

      </div>

    </div>
  )
}

export default StudentCard
