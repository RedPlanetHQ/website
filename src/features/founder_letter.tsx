import { Button, Card, CardContent } from '@redplanethq/ui';
import { useEffect, useState } from 'react';

import { Check } from 'src/icons/check';

const conversations = [
  {
    id: 'dev',
    role: 'Developer',
    name: 'Sarah',
    badge: 'Engineering',
    color: '#b56455',
    conversation: [
      {
        speaker: 'Sarah',
        message: 'Ugh, what am I even supposed to start with today?',
      },
      {
        speaker: 'SOL',
        message:
          "The bug from yesterday's PR is already linked to your Linear issue. That's top of the list.",
      },
      { speaker: 'Sarah', message: 'Did I miss anything else?' },
      {
        speaker: 'SOL',
        message:
          'Two reviews waiting. One is urgent. I put them right under your tasks.',
      },
      { speaker: 'Sarah', message: '…and Slack?' },
      {
        speaker: 'SOL',
        message: "Filtered. Just the threads you're mentioned in.",
      },
    ],
  },
  {
    id: 'pm',
    role: 'Product Manager',
    name: 'Alex',
    badge: 'Product',
    color: '#7b8a34',
    conversation: [
      { speaker: 'Alex', message: 'Okay, where are we actually stuck?' },
      {
        speaker: 'SOL',
        message:
          'Payments migration. Three tasks blocked. I pulled them into one view.',
      },
      { speaker: 'Alex', message: 'Do I need to ping the team?' },
      {
        speaker: 'SOL',
        message:
          'No. They already updated in GitHub. I stitched the notes here.',
      },
      {
        speaker: 'Alex',
        message: 'Finally. No more "status updates" meetings.',
      },
      { speaker: 'SOL', message: 'Exactly.' },
    ],
  },
  {
    id: 'em',
    role: 'Engineering Manager',
    name: 'Jordan',
    badge: 'Management',
    color: '#1c91a8',
    conversation: [
      { speaker: 'Jordan', message: "How's the team holding up?" },
      {
        speaker: 'SOL',
        message:
          'Mostly fine. But two people are pushing commits after midnight.',
      },
      { speaker: 'Jordan', message: 'Again?' },
      {
        speaker: 'SOL',
        message: "Yeah. I flagged their workload. You'll want to check in.",
      },
      { speaker: 'Jordan', message: 'And progress?' },
      {
        speaker: 'SOL',
        message: "On track. You don't need another dashboard for that.",
      },
    ],
  },
  {
    id: 'sales',
    role: 'Sales Rep',
    name: 'Morgan',
    badge: 'Sales',
    color: '#886dbc',
    conversation: [
      { speaker: 'Morgan', message: 'Did I follow up with Acme yet?' },
      { speaker: 'SOL', message: 'Already done. Draft sent this morning.' },
      { speaker: 'Morgan', message: 'And pipeline?' },
      {
        speaker: 'SOL',
        message: 'Updated from calls, emails, and notes. No manual work.',
      },
      { speaker: 'Morgan', message: 'So I just… keep selling?' },
      { speaker: 'SOL', message: 'Pretty much.' },
    ],
  },
];

export const FounderLetter = () => {
  const [activeConversation, setActiveConversation] = useState(
    conversations[0],
  );
  const [messageIndex, setMessageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const selectRole = (conv: (typeof conversations)[0]) => {
    setActiveConversation(conv);
    setMessageIndex(0);

    setIsPlaying(true);

    setTimeout(() => {
      playConversation();
    }, 300);
  };

  const playConversation = () => {
    setIsPlaying(true);

    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev >= activeConversation.conversation.length - 1) {
          setIsPlaying(false);

          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  useEffect(() => {
    playConversation();
  }, []);

  return (
    <section className="mb-[3rem]">
      <div className="w-full p-6 p px-0 border-[#3131314D] bg-mars-manifesto">
        <p className="text-xl mb-[3rem]">
          You open SOL. Everything is in one place. You just act.
        </p>

        <div className="flex flex-col gap-4 text-xl">
          <div className="flex gap-2 items-center">
            <Check size={28} />
            Your tasks are already organized.
          </div>

          <div className="flex gap-2 items-center">
            <Check size={28} />
            Your signals already connected.
          </div>

          <div className="flex gap-2 items-center">
            <Check size={28} />
            Your day prioritized before it starts.
          </div>

          <div className="flex gap-2 items-center">
            <Check size={28} />
            Replaces a dozen tools. Feels like one command centre.
          </div>
        </div>

        <div className="founder-letter mt-[3rem] !text-lg">
          <div className="flex gap-2 flex-wrap">
            {conversations.map((conv, index) => (
              <Button
                variant="secondary"
                size="xl"
                isActive={activeConversation.id === conv.id}
                key={index}
                onClick={() => {
                  selectRole(conv);
                }}
              >
                {conv.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Conversation Display */}
        <div className="lg:sticky lg:top-8 bg-background-2 mt-2 rounded-md">
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold`}
                    style={{
                      backgroundColor: activeConversation.color,
                    }}
                  >
                    {activeConversation.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold">{activeConversation.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {activeConversation.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 min-h-[400px] text-lg">
                {activeConversation.conversation
                  .slice(0, messageIndex + 1)
                  .map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.speaker === 'SOL' ? 'justify-start' : 'justify-end'} animate-in slide-in-from-bottom-2 duration-500`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-xl ${
                          msg.speaker === 'SOL'
                            ? 'bg-grayAlpha-100 mr-4'
                            : 'text-primary-foreground ml-4'
                        }`}
                      >
                        <div className="leading-relaxed">{msg.message}</div>
                      </div>
                    </div>
                  ))}

                {isPlaying &&
                  messageIndex < activeConversation.conversation.length - 1 && (
                    <div className="flex justify-center">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: '0.1s' }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: '0.2s' }}
                        ></div>
                      </div>
                    </div>
                  )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
