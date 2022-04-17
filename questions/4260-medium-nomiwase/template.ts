type Combinations<T extends string, Y extends string> =
  T
  | Y
  | `${T}${Y}`
  | `${Y}${T}`

type UnionCombination<S extends string, Y extends string = S> =
  S extends Y
    ? Combinations<S, UnionCombination<Exclude<Y, S>>>
    : never

type AllCombinations<S extends string> = 
  '' 
  | UnionCombination<StringToUnion<S>>
  

