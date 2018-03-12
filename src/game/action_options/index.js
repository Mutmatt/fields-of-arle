import grocer from './grocer'
import woolWeaver from './woolWeaver'
import colonist from './colonist'
/*

These should all accept a hash containing { G, ctx, args }, and return G

*/

export default {
  summerGrocer: grocer,
  winterGrocer: grocer,
  woolWeaver,
  colonist,
}