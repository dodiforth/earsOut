This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## 
Notes on developing : 
Use TailwindCSS for styling and implement scroll-based fade-in effects using Intersection Observer

- I made Public folder outside of App root and all images used in it are gitignored so in case of using fork the repository, you'll need your own images 

--optional


- the default font is Caveat and only specific elements use Chakra_Petch
In this setup:
The default font for the application is Caveat.
Use the font-chakra-petch class on specific elements to apply the Chakra_Petch font.

>/* ExampleComponent.jsx */

export default function ExampleComponent() {
  return (
    <div>
      <h1 className="font-chakra-petch">Happy Birthday Christine</h1>
      <p>Wishing you a wonderful day filled with joy and surprises!</p>
    </div>
  );
}
>