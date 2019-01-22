# Dynamic Programming
## Steps
1. Define Subproblems
2. Guess
3. relate subproblem solutions (recurrence)
4. recurse & memorize (optimize by building DP table)
5. solve original problem

## Text Justification
#### Split text into good lines 
* score =  (page width - text width)^3
* the higher the score the worse
* DP(i) = min(DP(j) + score(i:j) => for j in range(i+1,n+1))