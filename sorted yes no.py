# Complete the method which accepts an array of integers, and returns one of the following:

# "yes, ascending" - if the numbers in the array are sorted in an ascending order
# "yes, descending" - if the numbers in the array are sorted in a descending order
# "no" - otherwise
# You can assume the array will always be valid, and there will always be one correct answer.

def is_sorted_and_how(arr):
    ascending = sorted(arr)
    descending = sorted(arr, reverse=True)
    if (ascending==arr) : return 'yes, ascending'
    elif (descending == arr) : return 'yes, descending'
    else : return 'no'