"use client";

import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) return <p>Not logged in</p>;

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Name: {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>

      <img
        src={session.user?.image || ""}
        width={100}
        height={100}
        className="img-bg-white avatar"
        alt={session.user?.name || "user avatar"}
      />

      <br />

      <button onClick={() => signOut({ callbackUrl: '/login' })}>Logout</button>
    </div>
  );
}

// 2

// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import { authOptions } from "@/lib/auth";

// export default async function Dashboard() {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     redirect("/login"); // ⬅️ HARD redirect, no UI
//   }

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <p>Welcome {session.user?.email}</p>
//     </div>
//   );
// }