## 0.8.2 (22 Sept 2024)

- (Fix) Fix `DeepReadonly` to handle tuple better
- (Patch) Remove boolean handling

## 0.8.1 (18 Sept 2024)

- (Fix) Fix `DeepReadonly` to handle more cases

## 0.8.0 (30 Mar 2024)

- (Feat) Add `ifDefined` for `Defined`

## 0.7.1 (4 Mar 2024)

- (Fix) Fix type of `Defined` to take in value of union type

## 0.7.0 (4 Mar 2024)

- (Feat) Add `ifSome` and `ifNone` to execute function without returning value

## 0.6.12 (12 Jan 2024)

- (Feat) Add a `Return` type to handle both return type of both non-async and async function

## 0.6.11 (30 Dec 2023)

- (Fix) sleep promise can resolve even without providing callback function

## 0.6.10 (30 Dec 2023)

- (Fix) Add `toJson` method for `Operation` class

## 0.6.9 (29 Dec 2023)

- (Fix) Add `match` method for `Optional` class to mimic pattern mathcing

## 0.6.8 (29 Dec 2023)

- (Feat) Add `match` method for `Result` class to mimic pattern mathcing

## 0.6.7 (21 Dec 2023)

- (Feat) Add new type `Argument` that take only the type of first parameter of a function

## 0.6.6 (14 Nov 2023)

- (Fix) The `data` of `AsyncOperation` to be non-promise
- (Feat) Add `sequentialPromise` to execute promises in sequential order

## 0.6.5 (13 Nov 2023)

- (Fix) Export `AsyncOperation`

## 0.6.4 (13 Nov 2023)

- (Fix) `Operation` to have alternative async version `AsyncOperation`

## 0.6.3 (13 Nov 2023)

- (Fix) `Operation` to have `map` and `flatMap`

## 0.6.2 (13 Nov 2023)

- (Feat) Enhance `Defined` and `Operation`

## 0.5.2 (2 Nov 2023)

- (Fix) Export `defined`

## 0.5.1 (2 Nov 2023)

- (Refactor) Change `convertNullableToOptional` to `nullToUndefined`

## 0.5.0 (29 Oct 2023)

- (Feat) Add `Defined` to handle possibly null/optional value

## 0.4.2 (24 Oct 2023)

- (Fix) Return `Error` instance for failed operation

## 0.4.1 (24 Oct 2023)

- (Fix) Allow failed operation to pass error object
- (Fix) Allow optional to take in string for throwing error

## 0.4.0 (19 Oct 2023)

- (Feat) Add `isSome` & `isNome` to `Optional`
- (Feat) Add `Operation` mainly for possible failure handling

## 0.3.0 (19 Oct 2023)

- (Feat) Add `unwrap` only option to `Optional`

## 0.2.4 (18 Oct 2023)

- (Fix) Published updated version

## 0.2.3 (18 Oct 2023)

- (Fix) Add `Optional` to export from `index.ts`

## 0.2.2 (18 Oct 2023)

- (Fix) Use `Optional` instead of `guardAsDefined`

## 0.2.1 (14 Oct 2023)

- (Fix) Filter away falsy values to convert record to query params

## 0.2.0 (3 Oct 2023)

- (Feat) Add query param parser from record to string and vice versa

## 0.1.1 (3 Oct 2023)

- (Fix) Add `web` to export from `index.ts`

## 0.1.0 (3 Oct 2023)

- (Feat) Add util to chek for preferred mode and to see if environment is browser

## 0.0.1 (2 Oct 2023)

- (Fix) Use free function for `isFalse`, `isFalsy` and `isTruthy`
- (Fix) Pass boolean value to Bool property function
- (Fix) Allow functions to be imported

## 0.0.0 (2 Oct 2023)

- (Feat) Initial public release
