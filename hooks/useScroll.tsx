import { useLayoutEffect, useState } from 'react'
// import {debounce} from 'lodash'

const debounce = (func, timeout = 300) => {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(()=> func.apply(this), timeout)
  }
}

const useHasScroll = (): string => {
  // TODO
  const [scrollPos, setScrollPos] = useState(
    (typeof window == 'undefined' || window.innerHeight > window.scrollY ) ? 'top' : window.scrollY > (document.body.offsetHeight - 280) ? 'end' : 'middle'
  )

  useLayoutEffect(() => {
    const MINIMUM_Y = typeof window == 'undefined' ? 0 : window.innerHeight
    const MAXIMUM_Y = typeof window == 'undefined' ? 0 : document.body.offsetHeight - 280
    const updateScroll = (): void => {
      setScrollPos(
        MINIMUM_Y > window.scrollY ? 'top' : window.scrollY > MAXIMUM_Y ? 'end' : 'middle'
      )
    }
    window.addEventListener('scroll', debounce(() => updateScroll()))
    return (): void => {
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])

  return scrollPos
}

export default useHasScroll
