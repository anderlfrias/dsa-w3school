def partition(array, low, high):
  mid = (low + high) // 2
  candidates = [array[low], array[mid], array[high]]
  median = sorted(candidates)[1]

  if median == array[low]:
    [array[low], array[high]] = [array[high], array[low]]
  elif median == array[mid]:
    [array[mid], array[high]] = [array[high], array[mid]]

  pivot = array[high]
  i = low - 1

  for j in range(low, high):
    if array[j] <= pivot:
      i += 1
      array[i], array[j] = array[j], array[i]

  array[i+1], array[high] = array[high], array[i+1]

  return i+1

def quicksort(array, low=0, high=None):
  if high is None:
    high = len(array) - 1

  if low < high:
    pivot_index = partition(array, low, high)
    quicksort(array, low, pivot_index-1)
    quicksort(array, pivot_index+1, high)

def sort(array):
  quicksort(array)
  return array

my_array = [64, 34, 25, 12, 22, 11, 90, 5]
print("Sorted array:", sort(my_array))