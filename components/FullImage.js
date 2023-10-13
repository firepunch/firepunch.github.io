import Image from "next/image"
import { css, cx } from "@emotion/css"

export default function FullImage({ src, className, ...props }) {
  return (
    <Image
      src={src}
      alt="Image"
      placeholder="blur"
      sizes='100vw'
      className={cx(css`width: 100%; max-width: 100%; height: auto;`, className)}
      {...props}
    />
  )
}
