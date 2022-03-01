
type MyReadonly2<T, K extends keyof T = keyof T> = T & { readonly [key in K]: T[key]}
