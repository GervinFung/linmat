import { Defined } from './defined';
import { isNeitherNullNorUndefined } from './guard';

class Optional<T> {
	constructor(private readonly value: T | null | undefined) {}

	static readonly some = <T>(value: T) => {
		if (isNeitherNullNorUndefined(value)) {
			return new Optional(value);
		}

		throw new Error('value is null or undefined');
	};

	static readonly none = <T>() => {
		return new Optional<T>(undefined);
	};

	static readonly from = <T>(value: T | null | undefined) => {
		return isNeitherNullNorUndefined(value)
			? Optional.some(value)
			: Optional.none<T>();
	};

	readonly isSome = () => {
		return isNeitherNullNorUndefined(this.value);
	};

	readonly isNone = () => {
		return !this.isSome();
	};

	readonly map = <R>(fn: (value: T) => R) => {
		if (isNeitherNullNorUndefined(this.value)) {
			return new Optional<R>(fn(this.value));
		}

		return new Optional<R>(undefined);
	};

	readonly flatMap = <R>(fn: (value: T) => Optional<R>) => {
		if (isNeitherNullNorUndefined(this.value)) {
			return fn(this.value);
		}

		return new Optional<R>(undefined);
	};

	readonly unwrapOrGet = <T>(t: T) => {
		return Defined.parse(this.value).orGet(t);
	};

	readonly unwrapOrElse = <T>(fn: () => T) => {
		return Defined.parse(this.value).orElse(fn);
	};

	readonly unwrapOrThrow = <E extends Error>(error: E | string) => {
		return Defined.parse(this.value).orThrow(error);
	};
}

export { Optional };
