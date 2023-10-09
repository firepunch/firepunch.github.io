import { css } from '@emotion/css'
import FullImage from './FullImage'

export default function ProjectCard({
  slug,
  title,
  sub_title,
  banner
}) {
  return (
    <article className={cardStyles.card}>
      <a href={`projects/${slug}`}>
        <figure className={cardStyles.thumbnailWrapper}>
          <FullImage
            src={banner}
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
  card: css`
    padding-bottom: 8rem;
    &:last-child {
      padding-bottom: 4rem;
    }
  `,
  thumbnailWrapper: css({
    width: '100%',
    height: '20rem',
    marginBottom: '1rem',
    borderRadius: '5px',
    overflow: 'hidden'
  }),
  thumbnail: css({
    height: '100%',
    transition: 'transform .7s ease-in-out',
    overflow: 'hidden',
    '&:hover': {
      transform: 'scale(1.15)',
    }
  }),
  title: css({
    marginBottom: '0.4rem',
  }),
  description: css({
    fontSize: '1.6rem',
  })
}