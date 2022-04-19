type Zip<T extends unknown[], K extends unknown[], Res extends unknown[] = []> =
  T['length'] extends 0
    ? Res
    : K['length'] extends 0
      ? Res
      : T extends [infer TF, ...infer TR]
        ? K extends [infer KF, ...infer KR]
          ? Zip<TR, KR, [...Res, [TF, KF]]>
          : Res
        : Res
      
