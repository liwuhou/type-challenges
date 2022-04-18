type GreaterThan<T extends number, U extends number> =
  T extends U
    ? false
    : U extends 0
      ? true
      : T extends 0
        ? false
        : GreaterThan<MinusOne<T>, MinusOne<U>>
