//work here 24 06 2025 13:20
/**
 * Converts to BRL currency format
 * @param value - Number to be converted
 * @returns Converted BRL string
 */
export function currencyConverter(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
