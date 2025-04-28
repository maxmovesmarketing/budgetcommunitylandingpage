
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ProfileInfo = () => {
  const { toast } = useToast();
  const [bioLength, setBioLength] = useState(0);
  const MAX_BIO_LENGTH = 300;

  const handleBioInput = (e: React.FormEvent<HTMLDivElement>) => {
    const text = e.currentTarget.textContent || '';
    if (text.length > MAX_BIO_LENGTH) {
      e.currentTarget.textContent = text.slice(0, MAX_BIO_LENGTH);
      toast({
        variant: "destructive",
        title: "Character limit reached",
        description: "You've reached the 300 character limit."
      });
    }
    setBioLength(e.currentTarget.textContent?.length || 0);
  };

  return (
    <div className="space-y-2 text-center px-2 md:px-4">
      <div 
        className="text-[18px] md:text-[20px] font-bold text-[#222222] outline-none" 
        contentEditable="true"
        role="textbox"
        aria-label="Your name"
        data-placeholder="Your Name"
        onFocus={(e) => e.currentTarget.textContent === 'Your Name' && (e.currentTarget.textContent = '')}
        onBlur={(e) => e.currentTarget.textContent === '' && (e.currentTarget.textContent = 'Your Name')}
      >
        Your Name
      </div>
      <div 
        className="text-[14px] md:text-[16px] text-[#8E9196] outline-none"
        contentEditable="true"
        role="textbox"
        aria-label="Your bio"
        data-placeholder="Your Bio..."
        onInput={handleBioInput}
        onFocus={(e) => e.currentTarget.textContent === 'Your Bio...' && (e.currentTarget.textContent = '')}
        onBlur={(e) => e.currentTarget.textContent === '' && (e.currentTarget.textContent = 'Your Bio...')}
      >
        Your Bio...
      </div>
      {bioLength === MAX_BIO_LENGTH && (
        <div className="text-xs text-muted-foreground">
          {bioLength}/{MAX_BIO_LENGTH} characters
        </div>
      )}
    </div>
  );
};
