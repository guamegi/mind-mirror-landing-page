const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** Shared, hand-drawn illustration sheet: four columns and four rows. */
export default function FeatureIcon({ index, size = 'regular' }: { index: number; size?: 'regular' | 'small' }) {
  return (
    <span
      className={`diary-feature-icon diary-feature-icon--${size}`}
      aria-hidden="true"
      style={{
        backgroundImage: `url(${BASE}/images/diary-feature-icons.png)`,
        backgroundPosition: `${(index % 4) * 100 / 3}% ${Math.floor(index / 4) * 100 / 3}%`,
      }}
    />
  )
}
