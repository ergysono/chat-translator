import {authOptions} from "@/auth";
import PricingCards from "@/components/PricingCards";
import {getServerSession} from "next-auth";

async function Register() {
  const session = await getServerSession(authOptions);
  const name = session?.user?.name?.split(" ")[0];

  return (
    <div className="isolate overflow-hidden dark:bg-gray-900 pb-40">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white  sm:text-5xl">
            Lets handle your Membership{" "}
            {name?.charAt(0).toUpperCase() + "" + name?.slice(1)}
          </p>
        </div>
        <div className="relative">
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#radial-gradient-pricing)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="radial-gradient-pricing">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#e935c1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <PricingCards redirect={false} />
    </div>
  );
}

export default Register;