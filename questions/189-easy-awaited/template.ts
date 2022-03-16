type MyAwaited<P> =
  P extends Promise<infer T> ?
    T extends Promise<unknown> ?
      MyAwaited<T> :
      T :
    never
