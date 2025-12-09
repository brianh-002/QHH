"use client";
import Auth0ResetPassword from "@/lib/auth0Utils";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div>
        <div>Loading user profile...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="profile-card action-card">
      <img
        src={user.picture || testPfp}
        alt={user.name}
        width={200}
        height={200}
      />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => Auth0ResetPassword(user)}>Change Password</button>
    </div>
  );
}
