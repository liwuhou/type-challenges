type Flip<T extends Record<string | number, any>> = {
  [Key in keyof T as `${T[Key]}`]: Key
}

