import * as S from './styles'

export type Props = {
  view: 'restaurant' | 'food'
  children: React.ReactNode
}

const CardList = ({ view, children }: Props) => {
  return (
    <S.Container view={view}>
      <div className="container">
        {view === 'restaurant' ? (
          <S.List view={view}>{children}</S.List>
        ) : (
          <>
            <S.List view={view}>{children}</S.List>
          </>
        )}
      </div>
    </S.Container>
  )
}
export default CardList
