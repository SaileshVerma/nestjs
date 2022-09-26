
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract getData(): Nullable<Nullable<string>[]> | Promise<Nullable<Nullable<string>[]>>;

    abstract print(): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
