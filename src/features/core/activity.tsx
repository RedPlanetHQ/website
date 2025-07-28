import { LayoutGrid, Link, Lock, Webhook } from 'lucide-react';
import Image from 'next/image';

import { Container } from '../../components';

export const Activity = () => {
  return (
    <div className="bg-[linear-gradient(rgba(250,250,250,0.02),rgba(250,250,250,0))]">
      <Container className="p-6 pt-[10rem]">
        <div
          className="
          grid
          grid-cols-2
          grid-rows-[auto]
          auto-cols-fr
          gap-x-[5rem]
          gap-y-[4rem]
          items-start
          max-w-full

          max-[991px]:gap-x-[3rem]
          max-[991px]:gap-y-[2rem]

          max-[767px]:grid-cols-1
          max-[767px]:gap-x-[2rem]
          max-[767px]:gap-y-[2rem]
          max-[767px]:place-items-start
        "
        >
          <h1 className="text-xl">Capture context without lifting a finger</h1>

          <p className="text-muted-foreground text-lg">
            CORE automatically logs activity from your connected tools like
            emails from your manager or assigned issues in Linear, turning
            fleeting events into lasting memory.
          </p>
        </div>

        <div className="mt-[5rem] lg:mt-[8rem] relative">
          <Image
            src="/core/activity.png"
            alt="logo"
            width={48}
            height={48}
            className="object-fit !w-full !h-full"
          />
        </div>

        <div
          className="
            grid
            grid-cols-4
            gap-6
            border-border
            border-t
            pt-5
            w-full
            mt-[5rem] lg:mt-[8rem]
            max-[991px]:grid-cols-2
            max-[767px]:grid-cols-1
          "
        >
          <div className="px-0 p-6 rounded-lg flex flex-col items-start">
            <h2 className="text-lg font-semibold mb-2 flex gap-2 items-center">
              <Link size={16} /> MCP Links
            </h2>
            <p className="text-muted-foreground text-md">
              Secure, continuous connection to every integration via MCP
            </p>
          </div>
          <div className="px-0 p-6 rounded-lg flex flex-col items-start">
            <h2 className="text-lg font-semibold mb-2 flex gap-2 items-center">
              <Webhook size={16} /> Real-time Webhooks
            </h2>
            <p className="text-muted-foreground text-md">
              Instant updates on user activity across tools
            </p>
          </div>
          <div className="px-0 p-6 rounded-lg flex flex-col items-start">
            <h2 className="text-lg font-semibold mb-2 flex gap-2 items-center">
              <LayoutGrid size={16} />
              Integration in chat
            </h2>
            <p className="text-muted-foreground text-md">
              Talk to your tools from within CORE Chat
            </p>
          </div>
          <div className="px-0 p-6 rounded-lg flex flex-col items-start">
            <h2 className="text-lg font-semibold mb-2 flex gap-2 items-center">
              <Lock size={16} /> Secure
            </h2>
            <p className="text-muted-foreground text-md">
              No credential sharing—fully isolated and safe
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
