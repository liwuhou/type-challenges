type Reverse<T extends unknown[], Result extends unknown[] = []> =
  T extends [infer F, ...infer Rest]
    ? Reverse<Rest, [F, ...Result]>
    : Result

