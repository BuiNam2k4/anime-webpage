import React from "react";

import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Giả lập API trả về danh sách tài khoản
      const response = await fetch("http://localhost:8080/api/users");
      const users = await response.json();

      // Kiểm tra thông tin đăng nhập
      console.log("User: ", users);
      const user = users.find(
        (u) =>
          u.email.toLowerCase() === email.toLowerCase() && u.name === password
      );

      if (user) {
        alert("Đăng nhập thành công!");
        <Link to="/anime"></Link>;
        return;
      } else {
        setError("Email hoặc mật khẩu không đúng!");
      }
    } catch (err) {
      setError("Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="mb-60 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Đăng Nhập
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập email của bạn"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mật Khẩu
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Đang đăng nhập..." : "Đăng Nhập"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Chưa có tài khoản?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Đăng ký
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login;
