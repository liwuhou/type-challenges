type Shift<T extends unknown[]> = T extends [infer _F, ...infer Rest] ? Rest : never
