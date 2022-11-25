import Link from "next/link";
import React, { useState, memo } from "react";
import { NextPage } from "next";
import InputGroup from "../components/InputGroup";

type ErrorsTypes = {
  email?: string;
  username?: string;
  password?: string;
};

const Register: NextPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ErrorsTypes>({});

  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center h-screen p-6">
        <div className="w-10/12 mx-auto md:w-96">
          <h1 className="mb-2 text-lg font-medium">회원가입</h1>
          <form>
            <InputGroup
              placeholder={"Email"}
              value={email}
              setValue={setEmail}
              error={errors.email}
            />
            <InputGroup
              placeholder={"Username"}
              value={username}
              setValue={setUsername}
              error={errors.username}
            />
            <InputGroup
              placeholder={"Password"}
              value={password}
              setValue={setPassword}
              error={errors.password}
            />
            <button className="w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded">
              회원가입
            </button>
          </form>
          <small>
            이미 가입하셨나요?
            <Link href={{ pathname: "/login" }} legacyBehavior>
              <a className="ml-1 text-blue-500 uppercase">로그인</a>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default memo(Register);