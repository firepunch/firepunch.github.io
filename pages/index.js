import { css } from '@emotion/css'
import { fontStyles } from "../shared/variables"

export default function Home() {
  return (
    <div>
      <h1 className={homeStyles.h1}>
        Firepunch <br />
        FrontEnd Developer
      </h1>
    </div>
  )
}

const homeStyles = {
  h1: css({
    ...fontStyles.h1
  })
}