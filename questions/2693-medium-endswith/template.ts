type EndsWith<T extends string, U extends string> =
  T extends U
    ? true
    : T extends `${infer _F}${infer Rest}`
      ? EndsWith<Rest, U>
      : false

