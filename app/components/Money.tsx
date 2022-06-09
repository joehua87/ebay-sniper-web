import numeral from 'numeral'

export function Money({
  value,
  className,
  currency = 'USD',
}: {
  value: number
  className?: string
  currency?: 'VND' | 'USD'
}) {
  const text =
    currency === 'VND'
      ? numeral(value).format('0,0')
      : numeral(value / 100).format('$0,0.00')
  return <span className={className}>{text}</span>
}
