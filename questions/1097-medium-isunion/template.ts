type IsUnion<T, Y = T> =
  T extends T
    ? [Y] extends [T]
      ? false
      : true
    : never
