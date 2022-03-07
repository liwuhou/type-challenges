type Last<T extends any[]> = T extends [...rest: infer _Rest, tail: infer Tail] ? Tail : never
