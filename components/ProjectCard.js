import { css, cx, keyframes } from '@emotion/css'
import { flexStyles, colors, mq } from '../shared/variables'
import FullImage from './FullImage'

export default function ProjectCard({
  className,
  hasDetail,
  slug,
  title,
  link,
  sub_title,
  banner_img,
}) {
  const aProps = hasDetail ? {
    href: `projects/${slug}`,
  } : {
    href: link,
    target: '_blank'
  }

  return (
    <article className={cx(cardStyles.card, className)}>
      <a {...aProps}>
        <figure className={cardStyles.thumbnailWrapper}>
          <span className={cardStyles.cta}>
            {hasDetail ? 'View\ncase' : 'View\nproject'}
          </span>
          <FullImage
            src={banner_img}
            alt="Project Banner"
            className={cardStyles.thumbnail}
          />
        </figure>
        <h3 className={cardStyles.title}>
          {title}
        </h3>
        <p className={cardStyles.description}>
          {sub_title}
        </p>
      </a>
    </article>
  )
}

const ctaZoom = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const cardStyles = {
  card: css({
    marginBottom: '8rem',
    '&:last-child': {
      marginBottom: 0
    },
    [`${mq[0]}`]: {
      marginBottom: 0,
    },
    '&:hover': {
      'a span': {
        width: '15rem',
        height: '15rem',
        zoom: 1,
        opacity: 1,
      },
      img: {
        transform: 'scale(1.1)',
      },
    }
  }),
  thumbnailWrapper: css({
    position: 'relative',
    width: '100%',
    backgroundColor: colors.grey[130],
    marginBottom: '1rem',
    borderRadius: '1rem',
    overflow: 'hidden',
  }),
  thumbnail: css({
    height: '100%',
    overflow: 'hidden',
    transition: 'transform .6s ease-in-out',
  }),
  cta: css({
    ...flexStyles,
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '7rem',
    height: '7rem',
    whiteSpace: 'pre',
    textAlign: 'center',
    fontSize: '1.8rem',
    opacity: 0,
    color: colors.black,
    background: colors.grey[100],
    borderRadius: '50%',
    zIndex: 2,
    transform: 'translate(-50%, -50%)',
    transition: 'all .6s ease-in-out',
  }),
  title: css({
    marginBottom: '0.4rem',
  }),
  description: css({
    fontSize: '1.6rem',
  })
}