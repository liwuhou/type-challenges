type OmitByType<T extends Record<string, any>, U> = {
  [Key in keyof T as T[Key] extends U ? never : Key]: T[Key]
}
