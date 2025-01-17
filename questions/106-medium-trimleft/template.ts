type TrimLeft<S extends string> =
  S extends `${' ' | '\t' | '\n'}${infer Rest}`
    ? TrimLeft<Rest>
    : S
