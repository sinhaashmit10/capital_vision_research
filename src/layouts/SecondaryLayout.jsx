import Navbar2 from "@/components/Navbar2";

const SecondaryLayout = ({ children }) => {
  return (
    <>
      <div className="mb-[20px]">
        <Navbar2 />
      </div>
      <div className="mt-[40px]">{children}</div>
    </>
  );
};

export default SecondaryLayout;
