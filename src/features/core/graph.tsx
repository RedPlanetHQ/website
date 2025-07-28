import { Button } from '@redplanethq/ui';
import Image from 'next/image';

import { Container } from '../../components';
import { SwipeWrapper } from '../../components/swipe';

export const Graph = () => {
  return (
    <Container className="mt-5 p-6 pb-0">
      <SwipeWrapper
        left={
          <div>
            <div>
              <h1 className="text-[2.5rem] font-semibold leading-[1.2] mb-2">
                Built for human context
              </h1>
              <p className="max-w-[30ch] text-md text-muted-foreground">
                CORE structures information the way humans do—across time,
                context, and relationships.
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <Button variant="secondary" className="w-fit">
                Graph
              </Button>
              <Button variant="secondary" className="w-fit">
                Temporal
              </Button>
              <Button variant="secondary" className="w-fit">
                Rich Schema
              </Button>
            </div>
          </div>
        }
        right={
          <div className="max-w-full">
            <Image
              src="/core/memory.png"
              alt="logo"
              width={48}
              height={48}
              className="object-fit !w-full !h-full"
            />
          </div>
        }
      />
    </Container>
  );
};
