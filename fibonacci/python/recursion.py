print(0)
print(1)
count = 2
numberCount = 20 # 20 numbers in the sequence

def fibonacci(prev1, prev2):
    global count
    if count < numberCount:
        newFibo = prev1 + prev2
        print(newFibo)
        prev2 = prev1
        prev1 = newFibo
        count += 1
        fibonacci(prev1, prev2)
    else:
        return

fibonacci(1,0)