type LengthOfString<S extends string, Count extends unknown[] = []> =
  S extends `${infer _First}${infer Rest}`
    ? LengthOfString<Rest, [unknown, ...Count]>
    : Count['length']
