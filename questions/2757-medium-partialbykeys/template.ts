type MapObj<Obj extends Record<string, any>> = {
  [Key in keyof Obj]: Obj[Key]
}

type PartialByKeys<
  T extends Record<string, any>,
  K extends string = never
> = [K] extends [never] ? Partial<T> : MapObj<Pick<T, Exclude<keyof T, K>> & {
  [Key in K as Key extends keyof T ? Key : never]?: Key extends keyof T ? T[Key] : never
}>
