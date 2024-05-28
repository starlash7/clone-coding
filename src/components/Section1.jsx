const Section1 = () => {
  return (
    <div className="flex items-center max-w-[1562px] mx-auto h-[784px] bg-[#FFFAE0] pt-[24px] ">
      <div className="bg-[#FFFAE0] flex w-[1024px] h-[760px] ml-[269px] relative">
        <div className="bg-[#FFFAE0] flex-col w-[1024px] h-[525.5px] ">
          <h1 className="flex w-[1024px] h-[346px] pt-[200px] text-[54px] mb-[32px] font-semibold">
            당신 근처의<br></br> 지역 생활 커뮤니티
          </h1>
          <p className="flex w-[1024px] h-[60px] text-[20px] text-gray-500">
            동네라서 가능한 모든 것<br></br>당근에서 가까운 이웃과 함께해요.
          </p>
          <div className="bg-[#FFFAE0] flex w-[1024px] h-[56px] mt-[20px]">
            <a class="w-[180px] h-14 rounded-lg bg-orange-500 box-border no-underline px-[20px] py-[14px] inline-block align-middle text-center mr-[10px]">
              <div className="flex items-center">
                <img
                  class="fixed-google-play"
                  alt="Google Play"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/google-play-white-0531cab5dbe15262e226cfb4acebeb316708ae0034d50b86ad4d809a03b6f5f0.svg"
                />

                <div className="flex-col text-[#fff] ml-[20px] text-[16px]">
                  Google Play
                </div>
              </div>
            </a>
            <a class="w-[180px] h-14 rounded-lg bg-orange-500 box-border no-underline px-[20px] py-[14px] inline-block align-middle text-center mr-[10px]">
              <div className="flex itmes-center">
                <img
                  class="fixed-apple-store"
                  alt="App Store"
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/apple-store-white-9ebb10b431c549dd19f032f70e6762df307939b5add030265d9c2dea888b2d03.svg"
                />
                <div className=" text-[#fff] ml-[20px] text-[16px]">
                  App Store
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className=" flex-col w-[655px] h-[750px] absolute bg-[#FFFAE0] right-[-160px] bottom-0">
          <img
            class="home-main-image-top"
            alt="중고거래, 동네생활 질문글, 알바와 동네업체"
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-top-eb44f81acb1938b57ba029196887cdd56fbb66dc46aa5d8c6d8392a7d8c9e671.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
