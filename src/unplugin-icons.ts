// TypeScript shim for `unplugin-icons`.
// SvelteKit's tsconfig includes `src/**/*.ts` but not `src/**/*.d.ts`.
// This prevents TS from erroring on imports like `~icons/solar/settings-linear`.

declare module "~icons/*" {
  const component: any;
  export default component;
}


