import { ScrollArea } from '@redplanethq/ui';
import Image from 'next/image';

import { Container, DownloadButton, Footer, Header } from '../components';
import { Activity } from '../features/core/activity';
import { Graph } from '../features/core/graph';
import { Hero } from '../features/core/hero';
import { LinkChat } from '../features/core/link-chat';

const Index = () => {
  return (
    <div className="flex min-h-svh h-[100vh] flex-col items-center justify-start overflow-hidden bg-background">
      <ScrollArea className="overflow-auto flex flex-col h-full w-full">
        <Header />

        <div className="p-6 relative">
          <div className="background-image flex justify-center items-end w-full h-full absolute inset-x-0 -top-[80px]">
            <Image
              src="/core/hero.png"
              alt="logo"
              width={48}
              height={48}
              className="object-cover md:object-fill !w-full !h-full opacity-60"
            />
          </div>
          <Hero />
        </div>

        <Container className="mt-5 mb-[5rem] lg:mb-[8rem] text-center max-w-[60ch]">
          <h1 className="text-[28px] md:text-[40px] font-bold">
            Built for intelligent agents
          </h1>
          <p className="text-lg mt-2">
            Empower your assistant with contextual memory and real-time
            activity, designed to adapt to your tools and workflows.
          </p>
        </Container>

        <Graph />
        <Activity />
        <LinkChat />
        <Container className="my-[5rem] lg:my-[8rem] text-center flex flex-col items-center max-w-[50ch]">
          <h1 className="text-[24px] md:text-[36px] font-bold">
            Context that’s always within reach
          </h1>
          <div className="flex gap-1 my-5">
            <DownloadButton size="2xl" />
          </div>
        </Container>
        <Footer />
      </ScrollArea>
    </div>
  );
};

export default Index;
