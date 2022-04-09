type FlipArguments<T extends Function> =
  T extends (...args: infer Args) => infer ReturnType
    ? (...args: Reverse<Args>) => ReturnType
    : never

