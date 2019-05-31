import java.util.Scanner;
/**
 * @param {number[]} nums
 * @return {number}
 */
Scanner sc = new Scanner(System.in);  
int numberA = sc.nextInt();
int numberB= sc.nextInt();
//将结果转换为float  
float numberC = numberA - numberB; 
//可以取到小数点后的正确数值，如果两个都是整形，那小数点后面就会清零
float number = numberC / 5;  
int renewNum = (int)Math.ceil(number);

