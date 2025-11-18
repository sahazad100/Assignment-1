টাইপ এবং ইনটারফেসের পার্থক্য নিচে দেওয়া হলোঃ

ইন্টারফেস
১.ইনটারফেস সরাসরি মার্জ করতে পারে।
২.ইন্টারফেস বড় অবজেক্টের জন্য খুবই কাজের।
৩.ইন্টারফেস অবজেক্ট অরিয়েনটেন্ট প্রোগ্রামিংয়ের জন্য খুবই ভালো। 
৪.রিওপেন করা যায়

টাইপ
১. মার্জ করতে পারে না।
2. ইউনিয়ন, ইন্টারসেকশন, টাপল ইত্যাদি ব্যবহার করা যায়।
3. রিওপেন করা যায় মা
4. টাইপ সবকিছু alias করতে পারে।



Typescript  এ keyof এর ব্যবহারঃ
keyof ব্যবহার করে আমরা কোন Object এর সমস্ত গুলোকে union type হিসাবে পেতে পারি। এটি generic programming এর জন্য খুবি কাজের।
Example:

type peopleType = {
  name:string;
  age:number;
  color:string;
}

const people = {
  name:"sahazad",
  age:23,
  color:"black"
}

const userInfo = {
  phone:"017943938"
}

const PeopleInfo = <T>(obj:T , key:keyof T)=>{
  console.log(key)
  return obj[key];
}

const result1 = PeopleInfo(userInfo, "phone")
console.log(result1)
const result2 = PeopleInfo(people, "name")
console.log(result2)
