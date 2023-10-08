import { MagnifyingGlass } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="w-full flex items-center justify-center h-[60vh]">
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default Spinner;
