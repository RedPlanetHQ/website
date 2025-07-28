/* eslint-disable @next/next/no-img-element */
import { ScrollArea } from '@redplanethq/ui';
import Image from 'next/image';

import { Container, Footer, Header, Hero } from '../components';
import { FounderLetter } from '../features/founder_letter';

const Index = () => {
  return (
    <div className="flex min-h-svh h-[100vh] flex-col items-center justify-start overflow-hidden bg-background">
      <ScrollArea className="overflow-auto flex flex-col h-full w-full">
        <Header />
        <div className="p-6 relative">
          <div className="background-image flex justify-center items-end w-full !h-full absolute inset-x-0 -top-[56px] lg:-top-[80px]">
            <Image
              src="/hero.png"
              alt="logo"
              width={48}
              height={48}
              className="object-fit !w-full !h-full"
            />
          </div>
          <Hero />
        </div>

        <Container className="pt-[3rem]">
          <FounderLetter />
        </Container>

        <Footer />
      </ScrollArea>
    </div>
  );
};

export default Index;
