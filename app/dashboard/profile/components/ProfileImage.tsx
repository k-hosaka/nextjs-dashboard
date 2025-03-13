import Image from 'next/image';

export default function ProfileImage({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  return (
    <div className="flex justify-center">
      <Image className="rounded-full" src={imageUrl} alt={alt} width={120} height={120} />
    </div>
  );
}