#include <stdio.h>


// int�汾�������¶� 
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



// float �汾 

//int main (void){
//	float celsius,fahr;
//	float lower , upper ,step;
//	lower = 0;
//	upper = 300;
//	step = 20;
//	fahr = lower;
//	while(fahr<=upper){  // ����Ƚϵ�ʱ��,�Զ���intת��Ϊfloat���бȽ� 
//		celsius = 5.0*(fahr-32.0)/9.0;
//		printf("%3.0f\t%6.1f\n",fahr,celsius);
//		fahr += step;
//	}
//}

//��ϰ 1-3 �޸��¶�ת������ʹ֮����ת����Ķ�����ӡһ�����⡣

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

//��ϰ 1-4 ����ת�����¶�,���ݹ�ʽ F = C * 9 / 5 + 32
 
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

//��ϰ1-5 ��for��д300-0����������¶Ⱥ��� 

int main (void){	
	int fahr;
	for (fahr = 300; fahr >= 0; fahr = fahr - 20)
	printf("%3d %6.1f\n", fahr, (5.0/9.0)*(fahr-32));	 
}


// ��define ���峣��


// getchar �� putchar

