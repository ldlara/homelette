import type { pt } from "./pt";

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { -readonly [K in keyof T]: Widen<T[K]> }
      : T;

/** Formato dos textos: o português é a referência; en e es precisam ter as mesmas chaves. */
export type Dict = Widen<typeof pt>;
