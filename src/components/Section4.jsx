const Section4 = () => {
  return (
    <div className="flex bg-[#f9f9f9] w-[1562px] h-[750px] mx-auto">
      <div className="flex w-[1024px] h-[750px] mx-auto justify-between items-center">
        <div className="flex w-[650px] h-[750px]">
          <img
            class="home-main-image-03"
            loading="lazy"
            alt="당근하듯 쉽고 편한 동네 알바 구하기"
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-3-c105057eecd5aecd8343a3ad6b396e64a79ee75d54b3e6239eb231779ab0db04.png"
          />
        </div>
        <div className="flex-col bg-[#f9f9f9] w-[353px] h-[296px]">
          <p className="flex text-[18px] h-[23px] text-[#FF6F0F] mb-[10px]">
            알바
          </p>
          <h1 className="flex w-[353px] h-[114px] mb-[10px] text-[42px] font-[500]">
            걸어서 10분! <br></br>동네 알바 구하기
          </h1>
          <p className="flex text-[#7c7c7c] text-[20px]">
            당근하듯 쉽고, 편하게 <br></br>
            당근 알바로 동네 알바를 구할 수 있어요.
          </p>
          <div className="bg-[#f9f9f9] justify-center items-center flex-col w-[353px] h-[47.76px] mt-[32px]">
            <button className="bg-[#E9ECEF] text-[18px] font-[700] flex-col w-[157.57px] h-[47.76px] mr-[10px] p-[12px] px-5 rounded-lg">
              내근처 알바보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
