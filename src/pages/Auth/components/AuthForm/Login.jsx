import React, { useState } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const isValid = inputs.email.includes("@") && inputs.password.length >= 5;

  return (
    <>
      <input
        id="email"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <input
        id="password"
        type="password"
        placeholder="비밀번호"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <button
        type="button"
        disabled={!isLogin}
        style={{
          backgroundColor: isValid ? "#0095f6" : "#65b5fa",
        }}
      >
        로그인
      </button>
    </>
  );
};

export default LoginPage;
