type Nums2Arr<T extends number, R extends unknown[] = []> =
  R['length'] extends T 
    ? R 
    : Nums2Arr<T, [...R, unknown]>

type MinusOne<T extends number, R = Nums2Arr<T>> = 
  R extends [infer _F, ...infer Rest]
    ? Rest['length']
    : never


