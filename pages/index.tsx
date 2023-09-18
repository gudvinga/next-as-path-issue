import { useRouter } from "next/router";

export default function Home() {
  const { asPath } = useRouter();
  return <h1>as path: {asPath}</h1>;
}

Home.getInitialProps = (ctx) => {
  console.log(ctx.asPath);
  return { props: {} };
};
