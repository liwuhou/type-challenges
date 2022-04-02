type splitUndefined<T> = T extends T ? T extends undefined ? never : T : never

type RequiredByKeys<
  T extends Record<string, any>,
  K extends string = never
> = [K] extends [never] 
  ? Required<T> 
  : MapObj<Pick<T, Exclude<keyof T, K>> & {
    [Key in K 
      as Key extends keyof T ? Key : never
    ]: Key extends keyof T ? splitUndefined<T[Key]> : never
  }>

