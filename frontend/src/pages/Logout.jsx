import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("로그인 상태가 아닙니다.");
      return;
    }
    try {
      await logout(token); // Call logout API
      localStorage.removeItem("access_token"); // Clear token
      alert("로그아웃 성공");
      navigate("/login"); // Redirect to login
    } catch (error) {
      alert("로그아웃에 실패했습니다.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600"
    >
      로그아웃
    </button>
  );
}
