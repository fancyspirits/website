declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"artists": {
"4z.mdx": {
  id: "4z.mdx",
  slug: "4z",
  body: string,
  collection: "artists",
  data: any
},
"doxbleK.mdx": {
  id: "doxbleK.mdx",
  slug: "doxblek",
  body: string,
  collection: "artists",
  data: any
},
"exahertz.mdx": {
  id: "exahertz.mdx",
  slug: "exahertz",
  body: string,
  collection: "artists",
  data: any
},
"jiku.mdx": {
  id: "jiku.mdx",
  slug: "jiku",
  body: string,
  collection: "artists",
  data: any
},
"jon-kat.mdx": {
  id: "jon-kat.mdx",
  slug: "jon-kat",
  body: string,
  collection: "artists",
  data: any
},
"leWel.mdx": {
  id: "leWel.mdx",
  slug: "lewel",
  body: string,
  collection: "artists",
  data: any
},
"meridian.mdx": {
  id: "meridian.mdx",
  slug: "meridian",
  body: string,
  collection: "artists",
  data: any
},
"sven-kleer.mdx": {
  id: "sven-kleer.mdx",
  slug: "sven-kleer",
  body: string,
  collection: "artists",
  data: any
},
"troteos.mdx": {
  id: "troteos.mdx",
  slug: "troteos",
  body: string,
  collection: "artists",
  data: any
},
},
"releases": {
"2021/ale.mdx": {
  id: "2021/ale.mdx",
  slug: "2021/ale",
  body: string,
  collection: "releases",
  data: any
},
"2021/friendly-fire.mdx": {
  id: "2021/friendly-fire.mdx",
  slug: "2021/friendly-fire",
  body: string,
  collection: "releases",
  data: any
},
"2021/journey-through-time-and-space.mdx": {
  id: "2021/journey-through-time-and-space.mdx",
  slug: "2021/journey-through-time-and-space",
  body: string,
  collection: "releases",
  data: any
},
"2021/liftoff.mdx": {
  id: "2021/liftoff.mdx",
  slug: "2021/liftoff",
  body: string,
  collection: "releases",
  data: any
},
"2021/lost-signal-jon-kat.mdx": {
  id: "2021/lost-signal-jon-kat.mdx",
  slug: "2021/lost-signal-jon-kat",
  body: string,
  collection: "releases",
  data: any
},
"2021/nova-phantasm.mdx": {
  id: "2021/nova-phantasm.mdx",
  slug: "2021/nova-phantasm",
  body: string,
  collection: "releases",
  data: any
},
"2021/paranoia-delusion.mdx": {
  id: "2021/paranoia-delusion.mdx",
  slug: "2021/paranoia-delusion",
  body: string,
  collection: "releases",
  data: any
},
"2021/timekeeper.mdx": {
  id: "2021/timekeeper.mdx",
  slug: "2021/timekeeper",
  body: string,
  collection: "releases",
  data: any
},
"2021/vacation-in-space.mdx": {
  id: "2021/vacation-in-space.mdx",
  slug: "2021/vacation-in-space",
  body: string,
  collection: "releases",
  data: any
},
"2022/astral-realm.mdx": {
  id: "2022/astral-realm.mdx",
  slug: "2022/astral-realm",
  body: string,
  collection: "releases",
  data: any
},
"2022/lost-signal-doxblek.mdx": {
  id: "2022/lost-signal-doxblek.mdx",
  slug: "2022/lost-signal-doxblek",
  body: string,
  collection: "releases",
  data: any
},
"2023/even-jon-kat.mdx": {
  id: "2023/even-jon-kat.mdx",
  slug: "2023/even-jon-kat",
  body: string,
  collection: "releases",
  data: any
},
"2023/preserved.mdx": {
  id: "2023/preserved.mdx",
  slug: "2023/preserved",
  body: string,
  collection: "releases",
  data: any
},
"template-album.mdx": {
  id: "template-album.mdx",
  slug: "template-album",
  body: string,
  collection: "releases",
  data: any
},
"template-single.mdx": {
  id: "template-single.mdx",
  slug: "template-single",
  body: string,
  collection: "releases",
  data: any
},
},

	};

	type ContentConfig = never;
}
