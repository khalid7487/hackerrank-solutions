#include <stdio.h>

int main(){

    int k, n;
    int arr[100];
   
    scanf("%d %d ", &n, &k);

    int count=0;
    int sum=0, i, j;

    for(i=0; i<n; i++){
        scanf("%d",&arr[i]);
    }
  
    for( i=0; i<n; i++)
    {
        for( j= i+1; j<n; j++)
        {
         sum = arr[i] + arr[j];
          if( sum%k == 0)
        {
        count++;
        }
        sum=0;
        }
       
    }
    printf("%d",count);
    return 0;
}
