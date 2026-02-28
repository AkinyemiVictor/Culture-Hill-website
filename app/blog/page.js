import LegacyPage from "../../components/LegacyPage";
import { getLegacyPage, getLegacyPageConfig } from "../../lib/legacy-pages";

const pageConfig = getLegacyPageConfig("blog");

export const dynamic = "force-static";

export const metadata = {
  title: pageConfig.title,
  description: pageConfig.description,
};

export default async function BlogPage() {
  const page = await getLegacyPage("blog");

  return (
    <LegacyPage
      markup={page.markup}
      stylesheets={page.stylesheets}
      scripts={page.scripts}
    />
  );
}
