type RemoveIndexSignature<T extends Record<string, any>> = {
  [Key in keyof T 
    as Key extends `${infer Str}` ? Str : never
  ]: T[Key]
}
