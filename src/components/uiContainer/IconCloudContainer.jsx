import { IconCloud } from "../ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "notion",
  "react",
  "android",
  "apple",
  "html5",
  "css",
  "astro",
  "mysql",
  "nginx",
  "vercel",
  "netlify",
  "git",
  "github",
  "gitlab",
  "steam",
  "wechat",
  "qq",
  "figma",
];

export function IconCloudContainer() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
