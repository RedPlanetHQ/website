import { useToast } from '@redplanethq/ui';
import Image from 'next/image';

import { Container } from '../../components';
import { Bento } from '../../components/bento';

export const LinkChat = () => {
  const { toast } = useToast();

  const onCopy = () => {
    navigator.clipboard.writeText('https://core.heysol.ai/api/v1/mcp/memory');
    toast({
      title: 'Success',
      description: 'Copied url to clipboard',
    });
  };

  return (
    <Container className="p-6 mt-[5rem] lg:mt-[8rem] border-b border-border pb-0">
      <Bento
        left={
          <>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">Connect once, use everywhere</h1>
              <p className="text-muted-foreground">
                CORE links to tools like Claude, Cursor, or Slack through
                MCP—bringing shared memory to any interface.
              </p>
            </div>

            <div
              className="mt-10 cursor-pointer"
              title="Copy MCP Memory API URL"
              onClick={onCopy}
            >
              <Image
                src="/core/link.png"
                alt="logo"
                width={48}
                height={48}
                className="object-fit !w-full !h-full"
              />
            </div>
          </>
        }
        right={
          <>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl"> One chat to rule them all</h1>
              <p className="text-muted-foreground">
                Chat directly in CORE not just with your assistant, but with
                your connected tools like Slack, Linear, or Claude. View memory,
                take action, and stay in flow—all in one place.
              </p>
            </div>

            <div className="mt-10">
              <Image
                src="/core/chat.png"
                alt="logo"
                width={48}
                height={48}
                className="object-fit !w-full !h-full"
              />
            </div>
          </>
        }
      />
    </Container>
  );
};
