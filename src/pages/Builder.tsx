import { ProfileAvatar } from "@/components/builder/ProfileAvatar";
import { ProfileInfo } from "@/components/builder/ProfileInfo";
import { BuilderFAB } from "@/components/builder/BuilderFAB";
import { BuilderNavigation } from "@/components/builder/BuilderNavigation";

const Builder = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-[30%] border-b md:border-r border-border bg-primary p-4 md:p-6">
        <div className="h-full flex flex-col">
          <ProfileAvatar />
          <ProfileInfo />
        </div>
      </div>
      <div className="w-full md:w-[70%] bg-primary p-4 md:p-6">
        <div className="h-full flex flex-col">
          {/* Content will be added here later */}
        </div>
      </div>
      <BuilderFAB />
      <BuilderNavigation />
    </div>
  );
};

export default Builder;
