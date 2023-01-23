import Header from "../components/Header";

function Index() {
  return (
    <>
      <Header />
      <main className="h-screen w-screen bg-white flex">

        {/* Headline */}
        <div className="w-7/12 flex flex-row items-center px-[90px] ">
          <div>
            <div>
              <p className="flex items-center text-brand font-medium text-lg mt-[60px]">
                <span className="w-5 h-0.5 bg-brand block mr-[6px]"/>
                Future Invesment
              </p>
              <h3 className="mt-3 font-montserrat font-extrabold text-[60px] leading-[70px] text-text-200">
                Manage Your Every Day{" "}
                <span className="text-brand italic">
                  Very Easily
                </span>
              </h3>
              <p className="text-lg text-text-300 mt-5">
                Manage & develop your finances well for the future to come.
                Download now on your smartphone
              </p>
            </div>
            <div className="flex space-x-[30px] mt-[60px]">
              <a href="#">
                <img src="/assets/appstore.svg" />
              </a>
              <a href="#">
                <img src="/assets/googleplay.svg" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="w-5/12 bg-green-100 rounded-l-[30px]">

        </div>
      </main>
    </>
  );
}

export default Index;
