import { Button, buttonVariants, cn } from '@redplanethq/ui';
import { RiGithubFill } from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import { DownloadButton } from './utils';

export const Header = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const router = useRouter();
  const path = router.pathname;

  return (
    <header
      ref={headerRef}
      className={`sticky z-10 transition-all duration-300 ease-out top-0 translate-y-none w-full bg-transparent py-0 lg:py-2`}
    >
      <div className="mx-auto max-w-5xl w-full flex gap-2 justify-between items-center bg-grayAlpha-100 p-1 px-3 rounded-none lg:rounded-lg backdrop-blur-lg">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 shrink-0">
            {path === '/core' ? (
              <Image src="/core/logo.png" alt="logo" width={48} height={48} />
            ) : (
              <Image src="/logo_black.svg" alt="logo" width={48} height={48} />
            )}
            <div className="font-mono mr-2 text-lg font-medium">
              {path === '/core' ? 'CORE' : 'SOL'}{' '}
            </div>
          </div>
        </Link>

        {/* Right Side: Links and Download */}
        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-1 mr-2">
            {/* Show "Core" if on /, nothing if on /core */}
            {path === '/' ? (
              <Link
                href="/core"
                className={cn(
                  'text-foreground transition-colors',
                  buttonVariants({ variant: 'ghost', size: 'lg' }),
                )}
              >
                Core
              </Link>
            ) : (
              <Link
                href="/"
                className={cn(
                  'text-foreground transition-colors',
                  buttonVariants({ variant: 'ghost', size: 'lg' }),
                )}
              >
                SOL
              </Link>
            )}
            {/* Always show Docs */}
            <a
              href="https://docs.heysol.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'text-foreground transition-colors',
                buttonVariants({ variant: 'ghost', size: 'lg' }),
              )}
            >
              Docs
            </a>

            <a
              href="/changelog"
              className={cn(
                'text-foreground transition-colors',
                buttonVariants({ variant: 'ghost', size: 'lg' }),
              )}
            >
              Changelog
            </a>
          </nav>

          <Button
            size="lg"
            variant="secondary"
            className="gap-2 items-center w-fit"
            onClick={() =>
              window.open('https://github.com/RedPlanetHQ/sol', '_blank')
            }
          >
            <RiGithubFill size={20} />
            Star us
          </Button>
          <DownloadButton />
        </div>
      </div>
    </header>
  );
};
