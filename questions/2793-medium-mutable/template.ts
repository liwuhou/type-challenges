type Mutable<T extends Record<string, any>> = {
  -readonly[Key in keyof T]: T[Key]
}
