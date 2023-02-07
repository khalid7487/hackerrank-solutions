**Link** https://www.hackerrank.com/challenges/library-fine/problem

`here we need to calculate some if and else logic. for example:
you borrow a book from library and you return the book with late time during those time you need to pay more.  `

## Sudo code
1.     if (y1 < y2)
        return 0
    if (y1 > y2)
        return 100000

    if (m1 < m2)
        return 0
    if (m1 > m2)
        return (m1 - m2) * 500

    if (d1 < d2)
        return 0

    return (d1 - d2) * 15