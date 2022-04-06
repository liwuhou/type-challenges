type RemoveUndefined<T> = Exclude<T, undefined>

type ObjectEntries<T extends Record<string, any>> = RemoveUndefined<{
  [Key in keyof T]: [Key, RemoveUndefined<T[Key]>]
}[keyof T]>

