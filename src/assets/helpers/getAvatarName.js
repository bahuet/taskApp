import React, { useState } from 'react'

// assigner un avatar aléatoire, code éphémère pour la démo.

export default () => {
  const avatarList = []
  for (let i = 0; i <= 20; i++) {
    avatarList.push(`${i}.png`)
  }
  return avatarList[Math.floor(Math.random() * avatarList.length)]
}

