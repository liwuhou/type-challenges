type TupleToNestedObject<T extends string[] | unknown[], U> =
  T extends [infer F, ...infer Rest]
    ? Record<F & string, TupleToNestedObject<Rest, U>>
    : U
