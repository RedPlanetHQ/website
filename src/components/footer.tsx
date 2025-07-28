/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container } from './utils';

export function Footer() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <footer className="w-full flex flex-col relative bg-grayAlpha-50 backdrop-blur-lg">
      <Container>
        <div className="border-border border-r border-l py-[5rem] px-[4rem]">
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col gap-2 items-start justify-start">
              <div className="flex gap-2 items-center -mt-2">
                {path === '/core' ? (
                  <Image
                    src="/core/logo.png"
                    alt="logo"
                    width={36}
                    height={36}
                  />
                ) : (
                  <Image
                    src="/logo_black.svg"
                    alt="logo"
                    width={36}
                    height={36}
                  />
                )}
                <div className="font-mono mr-2 text-lg font-medium">
                  {path === '/core' ? 'CORE' : 'SOL'}
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div
                className="
            grid
            grid-cols-4
            gap-6
            w-full
            max-[991px]:grid-cols-2
            max-[767px]:grid-cols-1
          "
              >
                <div className="flex flex-col gap-2 items-start">
                  <h1>CORE</h1>
                  {path === '/' && (
                    <Link href="/core" className="text-muted-foreground/80">
                      Home
                    </Link>
                  )}
                  <Link
                    href="/docs/getting-started"
                    className="text-muted-foreground/80"
                  >
                    Getting started
                  </Link>
                  <Link
                    href="/docs/components"
                    className="text-muted-foreground/80"
                  >
                    Components
                  </Link>
                  <Link href="/pricing" className="text-muted-foreground/80">
                    Pricing
                  </Link>
                </div>

                <div className="flex flex-col gap-2 items-start">
                  <h1>SOL</h1>
                  {path === '/core' && (
                    <Link href="/" className="text-muted-foreground/80">
                      Home
                    </Link>
                  )}
                  <Link
                    href="/docs/getting-started"
                    className="text-muted-foreground/80"
                  >
                    Getting started
                  </Link>
                  <Link
                    href="/docs/components"
                    className="text-muted-foreground/80"
                  >
                    Components
                  </Link>
                  <Link href="/pricing" className="text-muted-foreground/80">
                    Pricing
                  </Link>
                </div>

                <div className="flex flex-col gap-2 items-start">
                  <h1>Company</h1>
                  <Link
                    href="/docs/getting-started"
                    className="text-muted-foreground/80"
                  >
                    About
                  </Link>
                  <Link
                    href="/docs/components"
                    className="text-muted-foreground/80"
                  >
                    Privacy
                  </Link>
                  <Link href="/pricing" className="text-muted-foreground/80">
                    Terms of Service
                  </Link>
                </div>

                <div className="flex flex-col gap-2 items-start">
                  <h1>Resources</h1>
                  <Link
                    href="/docs/getting-started"
                    className="text-muted-foreground/80"
                  >
                    Guides
                  </Link>
                  <Link
                    href="/docs/components"
                    className="text-muted-foreground/80"
                  >
                    Components
                  </Link>
                  <Link href="/pricing" className="text-muted-foreground/80">
                    Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
