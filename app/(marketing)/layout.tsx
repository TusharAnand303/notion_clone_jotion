import Navbar from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" dark:bg-[#1f1f1f]">
      <main className="h-full pt-[8rem]">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default MarketingLayout;
