"use client";
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
    <div className="flex items-center justify-center">
      <div className="profile-card action-card">
        <img
          src={user.picture }
          alt={user.name}
          width={200}
          height={200}
        />
        <h2>Username: {user.name}</h2>
        <h2>Email: {user.email}</h2>
        {/* <button onClick={async () => await Auth0ResetPassword(user)}>Change Password</button> */}
      </div>
    </div>
  );
}
