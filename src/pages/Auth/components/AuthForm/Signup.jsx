import React, { useState } from "react";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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
        id="fullName"
        type="text"
        placeholder="성명"
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <input
        id="username"
        type="text"
        placeholder="사용자 이름"
        value={inputs.usernamename}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <input
        id="password"
        type={showPassword ? "text" : "password"}
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
        가입하기
      </button>
    </>
  );
};

export default Signup;
