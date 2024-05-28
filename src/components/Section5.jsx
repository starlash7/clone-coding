const Section5 = () => {
  return (
    <div className="flex bg-[#F6FDEC] w-[1562px] h-[750px] mx-auto">
      <div className="flex w-[1024px] h-[750px] mx-auto justify-between items-center">
        <div className="flex-col bg-[#F6FDEC] w-[353px] h-[296px]">
          <p className="flex text-[18px] h-[23px] text-[#FF6F0F] mb-[10px]">
            동네업체
          </p>
          <h1 className="flex w-[353px] h-[114px] mb-[10px] text-[42px] font-[600]">
            내 근처에서 찾는 <br></br>동네업체
          </h1>
          <p className="flex text-[#7c7c7c] text-[20px]">
            이웃들의 추천 후기를 확인하고<br></br>
            동네 곳곳의 업체들을 찾을 수 있어요.
          </p>
          <div className="bg-[#F6FDEC] justify-center items-center flex-col w-[353px] h-[47.76px] mt-[32px]">
            <button className="bg-[#E9ECEF] text-[18px] font-[500] flex-col w-[180.57px] h-[47.76px] mr-[10px] p-[12px] px-5 rounded-lg">
              당근 동네업체 보기
            </button>
          </div>
        </div>
        <div className="flex w-[650px] h-[750px]">
          <img
            class="home-main-image-04"
            loading="lazy"
            alt="내 근처에서 찾는 동네업체"
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-business-cc45c805de4a639e259aea606640042d09bccf358e8d20f50af325dd994aceef.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;
