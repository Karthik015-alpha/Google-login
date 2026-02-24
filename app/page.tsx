"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Google Auth App</h1>

      {/* ❌ NOT LOGGED IN */}
      {!session && (
        <>
          <p>You are not logged in</p>

          <button
            onClick={() =>
              signIn("google", { callbackUrl: "/dashboard" })
            }
          >
            Login with Google
          </button>
        </>
      )}

      {/* ✅ LOGGED IN */}
      {session && (
        <>
          <p>Welcome, {session.user?.name}</p>
          <p>{session.user?.email}</p>

          <img
            src={session.user?.image || ""}
            width={100}
            style={{ borderRadius: "50%" }}
          />

          <br /><br />

          <button onClick={() => router.push("/dashboard")}>
            Go to Dashboard
          </button>

          <br /><br />

          <button onClick={() => signOut({ callbackUrl: "/login" })}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

// 2

// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import { authOptions } from "@/lib/auth";

// export default async function Home() {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     redirect("/login"); // ⬅️ force login
//   }

//   redirect("/dashboard");
// }