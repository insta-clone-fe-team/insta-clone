import React, { useState } from "react";
import useSignUpwithEmailAndPassword from "../../../../hooks/useSignUpwithEmailAndPassword";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });

  const { loading, error, signup } = useSignUpwithEmailAndPassword();

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
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <input
        id="password"
        type="password"
        placeholder="비밀번호"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      {error && (
        <div className="error-msg">
          <span>{error.message}</span>
        </div>
      )}
      <button
        type="button"
        disabled={!isLogin}
        isloading={loading}
        onClick={() => signup(inputs)}
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
