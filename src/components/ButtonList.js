import React from 'react'
import Button from './Button'

// const list=["All", "Gaming","Songs","Live","Cricket","Soccer",]

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="Soccer"/>
      <Button name="Cooking"/>
    </div>
  )
}

export default ButtonList
