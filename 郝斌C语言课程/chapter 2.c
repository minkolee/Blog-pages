#include <stdio.h>


// int版本的摄氏温度 
//int main (void){
//	int celsius,fahr;
//	int lower , upper ,step;
//	lower = 0;
//	upper = 300;
//	step = 20;
//	fahr = lower;
//	while(fahr<=upper){
//		celsius = 5*(fahr-32)/9;
//		printf("%3d\t%6d\n",fahr,celsius);
//		fahr += step;
//	}
//}



// float 版本 

//int main (void){
//	float celsius,fahr;
//	float lower , upper ,step;
//	lower = 0;
//	upper = 300;
//	step = 20;
//	fahr = lower;
//	while(fahr<=upper){  // 这里比较的时候,自动把int转换为float进行比较 
//		celsius = 5.0*(fahr-32.0)/9.0;
//		printf("%3.0f\t%6.1f\n",fahr,celsius);
//		fahr += step;
//	}
//}

//练习 1-3 修改温度转换程序，使之能在转换表的顶部打印一个标题。

//int main (void){
//	float celsius,fahr;
//	float lower , upper ,step;
//	lower = 0;
//	upper = 300;
//	step = 20;
//	fahr = lower;
//	printf("This is fahr to celsius temperature\n");
//	while(fahr<=upper){  
//		celsius = 5.0*(fahr-32.0)/9.0;
//		printf("%3.0f\t%6.1f\n",fahr,celsius);
//		fahr += step;
//	}
//}

//练习 1-4 摄氏转华氏温度,根据公式 F = C * 9 / 5 + 32
 
//int main (void){
//	float celsius,fahr;
//	float lower , upper ,step;
//	lower = 0;
//	upper = 300;
//	step = 20;
//	celsius = lower;
//	printf("This is fahr to celsius temperature\n");
//	while(celsius<=upper){  
//		fahr = celsius*9.0/5.0+32;
//		printf("%3.0f\t%6.1f\n",celsius,fahr);
//		celsius += step;
//	}
//}

//练习1-5 用for编写300-0的逆序输出温度函数 

int main (void){	
	int fahr;
	for (fahr = 300; fahr >= 0; fahr = fahr - 20)
	printf("%3d %6.1f\n", fahr, (5.0/9.0)*(fahr-32));	 
}


// 用define 定义常量


// getchar 与 putchar

