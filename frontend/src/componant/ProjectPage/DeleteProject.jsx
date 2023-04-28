import { useState } from "react";
import axios from "axios";

function handleDeleteClick(projectId) {
  const confirmed = window.confirm("Confirm Delete Project");
  if (confirmed) {
    axios.delete(`http://127.0.0.1:5000/projects/delete/${projectId}`)
      .then(response => {
        console.log("Project successfully deleted");
        window.location.href = "/Project";
        // ทำการอัพเดท UI หรือโหลดหน้าใหม่เพื่อแสดงรายการโปรเจกต์ที่เหลืออยู่
      })
      .catch(error => {
        console.error("Failed to delete project", error);
        // แสดงข้อผิดพลาดที่ console หรือแจ้งเตือนผู้ใช้งาน
      });
  }
}

export default handleDeleteClick;