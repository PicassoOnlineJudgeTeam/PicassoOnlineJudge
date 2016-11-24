# 안풀림?
n = int(input())
for x in range(n):
    line = raw_input()
    m = int(line.split(" ")[0])
    msg = line.split(" ")[1]
    print str(x+1) + " " + msg[:(m-1)] + msg[m:]