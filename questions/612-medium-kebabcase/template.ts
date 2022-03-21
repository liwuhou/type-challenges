// type KebabCase<S extends string, isFrist extends boolean = true> =
//   S extends `${infer First}${infer Rest}`
//     ? First extends Lowercase<First>
//       ? `${First}${KebabCase<Rest, false>}`
//       : `${isFrist extends true ? '' : '-'}${Lowercase<First>}${KebabCase<Rest, false>}`
//     : S

type KebabCase<S extends string> =
  S extends `${infer First}${infer Rest}`
    ? `${Lowercase<First>}${
      Rest extends Uncapitalize<Rest>
        ? KebabCase<Rest>
        : `-${KebabCase<Capitalize<Rest>>}`
    }`
    : S
