const User = require('../models/User.js')
const Good = require('../models/Good.js')
const Bad = require('../models/Bad.js')
const mongoose = require('./connection')

const walkedGranny = new Good({
    name: 'Granny Walking',
    image: 'http://static.tvtropes.org/pmwiki/pub/images/a1608ae074e49534890ee9f550832830.jpg',
    description: 'Helped walk an elderly person across the street'
})

const trashPickUp = new Good({
    name: 'Picking up trash',
    image: 'https://www.twincities.com/wp-content/uploads/2015/11/20091025__091026CleanGunsLede.jpg?w=650&h=432',
    description: 'Helped pickup trash from a nearby highway'
})

const bookUp = new Good({
    name: 'Book Pickup',
    image: 'https://thebablueprint.com/wp-content/uploads/2015/11/kindness-900x600.jpg',
    description: 'I helped someone pick up their items that she dropped from her bookbag'
})

const shots = new Bad({
    name: 'Just shot someone',
    image: 'https://media.giphy.com/media/pBq7d7ItSCTJK/giphy.gif',
    description: "Soo umm.. I just shot someone 'Pew! Pew!' 🔫"
})

const robbery = new Bad({
    name: 'I just commited a robbery',
    image: 'https://media.giphy.com/media/mSiLFn81Gjdi8/giphy.gif',
    description: 'I just robbed a bank'
})

const gta = new Bad({
    name: 'I just stole a car ',
    image: 'https://media.giphy.com/media/3oEduGzkdvam26MrXG/giphy.gif',
    description: "I just stole someone's car from them"
})

const mark = new User({
    name: 'Mark Larry',
    image: 'https://orig00.deviantart.net/6c59/f/2015/062/3/3/crszy_by_tripplepoint-d8k8kfk.gif',
    goods: [walkedGranny],
    bads: [shots]
})

const barry = new User({
    name: 'Barry Nallen',
    image: 'http://profilepicturesdp.com/wp-content/uploads/2018/06/cartoon-animal-profile-picture.jpg',
    goods: [trashPickUp],
    bads: [robbery]
})

const michelle = new User({
    name: 'Michelle Johnson',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEUA4r7+//z/mjwXGBYAAAABBAD///8A58L/nD3/nT0AAgD/nz4A6sUA5cD29/T/oT8AoYcTFBL/lCj+6NYMDQv/mDfw8e7/ljCUlZOkpaOwsa/FxsPV1tMAvZ/z9PEBIx2aXSQAz66lZCf/kR73lTpUVVTm5+RsbGucnZt/gH5gYV/b3NkBhG+HiIaRkpABqY7NfDAA1rRJSknojDcBcF4kJSQAt5oBknu+v70+Pz0BLCWKUx8BTUAtGwqqq6k5OjgBWkv/v45KLRFdORa2biosLSz+5M/VgDL/1LJ3SBwAOjH/v43/yJ7+9OoBEw8BZlYBRDknGQn/p09vQxkcAABNLxL/rmr/t342HgTajUv/p1oAe2czJhnGf0L/2Lx6W0RDHAC/gU0WIyhXQUUYAAAUmklEQVR4nO2diVsbuZLAsZHl9o0ZG5vDIYAxNua+rwCPYxLIQUiWhJ28N293//8/YlWltt2H1C21u93MPOr75khITP8oqUpVqqoeG3uVV3mVV3mVV3mV/zwppPMgaSbm/xTifqRwJb2w+XB5+XB2Mk9Ozh4uHx4ONxfGGOffBrOwQARydnbYGPubUKYPSSplo0ulUln4b+VhosFWbtwPOLQAIbl6ultEOX26eu5xwr9P1g4K+b+4JtO/GGGplOOSKZWM5u7N6dNzn/LL2sKLsj2FQs8kcqvo+2j5M0Iec0mLGMlMhnHefH/uQZ5MLLwIRYLV3240NtfWLk/mQe5/HTa2/R4t/5WQq1LSJUYml9ld7ENeLuRj3ZEId7D2ILCK7NE8/6qMEClzOePmHUCCIjdjYgS4wsGv+4EhtAn7rUPPB8tfOlepQ5Wl5iJ8LpjXiZEzAt3CxKUVjv03m01VUOCp2O988VRiHi2NlBAhja1rrsiTwxEyMrr0wuHlCSAhW5bRVCrlcnl8IOUyI5z3JERv4UkIkKXd0x7jaDwkM5fbE5f3A80xOBtaXyqhEMKWbL7ljPcHUfsOpryxg8OvPTqmOqY5ERwKo7/3Jtxkj53xJUTGxQoy+hmvYfG2D/dS5tL0oQPJpsgvz2XFzqUp8t5QQGQbsnmaQuexNhbNUmV4CxN95fnTmTpc8yfcUlEi1+MpqvHLZvhHgEI+3Tic75+MVeiYlJkOGz7P8oWQU7m7cDKWms/IeOarRjhe5R0iPWQV8vnGr77yiBqdImGemeNnf1MzkNwWP+ccynajGVI3Dg7W9vb2zk7wDJ86OWO/mDg44MdJF95DX3kpdbxxNKXE52edXiNZogGYTGZyi9xzuNUIcOnG5l7PR4vlEiKWnmcFvD3CLYsu3jhuw0sfw5c+UDY1AzXuPiHjhPWzwcg31i6/2s8f9sBz8LtfLze32aJlpmXvpL/1xB7PS8rsMSZ8dFhosD90o2hqemIYN9xx9NSYzhcavy57IH2o/f39i+WVdSYry+O4trMWzLO1xtr9EHhMKgqGZmyMfY/vyqZmoMZrYDxp5AFve2LvyyBuJo//7LTbM63WFLXIcRkOWWV+nMz2MglahlNAyHyKr3eGszfRW6WoRnM3MoMz8TCge75bvNmtfTKpEn2hHWJdXBV4NFOCaY9/DvHzhrjAJvQ3oqnGR0B8+GLGV+Tp+00zk8tlktWfFjYO2CWup+tBBtXfOPcVC/6eeZs9nO5G5GpMnqLm4J9HRlfKZfgPqvrNRbgvwmCQuCcrQQnhOyscIfNEHgR7SiZ3anro661cjw6l5iCksy4VmlLhegymRrVFaoaIu/qApS1+SiV3yZxjkbsIhSq0MJJAiGwJkG2F4yP6i0Vta1r6jtvv+fRtybWJHYSCXWiVwCuV7cKvSnFOnp1qrnWXaekaFPi4VcoJfjY1hwo7noSoxgCI4AwPlKKcPFj7pp41zdyBAheTYgs1+dmmxKLfIiyTIAvVN/i1L1M9a2q8B8Ab9/o0CX+j6ou0j6gJqGpnUInsaHittxF3mdq3pH/FQTjj//DwuJqEkINS42OEe9rWNHdzJQd0EtYVHr6i6zHgZ7Knmk/BZaoeBqNkSh7L2kG4ktJUj4pAZKjiKkwlspjnOcixRo1wJ/ChRS6gwl/qKTEWBgc7m6oRrkZAmNVS4RiGUNouUZlQZR9qiqYK8eSm7RLVCc/DJ4TjokJUMZAC5DJOQ9uJ2v5QVyBsWtNLTKchnaB9NlUj9D/TaAuocFsLkMfBgaJEBUK6EbIS4UQqzWbKBOLgd2HZGifhm5AJGWBKk4/ZGnAYuyHZGgehb3ChKRAXbmpfnRQWgsRQioQJGiYheArve1+JEi/DU6IjevJKYwQQUKGWp+gpEQ6nd+EocfJzwiEhen1QoV8mX6LEr8HyNQJx5mlC3Yop3fOaVYlZ8jYUnyggDA0R1qi2p+gp8SSso5uIMCREWKPzQa+g8RpKM0wUSvUPESHE+sOfbWCNqqWfhEok4Six9g8hIbOo48OqEU4zypG9RIkh7EQZYYImVoZUIwlsZkwl3oeixNoHCSFjPNLOOFkFcsd+N6LeStwMxSdO/i4lTFC6EvwmBszM2XDVPKjEoX2i69BmZ5zaCbpUh12joSlxyQsQ1Di7H4hxGFc4UOIZKNG2Ew3tfelDCIxHZX1GWKP3Q1cqpeFg82Q1p5lmUzcwNvwIgXH6VpOxDDf+QU7cTiU+2EOMzA0hW3padF9yCxkTMxdaNieUNTqGp1NrkZTRTGnfEHs4C4ceZ47VGStE+arJR/BKuF/LBxfZZFFvmXo5Cyfj0bIiYzkEO2pKATI2xDQvRhMaTjT3oa+hsTF2d4jKGSAV0hoFyR8O0m6Z0wApuEkNQmCc6hBfowPn0SF9vVUIs6f87FZigE+a7lHN0NgYE3UXo72MCNdoaHzc7Z8CFzOk+iqs/alJCJDFGfs1d5nY9ic4iuAxk1tYKMyvonJXbEsmNT3+kitJo8SYOBq3QDHXkC1bf6V3D+MnWBp9nWGnGbZc7zSjKUn4q8AIzqPc12Eq1eeFNXoSIt8Ynt1gdeIi1b1WrH0MSIiM/YNOZVCdgZswhMOMTcBjlJu5uwDhoro3dPFBNWPbTANYlBimo+gLeoy7EpSe6gYaRkC+Yrddn2tR+qbDdVfp1Z9UFCqdgyCCsQliSbV9hQk4zauKV5geW2XClYi2BtdoBD0sLMbAVirtbRhskdLlXiMCgcLiDVAj/NqsJQp7E6LA8RS+o667d5WWKgF2BnXut+wD6Fw5hfe85Wg2IUphG2srB7dRmZKRNLyKaFBqnwIQ0rl+hTv7ltOA+GaHoK2JaBOisJMN+yG+NZGM3Nb1O/LuestZSuokdN46KRHWLa2hhMAn0OKK+Xthe0KL5OHi2wx+DcNssiTXnoTB7Azbhda+V/wIWrxAxRLSiKzjEa/bTG+Yueo9A7nycpCB7YyLMEGnwPhkyWZ0vYCW5svc28EjeCXFqz+CuQoRYYIekbCPo07Cfoswi4MHliDrccrxTpRqEiboOgkrrBcLZId5hgbqZS1PIHWRAVUI1ShOS4O/PUuCVCToEfLAIvPWRvhW5jKWghhSE2Xw8Rv9D6GM0LvZfjjZrhCzEEyRMHhUQVcGHr88+BDKVulDdPsQy09udAiXAvLxq4xeQ1/XQrhCyEmkhL2sorFlI5QkiAOHTcCCVoXJasvaDtaO1NRYe6B3bYTiu6nAsb1J02ozmbX2u3FTE8mpmxMeDI40pe8WfyiOGKtGcSjChLOfD6kjNTXWrj3D6De5yoL+yQAZNn/q6Amb5vMbzXdm/+s7MWAtWODrS+g3m2UowsPBsZQJtIwykRzZhtyEUsKdERImM7lMhv0jBgwUNCkQMnfhPfVieEIhkHsTRgOIhFHFv+Y+VCtaWAriCanC34mYcFM1HbwkM6PeFRktf0QgDPHGySHc4ysQLkmufCmd8iir6RJMyPgTRncwVZ3rIgNMFG/Jurw2ilnJihKhaothNISGIb+0hxCdyBhoEbO/voSRegu8u/Bpo2m+35UeZdhZ2oNwh32x608YqcfHglqfq7Uy+T/5U0LxxJxki7bZ13YULE20ITAQeo4EgaCKHHks0hSpi0tp23Bl4G9L6ZzCcJZhCPd8Bp3V/mB/oC0j3MdxBKKvwBKVqtf5U4owevId5bb0iR4TcixZhxuQP06Rc9eEDHp0C1+aUXH4HUK+RMZnBojSzGGVhfS4nYSPSqfZVy7KzFDM2kJaSmd3MHcuW9z2T9knikMTAhJ6ufzJH+woyiJUJu79RBlglpA5WGRkoziYwtOa4Xy3Cks0wQ1NdO7QLI4SZ52qzAvi/QkokdhTD1DmtAqXOnUKl2bMsa+fd1ut1tx0e8e8+2h7nucGHxSxoWGmZl7SHDz5rZfbhjQgIatd67ik1jpywHkGziTWeVh4BbqicCDlHx51zhsuSbOC+UrVyU8Wpa3iY9/Wu93Wmzet7tzGLVcU355gViwpHkIu1qdUggpOSKLdhrLoYvKbLRik9f4ALIuijntpKW5aTLld7zqTTV6AragXqXAiSI2FSo6E2Jud/hAzridy27X8GcY0NQtSdOXSfAg7JJSaYC/JO7v0q0s/3Q9JabF9MVDheNu1DgWJQgXAKRJlcGgS7hHrXVp18g9JtoKpaW5upl6fmZub0meREJ5HfPMEYk0Kwwb8Xf7wA1MaCh4ILPho+cb4MjVT3DXjg5oXC0nwTBrl1ZpJeGkWttWqn0bKBw3uJJJSKIfwMWCZWvXjaPl4DVHEroILLNPnb/8YNR/WEI1ChebgmtlR8zGBJi7/sZ2hCNxajpyQruoMgRpOMNAftRKhCsxn0np4giHU7WgJmaPIhl/2LBVUoisXESngLPR7TIxIhaYS90cJ2CWj24QoWPK9PDIlsiXKvl+EVTQCKdx7pEWjAYzuRk0oaehIJB73SCHy0Y0YAM11WhnBuYYWMYU1ckBzrstFiIGRBHAWMzyaU8rCkcI8+9bH0SLSxCoCRlgT7EW4Dd/8OMKFSulMBa5rvi7E9F6p9AIg3qpmOvX5Zo/5hPex2F4Olm58Ub5u0Oeb4wv0vhHLCu0jQicU6YS9UtnmPlo23wkS87sI02NfieCWYkg82jqv8Dyr4IUgo5YCC4fx4mhWqdpHhW9qdtW8rGFGJm4+kDzbjDD7tTzTGjZtCH//CPDg88j6dMT3aMqSZscb/jPfP58aIjvKbMsGv+Ng/1Rm2K8vWMAUp5kZSHpsjZiv0iPL9dlWIEqs3zbv3Tot+ACsdx5RXsZX8tuHcMJJ9S6cLlRu5B3Su1XszJlbGi8pRhsyeUhhrHcJY74tRpuQwgY8nu5aLBbcpb4IWwOCGcat3ben5mtnSYCmyvaM4wYHk/gvZpneE/IuY+QypebuzeLi4q5sOpuXFl0XcK1oC7x0BEs0+OxBI5nJ5XLVAIQC5ogrSzQEm/Zss7IUxkIpEIL70BzvHJHANDD7WKVQqryxtORFbEQWKjrfSjNMw5MF8aVsRKx2sxdoDDHrw0EYQ4bGLWBJHx2FUjX/51cgjLhMT1nyxD3FNWD7r4Mw4lJLVRG+dSfQIAUXYbSNasoCMaKgJHN4wOi7fhUFqvncry0NxZrSSvQVQiqEwopM6VhdLUJmauZj34e4DQWtQtXhAWFU9AswNegNBcP3JxWHQXoSRl4wqyJQQpQSFNUGnaZgR3wJpga2obDLZCkElwg9QNH1U6oJjt4XzsbSG0wjqXBciT+AkhkaTZdIp4SML+Hcxg2NEFDnXNMhx0JwOLdFWrnuL3l4g7a4jcb4pppWxKI80RXPSzCmcKIRN3tl3v/XqmIXBTZhiMsC4jemHi2J0Dqi1LwMCXxJ6yH0UcV7bvPoE8o9yjVjg4DRbLJrSMijvgBCSQN7k8h1Y2Eowk2htGeREQ4/dH0Y8erXM5JXgOjTskWhblTa/0zPScyXbJjtlnYkZvwRsU1KXq4af+IbcjTyydCGLyISEPkcGzoVt7tIe/c+G5lrT0Sov/fu4IYe9jgvSpmhIZ4v8DYyTwxh/I3MkKx49A3zP7ETb0bRfwaBYcBCTUkeHyJc73JjMKZxElrnKnkiijGKsEa9PSbM2r2PcZWis/AdlPGO/SHRPAjs7vZco6aa4wNUIzTQ9W+4SGgXi/88AXm/WozRBbpDXx1m3sO9sMugYguFXws3/hii7sjzEHi3tcK7LnL/Ap/hKPLDyMi3NSVuhwiEnoMyuNQ+bLhpsDhB6AptbYv0Nt6SjHnfYScgS59xNovNqOClREdkf+jnD59+fPzwG+/v78Z7xbYtS0PZpPqDYnWMbZ1iMYlAhfS3n0u1WrVWm/wJMxqKF7DAY1ulePv7vzU/QkgOo9W3Gk4q2YWflqq9tV1j+sRpuzESQqJt9uOSD6FhbjvrTBA8crtrp+iPSYvuDXMye3yEeKRp0Q/eiPzKG9fp/oBwmQhG1dAftgVR+jfBlv747i6QkD3X75NVGV6yf+ON6Zi+sYE7elfcS3/aAU9x2EScDtEkTNDPRi1p5MRGtZ82hQqg/mTursDb0z9ti6F0g4BvYibkYQNN/Ki9v5aMn+/V1qASzYQMjqtx1fnbVkJuEUo62VYdJyPtW7MTHhKzh40mPv4PIdeC+UOTlsw36Y9YgjEsKacKP9UcgPhWBHoRo8uHhHfP4oNdFyBax5jivDbzf4/dfajUYkYN2IPmax+YTRpVf6yb8MxC2III4sr5ZkTryHLcfHyZ0pTL0NDPll2I7z7jdgmnFr0EQv7mApLashe42W5nIOnCD2pQg+CIp+iffR0aSUzv8E7cl0OIkw/Zc91Z3lriGLULa5O7RFp2DUkcbMNME9Pl5nkAC75jszT3ttZ8mriAzVPeKpm7sVp1QNR7/gLHRTm++MEkLG0Ra4IOj+ixpUz7q858GLjRhOnQu6jH6lJCSrjhGnrGzg2oQOMOfkyV/heR8CA2wqyjbZ3OVZDx6SaTqxrOKlPk4oQQ/jrHFiyBDX3/DIDLg/zjCIZDyWXbfXqmxTbvenk8/W9X7TZEs+Z8S0pc4wfpH9Vc8pRwI2pdGTG6fAEh+ISO2RtyUT9vWcbr8SCx3nf5zr9LP0/ePOJPx65cOO3FdqgRR0C0u96bNcd0tjJtSmfnFkMR/qeKMAfiyNJeQYvn/ySidj9w+RG+8cFLCkId8qdt75AB5WBwm+WFKjh+cGfOzMoU59b51/ddV4lon2IibAjMRR+yNb1aJubctt58PWtOkfLZfGS1Xq9vXJj84233vTgSxmNLcQKf/F4JmiWPOiuVvgZXV2ZsmZp1q5JT0gGRMd4hIqFnqzN1ie2rUyvWJbxzJK5rwONsTIQQABc9AP2EER91ON36rLSp769MmEiozK1DwngONWEQqvwQpmK7Bx4RIYZa8dRgjoywHFceY2SEq3HlMUZGCEN4/t6E63F1BI+MEKa1xeIQR0YYW6vlK2FoAlnIvzdhbO2yIyWM5dj2Shge4X5M1d6jI+zEdGz76xD+P59KUL+53Sj6AAAAAElFTkSuQmCC',
    goods: [bookUp],
    bads: [gta]
})

User.remove({}) 
    .then(() => Good.remove({}))
    .then(() => Bad.remove({}))
    .then(() => Good.insertMany([walkedGranny, trashPickUp, bookUp]))
    .then(() => Bad.insertMany([shots, robbery, gta]))
    .then(() => mark.save())
    .then(() => barry.save())
    .then(() => michelle.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())