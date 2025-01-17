type TrimRight<S extends string> =
  S extends `${infer Rest}${' ' | '\t' | '\n'}`
    ? TrimRight<Rest>
    : S
