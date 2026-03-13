import { Container, List } from './styles'

export type Props = {
  view: 'restaurant' | 'food'
  children: React.ReactNode
}

const CardList = ({ view, children }: Props) => {
  return (
    <Container view={view}>
      <div className="container">
        {view === 'restaurant' ? (
          <List view={view}>{children}</List>
        ) : (
          <>
            <List view={view}>{children}</List>
          </>
        )}
      </div>
    </Container>
  )
}
export default CardList
