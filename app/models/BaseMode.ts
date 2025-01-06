export interface BaseModel<T> {
  code?: number;
  status?: string;
  data?: T;
  message?:T
}
