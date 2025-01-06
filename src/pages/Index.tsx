import LoadingSpinner from "@/components/LoadingSpinner";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-radial from-background to-black p-4">
      <div className="text-center animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold mb-12">Inception Fund</h1>
        <div className="flex items-center justify-center gap-4">
          <LoadingSpinner />
          <span className="text-xl">Loading...</span>
        </div>
        <h2 className="mt-8 text-2xl md:text-4xl font-medium tracking-tight">
          Change will never be this slow again
        </h2>
      </div>
    </div>
  );
};

export default Index;