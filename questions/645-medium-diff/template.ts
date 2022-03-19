type Diff<O extends Record<string, any>, O1 extends Record<string, any>> = {
  [Key in keyof O | keyof O1 as Key extends keyof O
    ? Key extends keyof O1
      ? never
      : Key
    : Key
  ]: Key extends keyof O ? O[Key] : Key extends keyof O1 ? O1[Key] : never
}
