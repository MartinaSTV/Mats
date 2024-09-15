"use client";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = { user: "user", ok: true };

    if (res.ok) {
      // Hantera framgångsrik inloggning
    } else {
      // Hantera fel
    }
  };

  return (
    <section className="flex flex-col items-center border-b min-h-[87vh]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col mb-10 md:w-[600px] sm:w-[300px]"
      >
        <h2 className="mt-5 mb-5 font-bold text-xl">Logga in som Admin</h2>
        <div className="flex flex-col mt-5">
          <label htmlFor="name">E-mail</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setEmail(e.target.value)}
            className="border h-[40px] w-[100%] p-3"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="password">Lösenord</label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border h-[40px] w-[100%] p-3"
          />
        </div>
        <div>
          <button
            type="submit"
            className="mt-10 h-[40px] w-[150px] self-center bg-black text-white rounded font-bold"
          >
            Glömt lösenord
          </button>
        </div>
        <button
          onClick={() => {
            login();
          }}
          type="submit"
          className="mt-10 h-[60px] w-[150px] self-center bg-black text-white rounded font-bold"
        >
          Logga in
        </button>
      </form>
    </section>
  );
};
export default Login;
