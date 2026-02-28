import LegacyPage from "../../components/LegacyPage";
import { getLegacyPage, getLegacyPageConfig } from "../../lib/legacy-pages";

const pageConfig = getLegacyPageConfig("blogPage");

export const dynamic = "force-static";

export const metadata = {
  title: pageConfig.title,
  description: pageConfig.description,
};

export default async function BlogPostPage() {
  const page = await getLegacyPage("blogPage");

  return (
    <LegacyPage
      markup={page.markup}
      stylesheets={page.stylesheets}
      scripts={page.scripts}
    />
  );
}
