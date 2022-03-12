type AppendArgument<Fn, A> =
  Fn extends (...args: infer Args) => infer ReturnType
    ? (...args: [...Args, A]) => ReturnType
    : never
