type DeepReadonly<T extends Record<string, any>> = {
  readonly [Key in keyof T]: T[Key] extends Object
    ? T[Key] extends Function
      ? T[Key]
      : DeepReadonly<T[Key]>
    : T[Key]
}
