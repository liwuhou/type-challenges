type FlattenDepth<Arr extends any[], depth extends number = 1> = 
  depth extends 0
    ? Arr
    : Arr extends [infer F, ...infer Rest]
      ? F extends Array<any>
        ? [...FlattenDepth<F, MinusOne<depth>>, ...FlattenDepth<Rest, depth>]
        : [F, ...FlattenDepth<Rest, depth>]
      : Arr

