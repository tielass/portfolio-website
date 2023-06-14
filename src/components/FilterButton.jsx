import React from 'react'

function FilterButton({name, handleSetTag, tagActive}) {
  return (
    <button className={`tag ${tagActive ? 'active' : 'null'}`} onClick={() => handleSetTag(name)}>
      {name}
    </button>
  )
}

export default FilterButton
