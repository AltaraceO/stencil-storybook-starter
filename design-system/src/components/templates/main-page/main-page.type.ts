export interface Card {
  image: { source: string; alt: string };
  cardinfo: { head: string; author: string };
  cardicon: { like: { icon: string; amount: string }; seen: { icon: string; amount: string } };
}

export interface Header {
  logo: string;
  navLinks: string[];
  navButtons: string[];
  searchButtons: string[];
  headerButtons: { title: string; icon: string }[];
}
