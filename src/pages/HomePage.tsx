import React from 'react'
import FilterPanel from '../components/FilterPanel'
import Table from '../components/Table'

function HomePage() {
  return (
    <div className="wrapper">
      <div className="wrapper-header">
        <h2 className="title">Ordinals Ranking</h2>
        <FilterPanel />
      </div>
      <Table />
    </div>
  )
}

export default HomePage