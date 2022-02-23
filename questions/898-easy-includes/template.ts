import { Equal, Expect } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> =
  T extends [infer First, ...infer Rest]
    ? [First, U] extends [U, First]
      ? Equal<First, U>
      : Includes<Rest, U>
    : false
