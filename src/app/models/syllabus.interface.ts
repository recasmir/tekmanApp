export interface SyllabusSearchResponse {
  syllabus: Syllabus[];
}

export interface Syllabus{
  quarter: string,
  sessions_watched: string,
  sessions_total: string,
  src: string
}
