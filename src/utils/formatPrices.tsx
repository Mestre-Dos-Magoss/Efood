export const FormatPrice = (valor: number): number | string => {
  if (!valor || valor === 0) return 0
  return new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }).format(valor)
}
