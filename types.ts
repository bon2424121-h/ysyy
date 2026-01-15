
export interface Chapter {
  id: number;
  title: string;
  hours: number;
  content: string[];
  requirements: string;
  focus: string;
  difficulty: string;
  ideology: string;
  image: string;
  movieUrl?: string; // Optional URL for movie appreciation
}

export interface CourseInfo {
  name: string;
  code: string;
  credits: string;
  prerequisites: string[];
  type: string;
  semester: string;
  objective: string;
}
