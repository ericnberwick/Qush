#Write a function which is passed an integer, n, and returns a list of n lists such that:
#   f(0) returns []
#   f(1) returns [[1]]
#   f(2) returns [[1], [1,2]]
#   f(3) returns [[1], [1,2], [1,2,3]]
#   etc.


def gen(n):
    return [list(range(1, x + 1)) for x in range(1, n + 1)]

print(gen(3))