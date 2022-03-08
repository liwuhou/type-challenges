interface Thing {
  type: string
  [key: string]: any
}

// type LookUp<U extends Thing, T extends string> =
//   U extends U
//     ? U['type'] extends T
//       ? U
//       : never
//     : never

// better
type LookUp<U extends {type: string}, T extends string> = U extends {type: T} ? U : never
