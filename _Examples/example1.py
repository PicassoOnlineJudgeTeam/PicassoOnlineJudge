# 문자열
str = "Hello "
str += "Picasso "
print str

# 숫자
n = 12.0
n += 6.0
n -= 4.0
n *= 12.0
n /= 2
print n

# 리스트
list1 = [1,2,3,4]
list1.append(5)
list1.append(6)
list1.append(7)
list1.remove(3)
list1.remove(4)
print list1

list2 = [9,4,3,5,[2,3,5]]
print list2

# 튜플
tuple1 = (1,2,3,4)
print tuple1
tuple2 = (9,4,3,5,(2,3,5))
print tuple2

# 세트
set = {"Hello", 3, 5.0}
set.add("Picasso")
set.add("!!!")
set.add(6)
set.add("Picasso")
set.remove("!!!")
print set

# 사전형
dic = {'subject' : 'educom', 'team' : 'picasso'}
dic['grade'] = 3
dic['result'] = 'POJ'
dic['crew'] = ['Lex2Star', 'Cheechyo']
print dic