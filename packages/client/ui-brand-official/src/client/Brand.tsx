import type { PropsLocale } from '@deepseek-ai/dsh-client-ui-slots'
import type { HeroBrandMarkOwnerProps } from '@deepseek-ai/dsh-client-ui-conversation/client'
import css from './Brand.module.css'

/**
 * Render the Qonnex mark with the presentation requested by its host surface.
 * @param props - Host-supplied mark presentation.
 * @returns the decorative Qonnex mark.
 */
export function OfficialBrandMark({ size, className }: HeroBrandMarkOwnerProps) {
  return (
    <span
      className={[css.mark, className].filter(Boolean).join(' ')}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  )
}

/**
 * Render the localized Qonnex product name without its independently slotted mark.
 * @param props - Framework-supplied common locale seat.
 * @returns the Qonnex product name.
 */
export function OfficialBrandName({ t }: PropsLocale<'common'>) {
  return <span>{t('brand.productName')}</span>
}
