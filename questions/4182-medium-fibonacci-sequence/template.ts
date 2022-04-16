type Fibonacci<
  T extends number,
  Count extends unknown[] = [unknown],
  F1 extends unknown[] = [],
  F2 extends unknown[] = [unknown]
> =
Count['length'] extends T
  ? F2['length']
  : Fibonacci<T, [...Count, unknown], F2, [...F1, ...F2]>

