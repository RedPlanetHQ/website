import { Button, Checkbox, cn } from '@redplanethq/ui';
import { RiGithubFill } from '@remixicon/react';
import { useRouter } from 'next/router';
import React from 'react';

import { Gmail } from '../icons/gmail';

export function Container({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div
      className={cn('max-w-5xl mx-auto w-full flex flex-col', className)}
      id={id}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  name: string;
  id?: string;
  color?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Container id={id} className={className}>
      <div className="flex flex-col">{children}</div>
    </Container>
  );
}

export const TaskItem = ({
  number,
  title,
  github,
  google,
}: {
  number: string;
  title: string;
  github?: boolean;
  google?: boolean;
}) => {
  return (
    <button
      className={cn(
        'inline-flex max-w-[200px] h-5 items-center text-left mr-1 bg-grayAlpha-100 hover:bg-grayAlpha-200 p-1 text-sm rounded-sm relative top-[2px]',
      )}
    >
      <Checkbox className="shrink-0 h-[14px] w-[14px] ml-1 mr-1 rounded-[6px]" />
      <span className="text-muted-foreground font-mono shrink-0 mr-1">
        T-{number}
      </span>

      <div className="inline-flex items-center justify-start shrink min-w-[0px] min-h-[24px]">
        <div className={cn('text-left truncate text-sm')}>{title}</div>
        {github && <RiGithubFill size={14} className="ml-1 shrink-0" />}
        {google && <Gmail size={14} className="ml-1 shrink-0" />}
      </div>
    </button>
  );
};

export const DownloadButton = ({
  size = 'lg',
}: {
  size?: 'xl' | 'lg' | '2xl';
}) => {
  const router = useRouter();
  const path = router.pathname;

  // Use React.useMemo to avoid recalculating on every render
  const { label, url } = React.useMemo(() => {
    if (path === '/core') {
      return {
        label: 'Sign up now',
        url: 'https://core.heysol.ai',
      };
    }
    return {
      label: 'Join waitlist',
      url: 'https://tally.so/r/mOZNJa',
    };
  }, [path]);

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <Button
      size={size}
      variant="default"
      className="gap-2 items-center w-fit !bg-white text-black"
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};
