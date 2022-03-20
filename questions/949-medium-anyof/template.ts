type Falsey = 0 | '' | false | null | undefined | [] | Record<string, never>

type AnyOf<T extends readonly any[]> =
  T[number] extends Falsey ? false : true
