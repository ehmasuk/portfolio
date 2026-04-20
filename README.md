# ehmasuk - Personal Portfolio

This is the source code for my personal website and portfolio, built with [Next.js](https://nextjs.org/) and modern web technologies. 

It is designed to showcase my projects, skills, and professional experience in a clean, simple, and responsive way.

## Technologies Used

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/), [Base UI](https://base-ui.com/), [Shadcn UI](https://ui.shadcn.com/)
- **Content**: [MDX](https://mdxjs.com/) for writing markdown content
- **Animations**: [Framer Motion](https://motion.dev/)

## Getting Started

To run this project locally:

1. Clone the repository and navigate to the project directory.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Content

- **Pages**: Edit `app/page.tsx` to modify the home page.
- **Components**: 
  - Create a new component in the `data/ui` directory.
  - Add the component to the `component-registry.ts` file.
  - Add the docs for this component in the `data/mdx-docs` directory.
  - Add a component preview with the filename corresponding to the component in the `data/ui` directory.

## Note

This is a personal repository. Contributions, pull requests, and issues are not expected, as it serves purely as my personal site.
