import { User } from "@auth0/nextjs-auth0/types";

// export default async function Auth0ResetPassword(userData: User) {
//   try {
//     const response = await fetch(
//       `https://${process.env.AUTH0_DOMAIN}/dbconnections/change_password`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           client_id: process.env.AUTH0_CLIENT_ID,
//           email: userData.email,
//           connection: "Username-Password-Authentication",
//         }),
//       },
//     );
//     const text = await response.text(); 
//     return text;
//   } catch (error) {
//     console.error(error);
//     return `error: "Failed to send reset email"`;
//   }
// }
