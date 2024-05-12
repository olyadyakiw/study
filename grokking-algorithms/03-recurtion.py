# def countdown(i):
#     print(i)
#     countdown(i-1)

# countdown(5)

# def countdown(i):
#     print(i)
#     if i <= 1:
#         return
#     else:
#         countdown(i-1)

# countdown(5)

# def greet2(name): 
#     print("how are you, " + name + "?")

# def bye():
#     print("ok, bye!")

# def greet(name):
#     print("Hello, " + name + "!")
#     greet2(name)
#     print("getting ready to say bye...")
#     bye()

# greet("olya")

def fact(x):
    if x == 1:
        return 1
    else:
        return x * fact(x-1)
print(fact(5))