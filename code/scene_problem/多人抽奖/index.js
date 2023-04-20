function randomDraw(names) {
  if (names.length === 0) {
    console.log('抽奖完毕')
    return
  }

  const index = Math.floor(Math.random() * names.length)
  const drawName = names.splice(index, 1)[0]
  console.log(`中奖者${drawName}`)
  setTimeout(()=> {randomDraw(names)}, 1000)
}

const names = ['yxp1', 'yxp2','yxp3','yxp4','yxp5']

randomDraw(names)
