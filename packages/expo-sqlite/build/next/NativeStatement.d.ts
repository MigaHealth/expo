/**
 * Result of a `runAsync` call.
 */
export interface RunResult {
    /**
     * The last inserted row ID.
     */
    lastInsertRowid: number;
    /**
     * The number of rows affected.
     */
    changes: number;
}
/**
 * Bind parameters to the prepared statement.
 * You can either pass the parameters in the following forms:
 *
 * @example
 * - Variadic arguments for unnamed parameters.
 * ```ts
 * const statement = await db.prepareAsync('SELECT * FROM test WHERE value = ? AND intValue = ?');
 * await statement.getAsync('test1', 789);
 * ```
 *
 * @example
 * - A single array for unnamed parameters.
 * ```ts
 * const statement = await db.prepareAsync('SELECT * FROM test WHERE value = ? AND intValue = ?');
 * await statement.getAsync(['test1', 789]);
 * ```
 *
 * @example
 * - A single object for [named parameters](https://www.sqlite.org/lang_expr.html)
 *
 *   Through we support multiple named parameter forms like `:VVV`, `@VVV`, and `$VVV`. We recommend using `$VVV` because JavaScript allows using `$` in identifiers without escaping.
 * ```ts
 * const statement = await db.prepareAsync('SELECT * FROM test WHERE value = $value AND intValue = $intValue');
 * await statement.getAsync({ $value: 'test1', $intValue: 789 });
 * ```
 */
export type BindValue = string | number | null | boolean;
export type BindParams = Record<string, BindValue> | BindValue[];
export type VariadicBindParams = BindValue[];
type Row = any;
type AnyDatabase = any;
/**
 * A class that represents an instance of the SQLite statement.
 */
export declare class NativeStatement {
    arrayRunAsync(database: AnyDatabase, params: BindParams): Promise<RunResult>;
    objectRunAsync(database: AnyDatabase, params: BindParams): Promise<RunResult>;
    arrayGetAsync(database: AnyDatabase, params: BindParams): Promise<Row | null>;
    objectGetAsync(database: AnyDatabase, params: BindParams): Promise<Row | null>;
    arrayGetAllAsync(database: AnyDatabase, params: BindParams): Promise<Row[]>;
    objectGetAllAsync(database: AnyDatabase, params: BindParams): Promise<Row[]>;
    resetAsync(database: AnyDatabase): Promise<void>;
    finalizeAsync(database: AnyDatabase): Promise<void>;
    arrayRunSync(database: AnyDatabase, params: BindParams): RunResult;
    objectRunSync(database: AnyDatabase, params: BindParams): RunResult;
    arrayGetSync(database: AnyDatabase, params: BindParams): Row | null;
    objectGetSync(database: AnyDatabase, params: BindParams): Row | null;
    arrayGetAllSync(database: AnyDatabase, params: BindParams): Row[];
    objectGetAllSync(database: AnyDatabase, params: BindParams): Row[];
    resetSync(database: AnyDatabase): void;
    finalizeSync(database: AnyDatabase): void;
}
export {};
//# sourceMappingURL=NativeStatement.d.ts.map