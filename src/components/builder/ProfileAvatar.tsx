
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";

interface ProfileAvatarProps {
  initialAvatarUrl?: string;
}

export const ProfileAvatar = ({ initialAvatarUrl = "/placeholder.svg" }: ProfileAvatarProps) => {
  const { toast } = useToast();
  const [avatarUrl, setAvatarUrl] = useState(initialAvatarUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({
          variant: "destructive",
          title: "Invalid file type",
          description: "Please upload an image file."
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarUrl(e.target?.result as string);
        toast({
          title: "Success",
          description: "Profile picture updated successfully."
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center mb-4 md:mb-6">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <Avatar 
        className="h-20 w-20 md:h-24 md:w-24 border-4 border-[#F1F1F1] cursor-pointer hover:opacity-90 transition-opacity"
        onClick={handleAvatarClick}
      >
        <AvatarImage src={avatarUrl} alt="Profile" />
        <AvatarFallback className="bg-[#F1F1F1]">PF</AvatarFallback>
      </Avatar>
    </div>
  );
};
