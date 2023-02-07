import { Post } from "@/contents/schema/Post";
import { Project } from "@/contents/schema/Project";
import { makeSource } from "contentlayer/source-files";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

export const rehypePrettyCodeOptions: Partial<Options> = {
  // use a prepackaged theme
  theme: "dracula",
  onVisitHighlightedLine(node) {
    node.properties.className.push("line--highlighted");
  },
};

const contentLayerConfig = makeSource({
  contentDirPath: "src/contents",
  documentTypes: [Post, Project],
  mdx: {
    rehypePlugins: [rehypeCodeTitles, rehypeSlug, [rehypeExternalLinks, { target: "_blank", rel: "noreferrer" }], [rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});

export default contentLayerConfig;
