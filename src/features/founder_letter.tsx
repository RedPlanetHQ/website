import { Button } from '@redplanethq/ui';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState, useEffect } from 'react';

export const FounderLetter = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const fullContent = `<p class="greeting">Hello,</p>

<p>Sol is named after the Martian day – your assistant working from Mars, always processing in parallel while you focus on what matters most.</p>

<p>Sol listens to your calendar, email, and work tools (Linear, Jira etc) to automatically create and manage tasks for you. Built on CORE infrastructure, it's the difference between a chatbot and a true digital colleague.</p>

<p>Our vision: Sol manages all your work and can offload complex tasks to Claude for coding and problem-solving. It's not just task management – it's intelligent task execution.</p>

<p class="welcome">Welcome to Sol.</p>

<div class="signature">
<p>The Sol Founding Team</p>
</div>`;

  // Reveal by letter, not by word
  const displayedContent = fullContent.slice(0, currentLetterIndex);

  const editor = useEditor({
    extensions: [StarterKit],
    content: displayedContent,
    editable: false,
  });

  useEffect(() => {
    if (currentLetterIndex < fullContent.length) {
      const timer = setTimeout(() => {
        setCurrentLetterIndex((prev) => prev + 1);

        // Show button after a certain number of letters (e.g., after 80 chars)
        if (currentLetterIndex > 80 && !showButton && !isComplete) {
          setShowButton(true);
        }
      }, 50); // Faster for a more "spilling" effect

      return () => clearTimeout(timer);
    }
    setIsComplete(true);
    setShowButton(false);

    return () => {};
  }, [currentLetterIndex, fullContent.length, showButton, isComplete]);

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(displayedContent);
    }
  }, [displayedContent, editor]);

  const handleReadAtOnce = () => {
    setCurrentLetterIndex(fullContent.length);
    setIsComplete(true);
    setShowButton(false);
    if (editor) {
      editor.commands.setContent(fullContent);
    }
  };

  return (
    <section className="font-mono mb-[8rem]">
      <div className="w-full p-6 px-0 border-[#3131314D]">
        <div className="founder-letter p-4 lg:p-0">
          <EditorContent editor={editor} />
        </div>

        {showButton && !isComplete && (
          <div className="mt-6 text-center">
            <Button onClick={handleReadAtOnce} variant="secondary">
              Read at once
            </Button>
          </div>
        )}
      </div>

      <style jsx>{`
        .founder-letter {
          font-size: 20px; /* Notion's default font size is about 18px */
          line-height: 1.7; /* Notion's line height is a bit more spacious */
          color: white;
        }

        .founder-letter :global(.ProseMirror) {
          outline: none;
          font-family: inherit;
        }

        .founder-letter :global(.ProseMirror p) {
          margin-bottom: 1.7rem;
          font-size: 18px; /* Match Notion's paragraph size */
          line-height: 1.7;
        }

        .founder-letter :global(.ProseMirror p.greeting) {
          font-size: 24px; /* Notion's heading 2 is about 24px */
          font-weight: 600;
          margin-bottom: 2.2rem;
          color: white;
        }

        .founder-letter :global(.ProseMirror p.welcome) {
          font-size: 20px; /* Slightly larger for emphasis */
          font-weight: 500;
          color: white;
          margin-bottom: 2rem;
        }

        .founder-letter :global(.ProseMirror .signature) {
          text-align: right;
          margin-top: 2.5rem;
        }

        .founder-letter :global(.ProseMirror .signature p) {
          font-weight: 500;
          color: white;
          margin-bottom: 0;
          font-size: 18px;
        }
      `}</style>
    </section>
  );
};
