type MyParameters<T extends (...args: any[]) => any> =
  T extends (...args: infer ParamsType) => any
    ? ParamsType
    : never
