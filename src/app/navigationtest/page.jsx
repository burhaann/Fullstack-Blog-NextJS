"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  console.log(q);
  console.log("Pathname: " + pathname);

  const handleClick = () => {
    console.log("clicked");
    router.replace("/");
  };

  const a = Math.random();
  console.log(a);

  return (
    <div>
      <Link href="/" prefetch={false} suppressHydrationWarning>
        Click here {a}
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
