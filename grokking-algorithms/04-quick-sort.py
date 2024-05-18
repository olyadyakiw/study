# def sum(arr):
#     total = 0;
#     for x in arr:
#         total += x
#     return total
# print(sum([1,2,3,4]))


# def sum(list):
#     if list == []:
#         return 0
#     return list[0] + sum(list[1:])
# print(sum([1,2,3,4]))

# def numb(list):
#     if list == []:
#         return 0
#     return 1 + numb(list[1:])
# print(numb([1,2,3,4]))

# def maxNum(list):
#     if len(list) == 2:
#         return list[0] if list[0] > list[1] else list[1]
#     submax = max(list[1:])
#     return list[0] if list[0] > submax else submax
# print(maxNum([1,2,3,4]))

def quicksort(array):
    if(len(array) < 2):
        return array
    else:
        pivot = array[0]
        less = [i for i in array[1:] if i <= pivot]
        greater = [i for i in array[1:] if i > pivot]
    return quicksort(less) + [pivot] + quicksort(greater)
print(quicksort([10,5,2,3]))
