document.getElementById("display").addEventListener("click", calc);
const numbers = [];
const numberss = [];

function calc() {
    // DOM lấy thông tin từ user input
    const number1 = +document.getElementById("number1").value;
    numbers.push(number1);
    const number2 = +document.getElementById("number2").value;
    numberss.push(number2);

    // Hiển thị lại các số user đã nhập
    document.getElementById("array1").innerHTML = numbers;
    document.getElementById("array2").innerHTML = numberss;

    // 1&2. Tổng các số dương & Đếm các số dương
    let result1 = 0;
    let result2 = 0;
    for (let i = 0; i < numbers.length; i++) {
        const value = numbers[i];
        if (value > 0) {
            result1 +=value;
            result2++;
        }
    }
    document.getElementById("result1").innerHTML = result1;
    document.getElementById("result2").innerHTML = result2;

    // 3. Tìm số nhỏ nhất
    let result3 = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (result3 > numbers[i]){
            result3 = numbers[i];
        }
    }
    document.getElementById("result3").innerHTML = result3;

    // 4. Tìm số dương nhỏ nhất
    let result4 = numbers[0];
    if (result4 > 0){
        for (let i = 0; i < numbers.length; i++) {
            if (result4 > numbers[i]){
                result4 = numbers[i];
            }
        }
    }
    document.getElementById("result4").innerHTML = result4;

    // 5. Tìm số chẵn cuối cùng trong mảng
    // Lọc số chẵn
    const numEven = numbers.filter((value) => value%2 == 0);
    // Tìm số cuối cùng
    const result5 = numEven[numEven.length-1];
    document.getElementById("result5").innerHTML = result5;

    // 6. Đổi chỗ 2 giá trị trong mảng
    // DOM lấy các vị trí cần đổi
    const change1 = +document.getElementById("change1").value;
    const change2 = +document.getElementById("change2").value;
    // Đổi vị trí
    let result6 = []
    result6 = numbers.splice(change1, 1, change2);
    document.getElementById("result6").innerHTML = result6;

    // 7. Sắp xếp theo thứ tự tăng dần
    let result7 = []
    result7 = numbers.sort((a,b) => a-b);
    document.getElementById("result7").innerHTML = result7;

    // 8. Tìm số nguyên tố đầu tiên
    let result8 = numberss[0];
    for (i=0; i<numberss.length; i++){
        if (numberss[i] < 2){
            return false
        }
        if (numberss[i] === 2){
            return true
        }
        if (numberss[i] %2 === 0){
            return false
        }
        for (j=3; j<=numberss[i]/2; j+=2){
            if (numberss[i] % j === 0){
                return false
            }
        }
        return true
    }
    document.getElementById("result8").innerHTML = result8;

    // 9. Nhập thêm mảng và đếm số nguyên
    // đếm số nguyên
    let result9 = 0;
    for (let i = 0; i < numberss.length; i++){
        const value = numberss[i];
        if (value !== 0){
            result9++;
        }
    }
    document.getElementById("result9").innerHTML = result9;

    //10. So sánh lượng số dương & âm
    let negativeNum = numberss[0];
    let positiveNum = numberss[0];
    
    for (let i=0; i< numberss.length; i++){
        const value = numberss[i];
        if (value < 0){
            negativeNum++;
        }
        if (value > 0){
            positiveNum++;
        }
    }

    if (positiveNum > negativeNum){
    document.getElementById("result10").innerHTML = `Số dương là ${positiveNum}, Số âm là ${negativeNum}, Số dương > Số âm`;
    }
    if (positiveNum < negativeNum){
    document.getElementById("result10").innerHTML = `Số dương là ${positiveNum}, Số âm là ${negativeNum}, Số dương < Số âm`;
    }
}