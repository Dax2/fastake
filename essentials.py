#this is how you comment in py

if you forget the # you will be writing code. works on the line you write it only.

this is all considered code by the interpreter. j=3 k=4 j+k  howwever the following is # not code # still not code

# so as in any real language we can't just run our code in the console in google browser. 

#we have to write the code in a file. save. then run that file. 

#or

#you can activate python in the terminal and run it there for some short runs.


#spacing MUST BE CONSISTENT. In school we used tab. most I THINK use at least four spaces but python doesnt care as long as you keep it the same so even if you used one space it would run. 





for x in "jarjarbinks":   # this looks just like the for in added to js recently. Why are there so many similarities 
  print(x) 

  
  
  > print("hello world")
hello world
>>> if 5>2:
...     print("greater than two")
... 3+3
  File "<stdin>", line 3
    3+3
    ^
SyntaxError: invalid syntax
>>> 

# below is the full output from a terminal sessionl. 

danielcontreras@Daniels-MBP ~ % python3                       # typing python3 activates one of the multiple versions of python installed on my computer. python and python2(i think) also exist.
Python 3.7.5 (default, Nov  1 2019, 02:16:23) 
[Clang 11.0.0 (clang-1100.0.33.8)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> 4+4                                                                   #playing with some of what I remember. Python3 isnt very strict so you can do zainy stuff. 
8
>>> j=4+4
>>> j
8
>>> j+3
11
>>> exit()                                                      #for some reason I never forget that to end an interactive session in terminal you type exit()
danielcontreras@Daniels-MBP ~ % 

                                  #something i mistakenly thought was weird about py.youbut is actually true of js is that j=k is not an evaluation of j againt k, its an assignment statement. 
                                  
>>> j=3
>>> k=5
>>> j+k
8
>>> j=k
>>> j
5
>>> k
5
>>> 

              # the following is js. and it behaves just the same.  
  
let j=3
undefined
let k = 5
undefined
j+k
8
j=k
5
k
5
j
5
