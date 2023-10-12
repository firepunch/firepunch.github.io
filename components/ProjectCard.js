import { css, cx } from '@emotion/css'
import { colors, mq } from '../shared/variables'
import FullImage from './FullImage'

export default function ProjectCard({
  hasDetail,
  slug,
  title,
  sub_title,
  link,
  banner_img,
  className
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

const cardStyles = {
  card: css({
    marginBottom: '8rem',
    '&:last-child': {
      marginBottom: 0
    },
    [`${mq[0]}`]: {
      marginBottom: 0,
    }
  }),
  thumbnailWrapper: css({
    width: '100%',
    backgroundColor: colors.grey[130],
    marginBottom: '1rem',
    borderRadius: '1rem',
    overflow: 'hidden',
  }),
  thumbnail: css({
    height: '100%',
    transition: 'transform .7s ease-in-out',
    overflow: 'hidden',
    '&:hover': {
      transform: 'scale(1.2)',
    }
  }),
  title: css({
    marginBottom: '0.4rem',
  }),
  description: css({
    fontSize: '1.6rem',
  })
}