#include <stdio.h>
#define ARRAYLEN 5


void lineArranger(int arr[ARRAYLEN], int newPeople) {
  for (int i=0; i<ARRAYLEN; i++){
    printf("%d\n", arr[i]);
  };
}

int main(void){
  int lines[5] = {2,2,3,3,3};
  int newCustomers = 3;

  lineArranger(lines, newCustomers);
  return 0;
}

