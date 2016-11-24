def is_leap(year):
    if year % 400 is 0:
        return True
    if year % 100 is 0:
        return False
    if year % 4 is 0:
        return True
print is_leap(int(input()))