import { useEffect, useState } from 'react'

const debounce = (func, timeout = 300) => {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(()=> func.apply(this), timeout)
  }
}

const useHasScroll = (): string => {
  const MINIMUM_Y = 140
  const MAXIMUM_Y = typeof window == 'undefined' ? 0 : document.body.offsetHeight - window.innerHeight - 240
  const [scrollPos, setScrollPos] = useState(
    (typeof window == 'undefined' || MINIMUM_Y > window.scrollY ) ? 'top' : window.scrollY > MAXIMUM_Y ? 'end' : 'mid'
  )

  useEffect(() => {
    const updateScroll = (): void => {
      setScrollPos(
        (typeof window == 'undefined' || MINIMUM_Y > window.scrollY ) ? 'top' : window.scrollY > MAXIMUM_Y ? 'end' : 'mid'
      )
    }
    window.addEventListener('scroll', debounce(() => updateScroll()))
    return (): void => {
      window.removeEventListener('scroll', updateScroll)
    }
  })

  return scrollPos
}

export default useHasScroll
