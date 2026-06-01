import { notFound } from "next/navigation";
import { isLang } from "@/content/site-content";
import Site from "../_components/Site";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Site lang={lang} />;
}
