
import { Input } from "@/components/ui/input";

const ClaimLink = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col px-4 md:px-8 pt-20">
      {/* Main content */}
      <div className="max-w-5xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 tracking-tight text-primary-dark">
            First, claim your unique link
          </h1>
          <p className="font-sans text-lg text-text-secondary">
            The good ones are still available!
          </p>
        </div>

        {/* Input Section */}
        <div className="max-w-xl animate-fade-in delay-100">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-text-secondary">tripgem.me/</span>
            <Input 
              type="text" 
              placeholder="your-name"
              className="flex-1"
            />
          </div>
          <p className="text-sm text-text-secondary">
            or <a href="#" className="text-text hover:underline">log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClaimLink;
