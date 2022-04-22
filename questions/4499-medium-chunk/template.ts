type Chunk<
  Arr extends unknown[],
  Count extends number,
  Result extends unknown[] = [],
  Temp extends unknown[] = [],
> = 
  Arr extends [infer F, ...infer Rest]
    ? Temp['length'] extends Count
      ? Chunk<Rest, Count, [...Result, Temp], [F]>
      : Chunk<Rest, Count, Result, [...Temp, F]>
    : Temp['length'] extends 0
      ? Result
      : [...Result, Temp]

