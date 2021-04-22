import { store } from "app/core/store"
import { Observer } from "mobx-react-lite"
import { memo } from "react"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import WordPair from "./Pair"

const Words = () => {
  const {
    sheet: { pairs, reorder },
  } = store

  const onDragEnd = (result: DropResult) => {
    if (!result.destination || result.destination.index === result.source.index) return
    reorder(result.source.index, result.destination.index)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="word-list">
        {({ innerRef, droppableProps, placeholder }) => (
          <div ref={innerRef} {...droppableProps}>
            <Observer
              render={() => (
                <div>
                  {pairs.map((p, i) => (
                    <WordPair pair={p} key={p.id} index={i} />
                  ))}
                </div>
              )}
            />
            {placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default memo(Words)
