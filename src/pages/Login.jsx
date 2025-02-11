import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";  

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "20225684" && password === "l4b22B3X") {
      navigate("/home"); 
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="container">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tài khoản"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật Khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Đăng nhập</button>
      </form>
      <Link to="/register" className="link">
        Bạn chưa có tài khoản? Tạo tài khoản mới
      </Link>
    </div>
  );
};

export default Login;
