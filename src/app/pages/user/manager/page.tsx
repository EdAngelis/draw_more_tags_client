import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <>
      <div>
        <div>Sign Up Page</div>
        <Link href="/pages/user/login">Go to Sign In Page</Link>
      </div>
    </>
  );
}
