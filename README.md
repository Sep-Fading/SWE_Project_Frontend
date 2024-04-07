## How to use the repository:

 - For any of the steps if you google how to do them you should get your answer, if you're unsure.

 - Obviously keep your code neat and well commented so people know what everything does and what your variables mean.

 - Give your variables, methods, css classes etc meaningful names.

### Use your own branches:
 - After cloning the files to your local device, make sure you are on your own branch and not main/master/someone else's branch. VERY IMPORTANT!

 - You can create and switch to a branch using terminal.

### Naming your branches:
 - You may want to make different branches for things you may want to test, in that case follow this naming convention:

 - YOURNAME_TITLE_VERSION

 - For example, sepehr_logintest_1

### Updating your work:

 - Commit and push your changes to your branch often and be descriptive in the description, to let others know what exactly changed and what was added or removed.

 - The master branch is protected and will need majority to approve the merge, so keep in touch regularly to communicate completed tasks.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## ENVIROMENTAL VARIABLE FOR DEVELOPMENT - IMPORTANT:
GitHub won't push your environmnetal variables to the repo.

Therefore for development purposes follow these steps:

Create a file called `.env.local`in the root directory of the next project.

Add the following to it (IMPORTANT: Remember if you are adding anymore update this readme to reflect that!):

```
BACKEND_URL=http://localhost:8000
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```
