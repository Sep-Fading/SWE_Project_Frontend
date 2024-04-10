import axiosWithAuth from "./axiosWithAuth";


async function flagPassword(user_id: string) {
  try {
    const response = await axiosWithAuth.patch(
      `/accounts/api/user-info/flag-password/${user_id}/`
    );
    console.log("response: ", response);
  } catch (error) {
    console.error("Failed to update password flag: ", error);
  }
}

export { flagPassword };
