"use server";
import NovaTarefa from "@/components/form/novaTarefa";
import List from "@/components/list/list";
import axios from "axios";
import type { Data } from "@/utils/types";

export default async function Page() {
  let tasks: Data[] = [];

  try {
    const response = await axios.get<Data[]>(
      `${process.env.NEXT_PUBLIC_URL_API}/tasks`,
    );
    tasks = response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("STATUS:", error.response?.status);
    }
  }

  return (
    <>
      <h1>Seja bem-vindo ao To-Do List com Jest</h1>

      <NovaTarefa />

      <List list={tasks} />
    </>
  );
}