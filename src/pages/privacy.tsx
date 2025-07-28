import { ScrollArea } from '@redplanethq/ui';

import { Container, Header } from 'src/components';

const Privacy = () => {
  return (
    <div className="flex min-h-svh h-[100vh] flex-col items-center justify-start overflow-hidden bg-background">
      <ScrollArea className="overflow-auto flex flex-col h-full w-full">
        <Header />

        <Container className="pt-[3rem] max-w-[40rem]">
          <h2 className="text-2xl"> Privacy</h2>
        </Container>
      </ScrollArea>
    </div>
  );
};

export default Privacy;
