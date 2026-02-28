import { redirect } from "next/navigation";

export default function BlogPostAliasPage({ params }) {
  redirect(`/blog-page?id=${params.id}`);
}
