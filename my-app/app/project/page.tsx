import Image from "next/image";

export default function project() {

  return (
    <div className="p-[20px]">
      {/* 上半部 */}
      <div className="p-[20px] flex flex-col justify-center items-center mt-3">
        <p className="text-lg font-bold">----以下是我的作品們----</p>
        <p className="text-sm">Java專案、友善食品界面、實習拍的片</p>
      </div>

      {/* 下半部 */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-md h-full flex justify-center items-end
                        bg-[url(/app_02.png)] bg-center bg-cover">
            <div className="text-white bg-black/20 w-full h-[80px] flex
                            justify-center items-center backdrop-blur-sm"> 友善食品 UI/UX 介面 </div>
        </div> 
      
        <div className="rounded-md h-100 flex justify-center items-center" style={{backgroundColor: '#EFF0EA'}}>
          <iframe
              src="https://www.instagram.com/p/DRPRmKYE2tu/embed"
              width="100%"
              height="400"
              allowFullScreen
          />
        </div>

        <div className="rounded-md h-100 flex justify-center items-center" style={{backgroundColor: '#EFF0EA'}}>
          <iframe
                src="https://www.instagram.com/reel/DUVRPU9kZ_B/embed"
                width="100%"
                height="400"
                allowFullScreen
          />
        </div>

        <div className="rounded-md h-100 flex justify-center items-center col-span-2" style={{backgroundColor: '#EFF0EA'}}>
          <iframe
              src="https://www.youtube.com/embed/f4UIfC5fuXo"
              width="100%"
              height="400"
              allowFullScreen          
          />
        </div>

        <div className="rounded-md h-100 flex justify-center items-center" style={{backgroundColor: '#EFF0EA'}}>
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
