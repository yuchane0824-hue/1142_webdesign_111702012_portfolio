import Image from "next/image";

export default function Hobby() {

  return (
    <div className="flex flex-col p-[20px] gap-2">
      <p className="text-lg font-bold">
        哈囉是我！我喜歡音樂、拍照、可愛動物和剪片 :3 歡迎來到我的世界
      </p>
      <Image src="/IMG_3654.JPG" alt="mypic" width={1980} height={1020}/>
    </div>
  );
}
