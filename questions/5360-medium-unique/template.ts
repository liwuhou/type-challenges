import { Includes } from "../898-easy-includes/template";

export type Unique<T extends unknown[], Res extends unknown[] = []> =
  T extends [infer F, ...infer R]
    ? Includes<Res, F> extends true
      ? Unique<R, Res>
      : Unique<R, [...Res, F]>
    : Res

