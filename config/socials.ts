import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@yawarnoor",
    icon: Icons.gitHub,
    link: "https://github.com/yawarnoor",
  },
  {
    name: "LinkedIn",
    username: "Yawar Noor",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/yawar-noor",
  },

  {
    name: "Gmail",
    username: "yawarnyt",
    icon: Icons.gmail,
    link: "mailto:yawarnyt@gmail.com",
  },
];
