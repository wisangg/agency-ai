// lib/assets.ts

// Data logo perusahaan untuk bagian sponsor/client
export const company_logos: string[] = [
  "/assets/microsoft_logo.png",
  "/assets/zoom_logo.png",
  "/assets/rakuten_logo.png",
  "/assets/coinbase_logo.png",
  "/assets/airbnb_logo.svg",
  "/assets/google_logo.svg",
];

// Objek utama untuk ikon dan gambar UI
const assets = {
  logo: "/assets/logo.svg",
  arrow_icon: "/assets/arrow_icon.svg",
  group_profile: "/assets/group_profile.png",
  bgImage1: "/assets/bgImage1.png",
  bgImage2: "/assets/bgImage2.png",
  hero_img: "/assets/hero_img.png",
  ads_icon: "/assets/ads_icon.svg",
  content_icon: "/assets/content_icon.svg",
  marketing_icon: "/assets/marketing_icon.svg",
  social_icon: "/assets/social_icon.svg",
  menu_icon: "/assets/menu_icon.svg",
  close_icon: "/assets/close_icon.svg",
  work_mobile_app: "/assets/work_mobile_app.png",
  work_fitness_app: "/assets/work_fitness_app.png",
  work_dashboard_management: "/assets/work_dashboard_management.png",
  email_icon: "/assets/email_icon.svg",
  person_icon: "/assets/person_icon.svg",
  facebook_icon: "/assets/facebook_icon.svg",
  twitter_icon: "/assets/twitter_icon.svg",
  instagram_icon: "/assets/instagram_icon.svg",
  linkedin_icon: "/assets/linkedin_icon.svg",
  logo_dark: "/assets/logo_dark.svg",
  menu_icon_dark: "/assets/menu_icon_dark.svg",
  sun_icon: "/assets/sun_icon.svg",
  moon_icon: "/assets/moon_icon.svg",
};

export default assets;

// Definisi tipe data untuk Team (TypeScript)
export interface TeamMember {
  name: string;
  title: string;
  image: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Haley Carter",
    title: "CEO & founder",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    name: "James Walker",
    title: "Ads manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    name: "Jessica Morgan",
    title: "Vice president",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Ashley Bennett",
    title: "Marketing & sales",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Emily Parker",
    title: "Content marketer",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    name: "Ryan Mitchell",
    title: "Content writer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Megan Brooks",
    title: "Performance manager",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Amber Foster",
    title: "Senior writer",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
  },
];
