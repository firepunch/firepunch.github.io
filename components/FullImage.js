import Image from "next/image"

export default function FullImage({ src, ...props }) {
  return (
    <Image
      src={src}
      alt="Image"
      width={0}
      height={0}
      sizes='100vw'
      style={{ width: '100%', height: 'auto' }}
      {...props}
    />
  )
}