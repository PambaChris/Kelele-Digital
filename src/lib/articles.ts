import heroPlayer from "@/assets/hero-player.jpg";
import harambee from "@/assets/harambee.jpg";
import premierLeague from "@/assets/premier-league.jpg";
import stadium from "@/assets/stadium.jpg";
import boot from "@/assets/boot.jpg";
import coach from "@/assets/coach.jpg";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Harambee Stars" | "Premier League" | "FKF" | "Transfers" | "Opinion";
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

export const articles: Article[] = [
  {
    slug: "harambee-stars-afcon-qualifier-comeback",
    title: "Harambee Stars roar back in Nairobi to keep AFCON dream alive",
    excerpt:
      "A second-half surge at Kasarani flips the group on its head. Inside the tactical switch that changed the night.",
    category: "Harambee Stars",
    author: "Brian Otieno",
    date: "Jul 20, 2026",
    readTime: "6 min",
    image: heroPlayer,
    featured: true,
  },
  {
    slug: "mccarthy-tactical-blueprint",
    title: "Benni McCarthy's blueprint: how Kenya are pressing higher",
    excerpt: "The gaffer's fingerprints are all over the new-look midfield.",
    category: "Harambee Stars",
    author: "Faith Wanjiru",
    date: "Jul 18, 2026",
    readTime: "5 min",
    image: coach,
  },
  {
    slug: "wanyama-farewell",
    title: "Wanyama's farewell: an era ends, a standard remains",
    excerpt: "The captain hangs up his boots. Kenyan football will feel the void.",
    category: "Opinion",
    author: "Dennis Kimani",
    date: "Jul 16, 2026",
    readTime: "4 min",
    image: boot,
  },
  {
    slug: "olunga-goal-of-the-season",
    title: "Olunga's overhead kick shortlisted for goal of the season",
    excerpt: "The Al-Duhail striker keeps proving Kenya produces world-class finishers.",
    category: "Transfers",
    author: "Sharon Achieng",
    date: "Jul 14, 2026",
    readTime: "3 min",
    image: premierLeague,
  },
  {
    slug: "gor-mahia-title-race",
    title: "Gor Mahia edge closer to a 21st league crown",
    excerpt: "A gritty win at Nyayo pushes K'Ogalo five points clear at the summit.",
    category: "FKF",
    author: "Kevin Mwangi",
    date: "Jul 12, 2026",
    readTime: "4 min",
    image: stadium,
  },
  {
    slug: "arsenal-title-window",
    title: "Arsenal fans in Nairobi believe: is this finally their year?",
    excerpt: "Inside the Gunners viewing culture from Westlands to Kayole.",
    category: "Premier League",
    author: "Faith Wanjiru",
    date: "Jul 10, 2026",
    readTime: "5 min",
    image: premierLeague,
  },
  {
    slug: "man-united-crisis",
    title: "Man United's crisis, seen from a Kibera fan hall",
    excerpt: "The Red Devils faithful in Nairobi are running out of patience.",
    category: "Premier League",
    author: "Brian Otieno",
    date: "Jul 8, 2026",
    readTime: "6 min",
    image: coach,
  },
  {
    slug: "harambee-starlets-rising",
    title: "Harambee Starlets are quietly rewriting the record books",
    excerpt: "The women's national team is on a run few saw coming.",
    category: "Harambee Stars",
    author: "Sharon Achieng",
    date: "Jul 6, 2026",
    readTime: "4 min",
    image: harambee,
  },
];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const scores = [
  { home: "Gor Mahia", away: "AFC Leopards", score: "2 - 1", tag: "FKF Premier League" },
  { home: "Harambee Stars", away: "Ivory Coast", score: "1 - 1", tag: "AFCON Qualifier" },
  { home: "Arsenal", away: "Chelsea", score: "3 - 0", tag: "Premier League" },
  { home: "Tusker FC", away: "Bandari", score: "0 - 0", tag: "FKF Premier League" },
  { home: "Man City", away: "Liverpool", score: "2 - 2", tag: "Premier League" },
  { home: "KCB", away: "Kariobangi Sharks", score: "1 - 3", tag: "FKF Premier League" },
];
