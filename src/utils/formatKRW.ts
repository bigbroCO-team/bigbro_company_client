/**
 * 숫자를 넣으면 3자리 마다 콤마를 넣어 반환합니다
 *
 * @param value 숫자를 param으로 받습니다
 * @returns 3자리 마다 콤마를 넣은 문자열
 */

const formatKRW = (value: number): string => {
  return Number(value).toLocaleString('ko-KR');
};

export default formatKRW;
