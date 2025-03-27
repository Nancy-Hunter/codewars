# Description:

# We want to generate a function that computes the series starting from 0 and ending until the given number.

# Example:
# Input:

# > 6
# Output:

# 0+1+2+3+4+5+6 = 21

# Input:

# > -15
# Output:

# -15<0

# Input:

# > 0
# Output:

# 0=0

def show_sequence(n):
    if (not n) : return '0=0'
    if (n < 0) : return f'{n}<0'
    arr = []
    result =''
    for i in range(n+1):
        arr.append(i)
        if (i == n) : result += f'{str(i)}'
        else : result+= f'{str(i)}+'
    return f'{result} = {sum(arr)}'