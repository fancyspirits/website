declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"artists": {
"4z.mdx": {
	id: "4z.mdx";
  slug: "4z";
  body: string;
  collection: "artists";
  data: InferEntrySchema<"artists">
} & { render(): Render[".mdx"] };
"doxbleK.mdx": {
	id: "doxbleK.mdx";
  slug: "doxblek";
  body: string;
  collection: "artists";
  data: InferEntrySchema<"artists">
} & { render(): Render[".mdx"] };
"exahertz.mdx": {
	id: "exahertz.mdx";
  slug: "exahertz";
  body: string;
  collection: "artists";
  data: InferEntrySchema<"artists">
} & { render(): Render[".mdx"] };
"invaers.mdx": {
	id: "invaers.mdx";
  slug: "invaers";
  body: string;
  collection: "artists";
  data: InferEntrySchema<"artists">
} & { render(): Render[".mdx"] };
"jiku.mdx": {
	id: "jiku.mdx";
  slug: "jiku";
  body: string;
  collection: "artists";
  data: InferEntrySchema<"artists">
} & { render(): Render[".mdx"] };
"jon-kat.mdx": {
	id: "jon-kat.mdx";
  slug: "jon-kat";
  body: string;
  collection: "artists";
  data: InferEntrySchema<"artists">
} & { render(): Render[".mdx"] };
"leWel.mdx": {
	id: "leWel.mdx";
  slug: "lewel";
  body: string;
  collection: "artists";
  data: InferEntrySchema<"artists">
} & { render(): Render[".mdx"] };
"lunanescence.mdx": {
	id: "lunanescence.mdx";
  slug: "lunanescence";
  body: string;
  collection: "artists";
  data: InferEntrySchema<"artists">
} & { render(): Render[".mdx"] };
"lyyz.mdx": {
	id: "lyyz.mdx";
  slug: "lyyz";
  body: string;
  collection: "artists";
  data: InferEntrySchema<"artists">
} & { render(): Render[".mdx"] };
"meridian.mdx": {
	id: "meridian.mdx";
  slug: "meridian";
  body: string;
  collection: "artists";
  data: InferEntrySchema<"artists">
} & { render(): Render[".mdx"] };
"sven-kleer.mdx": {
	id: "sven-kleer.mdx";
  slug: "sven-kleer";
  body: string;
  collection: "artists";
  data: InferEntrySchema<"artists">
} & { render(): Render[".mdx"] };
"troteos.mdx": {
	id: "troteos.mdx";
  slug: "troteos";
  body: string;
  collection: "artists";
  data: InferEntrySchema<"artists">
} & { render(): Render[".mdx"] };
"ucalyptus.mdx": {
	id: "ucalyptus.mdx";
  slug: "ucalyptus";
  body: string;
  collection: "artists";
  data: InferEntrySchema<"artists">
} & { render(): Render[".mdx"] };
};
"drafts": {
"template-album.mdx": {
	id: "template-album.mdx";
  slug: "template-album";
  body: string;
  collection: "drafts";
  data: any
} & { render(): Render[".mdx"] };
"template-artist.mdx": {
	id: "template-artist.mdx";
  slug: "template-artist";
  body: string;
  collection: "drafts";
  data: any
} & { render(): Render[".mdx"] };
"template-single.mdx": {
	id: "template-single.mdx";
  slug: "template-single";
  body: string;
  collection: "drafts";
  data: any
} & { render(): Render[".mdx"] };
};
"other": {
"about-label.mdx": {
	id: "about-label.mdx";
  slug: "about-label";
  body: string;
  collection: "other";
  data: any
} & { render(): Render[".mdx"] };
"label-links.mdx": {
	id: "label-links.mdx";
  slug: "label-links";
  body: string;
  collection: "other";
  data: any
} & { render(): Render[".mdx"] };
};
"releases": {
"2021/ale.mdx": {
	id: "2021/ale.mdx";
  slug: "2021/ale";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2021/friendly-fire.mdx": {
	id: "2021/friendly-fire.mdx";
  slug: "2021/friendly-fire";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2021/journey-through-time-and-space.mdx": {
	id: "2021/journey-through-time-and-space.mdx";
  slug: "2021/journey-through-time-and-space";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2021/liftoff.mdx": {
	id: "2021/liftoff.mdx";
  slug: "2021/liftoff";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2021/lost-signal-jon-kat.mdx": {
	id: "2021/lost-signal-jon-kat.mdx";
  slug: "2021/lost-signal-jon-kat";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2021/nova-phantasm.mdx": {
	id: "2021/nova-phantasm.mdx";
  slug: "2021/nova-phantasm";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2021/paranoia-delusion.mdx": {
	id: "2021/paranoia-delusion.mdx";
  slug: "2021/paranoia-delusion";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2021/timekeeper.mdx": {
	id: "2021/timekeeper.mdx";
  slug: "2021/timekeeper";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2021/vacation-in-space.mdx": {
	id: "2021/vacation-in-space.mdx";
  slug: "2021/vacation-in-space";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2022/astral-realm.mdx": {
	id: "2022/astral-realm.mdx";
  slug: "2022/astral-realm";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2022/lost-signal-doxblek.mdx": {
	id: "2022/lost-signal-doxblek.mdx";
  slug: "2022/lost-signal-doxblek";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2023/bushfire.mdx": {
	id: "2023/bushfire.mdx";
  slug: "2023/bushfire";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2023/even-jon-kat.mdx": {
	id: "2023/even-jon-kat.mdx";
  slug: "2023/even-jon-kat";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2023/high-reality.mdx": {
	id: "2023/high-reality.mdx";
  slug: "2023/high-reality";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2023/homesick.mdx": {
	id: "2023/homesick.mdx";
  slug: "2023/homesick";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2023/love-drips.mdx": {
	id: "2023/love-drips.mdx";
  slug: "2023/love-drips";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2023/menacing-rift.mdx": {
	id: "2023/menacing-rift.mdx";
  slug: "2023/menacing-rift";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2023/midnight-drive.mdx": {
	id: "2023/midnight-drive.mdx";
  slug: "2023/midnight-drive";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2023/path-to-_.mdx": {
	id: "2023/path-to-_.mdx";
  slug: "2023/path-to-_";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2023/poly.mdx": {
	id: "2023/poly.mdx";
  slug: "2023/poly";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2023/preserved.mdx": {
	id: "2023/preserved.mdx";
  slug: "2023/preserved";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2023/smash.mdx": {
	id: "2023/smash.mdx";
  slug: "2023/smash";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2023/turbine.mdx": {
	id: "2023/turbine.mdx";
  slug: "2023/turbine";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2024/artificial.mdx": {
	id: "2024/artificial.mdx";
  slug: "2024/artificial";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2024/menacing-rift-ucalyptus.mdx": {
	id: "2024/menacing-rift-ucalyptus.mdx";
  slug: "2024/menacing-rift-ucalyptus";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2024/ringmoth.mdx": {
	id: "2024/ringmoth.mdx";
  slug: "2024/ringmoth";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2024/seraphim_files.mdx": {
	id: "2024/seraphim_files.mdx";
  slug: "2024/seraphim_files";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
"2024/when-i-care.mdx": {
	id: "2024/when-i-care.mdx";
  slug: "2024/when-i-care";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
