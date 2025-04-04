# The Arara is an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

# 1 = anane
# 2 = adak
# 3 = adak anane
# 4 = adak adak
# 5 = adak adak anane
# 6 = adak adak adak
# 7 = adak adak adak anane
# 8 = adak adak adak adak
# Take a given number and return the Arara's equivalent.

# e.g.

# 3 --> "adak anane"

# 8 --> "adak adak adak adak"

def count_arara(n):
    result = ''
    for i in range (0, int(n/2)):
        result += 'adak '
    if n % 2 != 0 :
        result += 'anane'
    return result.strip()

# in JS

# function countArara(n) {
#   let result = new Array(Math.floor(n/2)).fill("adak").join(' ')
#   return n % 2 == 0? result : result.length>0? result + " anane" : 'anane'
# }

# sexier

# const countArara = n =>
#   `${`adak `.repeat(n / 2)}${`anane`.repeat(n % 2)}`.trim();