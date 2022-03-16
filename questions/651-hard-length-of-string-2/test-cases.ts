import { Equal, IsTrue } from '@type-challenges/utils'

type cases = [
  IsTrue<Equal<LengthOfStringHard<"">, 0>>,
  IsTrue<Equal<LengthOfStringHard<"1">, 1>>,
  IsTrue<Equal<LengthOfStringHard<"12">, 2>>,
  IsTrue<Equal<LengthOfStringHard<"123">, 3>>,
  IsTrue<Equal<LengthOfStringHard<"1234">, 4>>,
  IsTrue<Equal<LengthOfStringHard<"12345">, 5>>,
  IsTrue<Equal<LengthOfStringHard<"123456">, 6>>,
  IsTrue<Equal<LengthOfStringHard<"1234567">, 7>>,
  IsTrue<Equal<LengthOfStringHard<"12345678">, 8>>,
  IsTrue<Equal<LengthOfStringHard<"123456789">, 9>>,
  IsTrue<Equal<LengthOfStringHard<"1234567890">, 10>>,
  IsTrue<Equal<LengthOfStringHard<"12345678901">, 11>>,
  IsTrue<Equal<LengthOfStringHard<"123456789012">, 12>>,
  IsTrue<Equal<LengthOfStringHard<"1234567890123">, 13>>,
  IsTrue<Equal<LengthOfStringHard<"12345678901234">, 14>>,
  IsTrue<Equal<LengthOfStringHard<"123456789012345">, 15>>,
  IsTrue<Equal<LengthOfStringHard<"1234567890123456">, 16>>,
  IsTrue<Equal<LengthOfStringHard<"12345678901234567">, 17>>,
  IsTrue<Equal<LengthOfStringHard<"123456789012345678">, 18>>,
  IsTrue<Equal<LengthOfStringHard<"1234567890123456789">, 19>>,
  IsTrue<Equal<LengthOfStringHard<"12345678901234567890">, 20>>,
  IsTrue<Equal<LengthOfStringHard<"123456789012345678901">, 21>>,
  IsTrue<Equal<LengthOfStringHard<"1234567890123456789012">, 22>>,
  IsTrue<Equal<LengthOfStringHard<"12345678901234567890123">, 23>>,
  IsTrue<Equal<LengthOfStringHard<"aaaaaaaaaaaaggggggggggggggggggggkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa">, 272>>,
];
