# Turborepo + Vite + shadcn/ui Starter

This is a customized Turborepo setup with Vite, React, ShadCN, and Tailwind CSS.

## Getting Started


## What's Inside?

This Turborepo includes the following packages and apps:

### Apps

- `vite client`: A [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) app with [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/)
  - Located in `apps/client`
  - Uses components from the shared UI library

### Packages

- `ui`: Shared React component library
  - Contains shadcn/ui components in `packages/ui/components`
  - Includes both shadcn base components and custom composite components
- `@repo/eslint-config`: Shared ESLint configurations
- `@repo/typescript-config`: Shared TypeScript configurations
- `@repo/tailwind-config`: Shared Tailwind CSS configuration

## Key Features

### Component Library Structure

The `ui` package is organized as follows:
```
packages/ui/
├── components/
│   ├── ui/                        # shadcn/ui base components
│   │   ├── button.tsx
│   │   └── ...                    # Additional shadcn/ui components
│   └── index.ts                   # Exporting shadcn components
└── custom.tsx          # Custom components
```

## Adding New shadcn/ui Components

1. Navigate to the UI package:
```sh
cd packages/ui
```

2. Add new components using the shadcn-ui CLI:
```sh
pnpm dlx shadcn-ui@latest add [component-name]
```
3. Export it from the `index.ts`
The component will be added to `packages/ui/components/ui/` and can be imported into your client app through `@repo/ui`


## Development

1. Install dependencies:
```sh
pnpm install
```

2. Start the development environment:
```sh
pnpm run dev
```

This will:
- Start the Vite dev server for the client app
- Watch for changes in the UI package
- Enable hot module replacement

## Building

```sh
pnpm build
```
## Utilities

This Turborepo comes with:
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [shadcn/ui](https://ui.shadcn.com/) for UI components
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Vite](https://vitejs.dev/) for fast development and building

