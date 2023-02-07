**Link** https://www.hackerrank.com/challenges/the-love-letter-mystery/problem

`Here we need to make the number palindorme`

## Algorithms
1.  right = Math.ceil(n / 2);
2. left = Math.floor(n / 2 - 1);
3. for (let i = right, j = left; i < n; i++ , j--) {
        let diff = s.charCodeAt(i) - s.charCodeAt(j);
        num_ops += Math.abs(diff);

    }