"use client";

import { px } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Profile() {
  const session = useSession();
  if (session.data?.user) {
    return (
      <div>
        <h1>Signed In: {session.data.user.name}</h1>
      </div>
    );
  }
  return <div>Not signed in</div>;
}
