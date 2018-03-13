export class ProjectInfo {
    title: string;
    image: string;
    description: string;
    gallery: string[];
    links: Link[];
}

export class Link {
    name: string;
    icon: string;
    link: string;
}