def countingSort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)

    while len(arr) > 0:
        num = arr.pop(0)
        count[num] += 1

    print("Count array:", count)
    for i in range(len(count)):
        while count[i] > 0:
            arr.append(i)
            count[i] -= 1

    return arr

unsortedArr = [1,0,5,3,3,1,3,3,4,4]
sortedArr = countingSort(unsortedArr)
print("Sorted array:", sortedArr)