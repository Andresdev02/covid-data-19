import { Activity, Statistics } from "./dashboard";

const Body = () => {
  return (
    <main id="body" className="w-full  min-h-screen justify-center flex">
      <article className="ml-[70px] mt-[70px] p-10 w-full ">
        <div className="flex flex-col space-y-10 max-w-[1200px] w-[90%]">
          {/* Activity */}
          <Activity />
          {/* Statistics */}
          <Statistics />
        </div>
      </article>
    </main>
  );
};

export default Body;
