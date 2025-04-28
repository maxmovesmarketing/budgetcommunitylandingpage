export interface Review {
  rating: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Feature {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}
