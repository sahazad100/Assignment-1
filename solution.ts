type valueType = number|string|boolean;

const formatValue = (value:valueType):valueType | "Invalid type" => {
    if(typeof value === "string"){
      return value.toUpperCase()
    }
    else if(typeof value === "number"){
      return value*10
    }
    else if(typeof value === "boolean"){
      return !value
    }
    else{
      return `Invalid type`;
    }
}
 
formatValue('hello');
formatValue(5);
formatValue(false);






const getLength = (value: string | number[]): number => {
  return value.length;
};

getLength('typescript');
getLength([10, 20, 30, 40]); 






class Person {
  name:string;
  age:number;

  constructor(name:string, age:number){
    this.name = name
    this.age = age
  }

  getDetails(){
    return `'Name: ${this.name}, Age: ${this.age}';`
  }
}

const person1 = new Person('John Doe', 30);
person1.getDetails();

const person2 = new Person('Alice', 25);
person2.getDetails();





type book = {
  title:string;
  rating:number;
}

const filterByRating = (elements:book[]):book[] => {
    return elements.filter((item) => item.rating >= 4)
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

filterByRating(books);




type user = {
  id:number;
  name:string;
  email:string;
  isActive:boolean;
}

const filterActiveUsers = (elements: user[]):user[] =>{
  return elements.filter((item) => item.isActive === true)
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

filterActiveUsers(users);




interface Book {
  title:string;
  author:string;
  publishedYear:number;
  isAvailable:boolean;
}

const printBookDetails = (elements:Book) => {
  console.log(`Title: ${elements.title}, Author: ${elements.author}, Published: ${elements.publishedYear}, Available: ${elements.isAvailable}`)
}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);




type arrayType = (number | string)[]


function getUniqueValues(array1: arrayType, array2: arrayType) {
  const result: arrayType = [];

  
  function exists(value: number | string): boolean {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return true;
      }
    }
    return false;
  }

  
  for (let i = 0; i < array1.length; i++) {
    if (!exists(array1[i])) {
      result[result.length] = array1[i]; 
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!exists(array2[i])) {
      result[result.length] = array2[i]; 
    }
  }

  return result;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
getUniqueValues(array1, array2);




type elementType = {
  name:string;
  price:number;
  quantity:number;
  discount?:number;
}


const calculateTotalPrice = (elements:elementType[]):number => {
    return elements.reduce((total, product) => {
          const basePrice = product.price*product.quantity ;

          const finalPrice = product.discount !== undefined
          ? basePrice - (basePrice*product.discount) / 100
          : basePrice;

          
        return total + finalPrice;

          
    },0);
};

const products:elementType[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

calculateTotalPrice(products);