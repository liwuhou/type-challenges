import { Equal } from '@type-challenges/utils'

export type Includes<T extends unknown[], U> =
  T extends [infer First, ...infer Rest]
    ? [First, U] extends [U, First]
      ? Equal<First, U>
      : Includes<Rest, U>
    : false
