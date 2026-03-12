import { PEOPLE, type Person } from "./data";

export interface Project {
  slug: string;
  name: string;
  shortDesc: string;
  body: string;
  videoUrl: string;
  tags: string[];
  funder: string;
  categories: string[];
  people: number[];
}

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const frontmatter = match[1];
  const content = match[2];
  const data: Record<string, unknown> = {};

  for (const line of frontmatter.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim();
    let value: string = line.slice(colonIdx + 1).trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      const inner = value.slice(1, -1);
      if (inner.trim() === "") {
        data[key] = [];
      } else {
        const items = inner.split(",").map((s) => s.trim());
        const allNumbers = items.every((s) => /^\d+$/.test(s));
        data[key] = allNumbers ? items.map(Number) : items;
      }
    } else if (value.startsWith('"') && value.endsWith('"')) {
      data[key] = value.slice(1, -1);
    } else if (value === "true") {
      data[key] = true;
    } else if (value === "false") {
      data[key] = false;
    } else if (/^\d+$/.test(value)) {
      data[key] = Number(value);
    } else {
      data[key] = value;
    }
  }

  return { data, content };
}

const mdFiles = import.meta.glob("../../../content/projects/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function parseProjects(): Project[] {
  return Object.entries(mdFiles).map(([filepath, raw]) => {
    const slug = filepath.split("/").pop()!.replace(/\.md$/, "");
    const { data, content } = parseFrontmatter(raw);
    return {
      slug,
      name: (data.name as string) ?? slug,
      shortDesc: (data.shortDesc as string) ?? "",
      body: content.trim(),
      videoUrl: (data.videoUrl as string) ?? "",
      tags: (data.tags as string[]) ?? [],
      funder: (data.funder as string) ?? "",
      categories: (data.categories as string[]) ?? [],
      people: (data.people as number[]) ?? [],
    };
  });
}

export const PROJECTS: Project[] = parseProjects();

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getPeopleForProject(project: Project): Person[] {
  return project.people
    .map((id) => PEOPLE.find((p) => p.id === id))
    .filter(Boolean) as Person[];
}
