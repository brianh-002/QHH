export default async function Auth0ResetPassword(UserData) {
  try {
    const response = await fetch(
      "https://${process.env.AUTH0_DOMAIN}/dbconnections/change_password",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: process.env.AUTH0_CLIENT_ID,
          email: user.email,
          connection: "Username-Password-Authentication",
        }),
      },
    );
    const text = await response.text(); // Auth0 returns plain text message
    return res.status(200).json({ message: text });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send reset email" });
  }
}
