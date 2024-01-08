import { WorkersTypes } from "../../@types/workers/worker";
import { SERVER_URL } from "../../middlewares/env";
import Cookies from "js-cookie";

export async function getWorkersData(): Promise<WorkersTypes> {
  const lang = Cookies.get("lang") || "eng";
  const res = await fetch(`${SERVER_URL}api/v1/worker/content?lang=${lang}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
