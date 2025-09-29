import { IconCloud } from "../ui/icon-cloud";

const slugs = [
  "vue.js",
  "javascript",
  "element",
  "notion",
  "flask",
  "tailwindcss",
  "html5",
  "css",
  "axios",
  "mysql",
  "nginx",
  "vite",
  "fastapi",
  "git",
  "github",
  "sqlalchemy",
  "redis",
  "mongodb",
  "openai",
  "modelcontextprotocol",
  "socketdotio"
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
