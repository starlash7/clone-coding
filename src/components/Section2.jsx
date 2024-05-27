const Section2 = () => {
  return (
    <div className="flex w-[1562px] h-[750px] bg-[#fff]">
      <div className="flex bg-[#fff] justify-between items-center w-[1024px] mx-[269px]">
        <div className="w-[655px] h-[750px]">
          <img
            class="home-main-image-01"
            alt="우리동네 중고 직거래 사진"
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-1-efd09cb54044140d530c6647906303c669ca80a8b51473722fc2b1747a3d9047.png"
          ></img>
        </div>
        <div className="flex-col bg-[#fff] w-[353px] h-[296px]">
          <p className="flex text-[18px] h-[23px] text-[#FF6F0F] mb-[10px]">
            중고거래
          </p>
          <h1 className="flex w-[353px] h-[114px] mb-[10px] text-[42px] font-[500]">
            믿을만한 <br></br>이웃 간 중고거래
          </h1>
          <p className="flex text-[#7c7c7c] text-[20px]">
            동네 주민들과 가깝고 따뜻한 거래를 <br></br>
            지금 경험해보세요.
          </p>
          <div className="bg-[#fff] justify-center items-center flex-col w-[353px] h-[47.76px] mt-[32px]">
            <button className="bg-[#E9ECEF] text-[18px] font-[700] flex-col w-[137.57px] h-[47.76px] mr-[10px] p-[12px] px-5 rounded-lg">
              인기매물 보기
            </button>
            <button className="bg-[#E9ECEF] text-[18px] font-[700] flex-col w-[192.58px] h-[47.76px] mr-[10px] p-[12px] px-5 rounded-lg">
              믿을 수 있는 중고거래
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
