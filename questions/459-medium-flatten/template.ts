type Flatten<T extends unknown[], Result extends unknown[] = []> =
  T extends [first: infer First, ...rest: infer Rest]
    ? First extends any[]
      ? Flatten<Rest, [...Result, ...Flatten<First>]>
      : Flatten<Rest, [...Result, First]>
    : Result

type FlattenBetter<T extends unknown[]> =
  T extends [infer First, ...infer Rest]
    ? First extends unknown[]
      ? [...FlattenBetter<First>, ...FlattenBetter<Rest>]
      : [First, ...FlattenBetter<Rest>]
    : T
