## Architecture Guidelines

## Technical Specifications

- Tailwind CSS + Shadcn UI
- next 15.3.0
- storybook

## 1. Component Structure Pattern

```prompt
When creating a new component, follow this structure:
1. Create component folder: src/components/ui/[ComponentName]
2. Create component file: src/components/ui/[ComponentName]/[ComponentName].tsx
3. Create stories file: src/components/ui/[ComponentName]/[ComponentName].stories.tsx
4. Use shadcn UI
5. Use cva for styling variants
6. Implement TypeScript interfaces
7. Add Storybook documentation
8. refer to src/components/ui/button/Button.tsx, src/components/ui/button/Button.stories.tsx
```

## 2. Styling Instructions

```prompt
For styling components:
1. Use Tailwind CSS with cva
2. Define base styles first
3. Create variants for different states
4. Use compoundVariants for complex combinations
5. Use semantic color tokens from ../app/theme.css
```

## 3. Storybook Documentation Pattern

```prompt
For Storybook stories:
1. Create basic story showing all variants
2. if size props contain, Add size variations
3. Include state variations (disabled, loading, etc.)
4. Add combination stories
5. Set up proper controls in argTypes
6. Add autodocs tag
```

## 4. TypeScript Type Definitions

```prompt
For TypeScript:
1. Extend HTMLAttributes
2. Define strict prop types
3. Add proper generics
4. Include JSDoc comments
```

## 5. Component Naming Conventions

```prompt
For naming:
1. Use PascalCase for components
2. Use camelCase for props
3. Use descriptive names for variants
4. Follow consistent naming patterns
```

## 6. Common Component Patterns

```prompt
For common patterns:
1. Use forwardRef for ref forwarding
2. Implement proper prop spreading
3. Handle className merging
4. Support asChild pattern
5. Add proper displayName
```

## 7. Component Composition

```prompt
For composition:
1. Use Slot pattern when needed
2. Implement proper children handling
3. Support compound components
4. Use context when appropriate
5. Follow composition over inheritance
```
