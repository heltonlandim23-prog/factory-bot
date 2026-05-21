Factory Calculator Bot

Arquivos:
- index.js = motor do bot
- data/tier1.js = itens do tier 1
- data/tier2.js = crie depois

Comandos:
!ping
!help
!itens
!tier 1
!calc iron_plate 60
!calc iron_gear 30

Para adicionar novo tier:
crie data/tier2.js com:

module.exports = {
    names: {},
    rawResources: {},
    recipes: {},
    prices: {}
};
