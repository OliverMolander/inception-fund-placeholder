import LoadingSpinner from "@/components/LoadingSpinner";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-radial from-background to-black p-4">
      <div className="text-center animate-fade-in">
        <LoadingSpinner />
        <h1 className="mt-8 text-2xl md:text-4xl font-medium tracking-tight">
          Change will never be this slow again
        </h1>
      </div>
    </div>
  );
};

export default Index;