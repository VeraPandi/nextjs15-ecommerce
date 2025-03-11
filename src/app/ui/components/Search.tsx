import Form from "next/form";

export default function Search({ query }: { query?: string }) {
  return (
    <Form action="/search" scroll={false}>
      <input
        className="input input-bordered w-full min-w-[100px]"
        name="query"
        placeholder="Rechercher"
        defaultValue={query}
      />
    </Form>
  );
}
