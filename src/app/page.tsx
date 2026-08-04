import Form from "@/components/form/form";
import List from "@/components/list/list";
import TemplateItem from "@/components/templateItem/templateitem";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return <>
    <h1>Seja bem-vindo ao To-Do List com Jest</h1>
    <Form />
    <List />

    <TemplateItem text="Exemplo de tarefa" description="Esta é uma tarefa de exemplo" status="pending" />
  </>;
}
