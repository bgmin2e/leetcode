function removeDuplicates(nums: number[]): number {
    let j = 0; // 수정할 위치를 가리키는 포인터
    let count = 0; // 현재 숫자의 등장 횟수

    for (let i = 0; i < nums.length; i++) {
        // 숫자가 바뀌었거나 첫 숫자인 경우 count 초기화
        if (i === 0 || nums[i] !== nums[i - 1]) {
            count = 1;
        } else {
            count++; // 같은 숫자가 나오면 count 증가
        }

        // 중복이 2번 이하일 경우만 배열에 추가
        if (count <= 2) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
}