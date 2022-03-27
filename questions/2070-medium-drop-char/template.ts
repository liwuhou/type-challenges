

type DropChar<S extends string, C extends string, Result extends string = ''> =
  S extends `${infer F}${infer L}`
    ? C extends ''
      ? F extends ' '
        ? DropChar<L, C, Result>
        : DropChar<L, C, `${Result}${F}`>
      : F extends C
        ? DropChar<L, C, Result>
        : DropChar<L, C, `${Result}${F}`>
    : Result

