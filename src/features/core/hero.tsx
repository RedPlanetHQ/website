import { Button, Dialog, DialogContent } from '@redplanethq/ui';
import Image from 'next/image';
import { useState } from 'react';

import { Container } from '../../components';
import { DownloadButton } from '../../components/utils';

const DemoVideo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container className="flex flex-col items-center rounded p-2">
        <Button
          onClick={() => setOpen(true)}
          className="flex items-center justify-between transition p-2 h-18 gap-2 pr-2 backdrop-blur-lg"
          variant="secondary"
          aria-label="Play video"
        >
          <div className="relative flex-shrink-0 overflow-hidden w-16 h-12">
            <Image
              src="/memory.png"
              alt="Demo video thumbnail"
              className="rounded"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="white"
                style={{
                  filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.25))',
                }}
                aria-hidden="true"
              >
                <polygon points="13,10 23,16 13,22" fill="#C15E50" />
              </svg>
            </span>
          </div>
          <div className="px-2">Watch trailer</div>
        </Button>
      </Container>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="fixed inset-0 flex items-center justify-center z-50 bg-transparent shadow-none p-0">
          <div className="relative w-[90vw] max-w-[560px] aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/iANZ32dnK60"
              title="Demo Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const Hero = () => {
  return (
    <section className="w-full">
      <Container className="flex flex-col items-center text-center w-full !py-[6rem] lg:!py-[12rem] h-full relative justify-center mx-auto max-w-3xl">
        <div className="relative flex flex-wrap text-center justify-center text-[30px] lg:text-[52px] mt-5 lg:mt-10 font-bold">
          Your digital brain for AI era
        </div>
        <div className="text-[20px]">
          CORE is your shared layer across Cursor, Claude, ChatGPT and more; so
          you never repeat yourself.
        </div>
        <div className="flex gap-1 my-5">
          <DownloadButton size="2xl" />
        </div>
        <DemoVideo />
      </Container>
    </section>
  );
};
