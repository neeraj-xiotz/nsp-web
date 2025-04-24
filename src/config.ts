export const SITE = {
  website: "https://NeerajloveCyber.com/", // replace this with your deployed domain
  author: "Neeraj Singh Panghal",
  profile: "https://www.linkedin.com/in/neerajlovecyber/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "NeerajloveCyber",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/neerajlovecyber/nsp-web/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/kolkata", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
