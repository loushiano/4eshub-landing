export type CatalogLesson = {
  id: string;
  title: string;
  description: string | null;
  order: number;
  estimatedDurationMinutes: number | null;
  slideCount: number;
  hasQuiz: boolean;
};

export type CatalogCourse = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  thumbnailUrl: string | null;
  estimatedDurationMinutes: number | null;
  lessonCount: number;
  lessons: CatalogLesson[];
  hasExam: boolean;
  updatedAt: number | null;
};

export type CatalogCourseList = {
  data: CatalogCourse[];
  currentPage: number;
  totalCount: number;
  perPage: number;
};
