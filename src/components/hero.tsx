import { ArrowRight, Button } from '@redplanethq/ui';
import Image from 'next/image';

import { Container } from './utils';

export const Hero = () => {
  const handleDownload = () => {
    const downloadUrl = `https://tally.so/r/mOZNJa`;
    window.open(downloadUrl, '_blank');
  };

  return (
    <section className="w-full">
      <Container className="flex flex-col items-start text-start w-full pt-5 lg:pt-10 h-full relative justify-center mx-auto">
        <div className="relative flex flex-wrap text-start justify-start text-[32px] lg:text-[54px] mt-5 lg:mt-5 font-bold max-w-[19ch] mb-4 tracking-[-0.8px] lg:tracking-[-1.2px] leading-[40px] lg:leading-[66.88px]">
          Your personal assistant for daily focus
        </div>
        <div className="flex gap-4 mt-2">
          <Button
            className="p-4 rounded-lg !bg-white text-accent-foreground"
            size="2xl"
            onClick={handleDownload}
          >
            Join the wailist <ArrowRight size={14} className="ml-2" />
          </Button>

          <Button
            className="p-4 rounded-lg"
            size="2xl"
            variant="outline"
            onClick={handleDownload}
          >
            Get a demo
          </Button>
        </div>
        <div className="flex flex-col gap-1 w-full  mt-10 lg:mt-20 mb-5">
          <Image
            src="/sol/tasks.png"
            alt="logo"
            width={48}
            height={48}
            className="!w-full !h-full mt-2"
          />{' '}
        </div>
      </Container>
    </section>
  );
};
