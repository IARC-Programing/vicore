import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function handleDeleteClick(projectId) {
  const confirmed = window.confirm("คุณต้องการลบโปรเจ็กต์นี้ใช่หรือไม่ ?");
  if (confirmed) {
    axios
      .delete(`http://127.0.0.1:5000/projects/delete/${projectId}`)
      .then(function (response) {
        Swal.fire({
          title: "Success!",
          text: "Your delete project successfully",
          icon: "success",
          confirmButtonText: "OK"
        }).then(() => {
          window.location.href = "/Project";
        });
      })
      .catch((error) => {
        console.error("Failed to delete project", error);
        // แสดงข้อผิดพลาดที่ console หรือแจ้งเตือนผู้ใช้งาน
      });
  }
}

export default handleDeleteClick;
