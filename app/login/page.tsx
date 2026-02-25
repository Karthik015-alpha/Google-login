"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>

      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="google-btn"
      >
        <img
          src="/google-color.svg"
          alt="Google logo"
          className="google-logo"
          width={20}
          height={20}
        />
        {/* <span style={{ marginLeft: 8 }}>Sign in with Google</span> */}
      </button>
    </div>
  );
}

// 2

// "use client";

// import { signIn } from "next-auth/react";
// import { useEffect } from "react";

// export default function Login() {
//   useEffect(() => {
//     signIn("google", {
//       callbackUrl: "/dashboard",
//       prompt: "select_account",
//     });
//   }, []);

//   return <p>Redirecting to Google login…</p>;
// }