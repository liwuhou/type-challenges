type PickByType<T extends Record<string, any>, U> = {
  [Key in keyof T as T[Key] extends U ? Key : never]: T[Key]
}

