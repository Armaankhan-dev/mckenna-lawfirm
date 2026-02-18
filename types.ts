
export interface PracticeArea {
  id: string;
  title: string;
  category: 'Criminal' | 'Injury';
  icon: string;
  description: string;
  fullContent: string;
}

export interface Attorney {
  name: string;
  role: string;
  bio: string;
  specialty: string;
  image: string;
}

export interface CaseResult {
  title: string;
  outcome: string;
  description: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}