export default ({ G, ctx: { currentPlayer }, args }) => {
  const land = G.players[currentPlayer].land
  const newRow5 = land[5].slice()
  const newRow6 = land[6].slice()
  newRow5[args] = {
    type: 'dmoor_north',
    contents: ['peat', 'peat', 'peat', 'peat'],
  }
  newRow6[args] = { type: 'dmoor_south', contents: [] }
  return {
    ...G,
    action: null,
    players: {
      ...G.players,
      [currentPlayer]: {
        ...G.players[currentPlayer],
        land: [...land.slice(0, 5), newRow5, newRow6],
        goods: {
          ...G.players[currentPlayer].goods,
          wool: G.players[currentPlayer].goods.wool - args,
        },
      },
    },
  }
}