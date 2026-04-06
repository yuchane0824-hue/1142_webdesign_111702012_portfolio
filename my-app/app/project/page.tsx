import Image from "next/image";

export default function project() {

  return (
    <div>
      {/* 上半部 */}
      <div className="flex p-[20px]">
        <p className="text-lg font-bold">
          就說我喜歡剪片 這邊是我實習拍的片！
        </p>
      </div>

      {/* 下半部 */}
      <div className="flex p-[20px] gap-5">

        <div className="w-full md:w-1/3 p-[10px] mt-3 rounded-md" style={{backgroundColor: '#EFF0EA'}}>
          <iframe
            src="https://www.instagram.com/reel/DUVRPU9kZ_B/embed"
            width="100%"
            height="400"
            allowFullScreen
          />
        </div>

        <div className="w-full md:w-1/3 p-[10px] mt-3 rounded-md" style={{backgroundColor: '#EFF0EA'}}>
          <iframe
            src="https://www.instagram.com/p/DRPRmKYE2tu/embed"
            width="100%"
            height="400"
            allowFullScreen
          />
        </div>
        
        <div className="w-full md:w-1/3 p-[10px] mt-3 rounded-md" style={{backgroundColor: '#EFF0EA'}}>
          <iframe
            src="https://www.instagram.com/p/DQJyMcfE06R/embed"
            width="100%"
            height="400"
            allowFullScreen
          />
        </div>

      </div>
    </div>
  );
}
