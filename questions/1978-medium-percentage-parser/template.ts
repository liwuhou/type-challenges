type PercentNumParser<S extends string> = 
  S extends `${infer PNum}%`
    ? [PNum, '%']
    : [S, '']

type PercentageParser<A extends string> = 
  A extends `-${infer Percent}`
    ? ['-', ...PercentNumParser<Percent>]
    : A extends `+${infer Percent}`
      ? ['+', ...PercentNumParser<Percent>]
      : ['', ...PercentNumParser<A>]

