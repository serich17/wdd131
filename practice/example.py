total_num = int(input("Please enter the number: "))
begin = 0

for i in range(total_num):
    begin += i
    print(begin)


print(f"This is the total number of comparisons: {begin}")

