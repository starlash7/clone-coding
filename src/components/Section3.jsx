const Section3 = () => {
  return (
    <div className="flex bg-[#FFF8F1] w-[1562px] h-[750px]">
      <div className="flex bg-[#FFF8F1] justify-between items-center w-[1024px] mx-[269px]">
        <div className="flex-col bg-[#FFF8F1] w-[392px] h-[424px]">
          <p className="flex text-[18px] h-[23px] text-[#FF6F0F] mb-[10px]">
            동네생활
          </p>
          <h1 className="flex w-[353px] h-[114px] mb-[10px] text-[42px] font-[600]">
            이웃만 아는 <br></br>동네 정보와 이야기
          </h1>
          <p className="flex text-[#7c7c7c] text-[20px]">
            우리 동네의 다양한 정보와 이야기를 <br></br>
            공감과 댓글로 나누어요.
          </p>
          <ul className="flex bg-[#FFF8F1] w-[392px] h-[167px] mt-[40px]">
            <li className="w-[124px] h-[135px] bg-[#FFF8F1]">
              <div>
                <img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/rebranded-icon-story-1-f7be38c51a389f415e9c0ae94294a80d10a744c3006a2e3a5978c11f8fc8d5d5.svg" />
              </div>
              <div className="bg-[#FFF8F1] w-[124px] h-[21px] mt-[16px] mb-[8px] text-[14px] font-[500]">
                동네모임
              </div>
              <div className="text-[#7c7c7c] w-[124px] h-[34px] text-[13px]">
                근처 이웃들과 동네 <br></br>이야기를 해보세요.
              </div>
            </li>
            <li className="w-[124px] h-[135px] bg-[#FFF8F1]">
              <div>
                <img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/rebranded-icon-story-2-5611a1d6fccb1e6b28adac130948d9701358f94fe7eb31daa224493bbd875c36.svg" />
              </div>
              <div className="bg-[#FFF8F1] w-[124px] h-[21px] mt-[16px] mb-[8px] text-[14px] font-[500]">
                동네질문
              </div>
              <div className="text-[#7c7c7c] w-[124px] h-[34px] text-[13px]">
                궁금한 게 있을 땐 <br></br>이웃에게 물어보세요.
              </div>
            </li>
            <li className="w-[124px] h-[135px] bg-[#FFF8F1]">
              <div>
                <img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/rebranded-icon-story-3-5a01573654c91fafeb8253238bac8a718edb7fdf3e49ce8b1a7b89c4aebc6f61.svg" />
              </div>
              <div className="bg-[#FFF8F1] w-[124px] h-[21px] mt-[16px] mb-[8px] text-[14px] font-[500]">
                동네분실센터
              </div>
              <div className="text-[#7c7c7c] w-[124px] h-[34px] text-[13px]">
                무언가를 잃어버렸다면 <br></br>글을 올려보세요.
              </div>
            </li>
          </ul>
        </div>
        <div className="flex w-[650px] h-[750px]">
          <img
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-2-c99a6862a786b8f801c08ea8e76cfc0c06b5f86442c90ff7bffef0f99146321e.png"
            class="home-main-image-02"
            loading="lazy"
            alt="이웃과 함께하는 동네생활"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
