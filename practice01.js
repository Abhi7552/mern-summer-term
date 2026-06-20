// Question 1: Student Report Generation1

const students = [
  { id: 1, name: 'Aman', marks: 88, attendance: 92 },
  { id: 2, name: 'Riya', marks: 48, attendance: 70 },
  { id: 3, name: 'Karan', marks: 67, attendance: 81 },
  { id: 4, name: 'Simran', marks: 91, attendance: 88 },
  { id: 5, name: 'Raj', marks: 45, attendance: 60 },
  { id: 6, name: 'Neha', marks: 79, attendance: 95 }
];

// 1. Filter passed students (marks >= 40)
const passedStudents = students.filter(({ marks }) => marks >= 40);

// 2. Map to add grades
const studentReports = students.map(({ name, marks, attendance }) => {
  let grade;
  if (marks >= 80) grade = 'A';
  else if (marks >= 60) grade = 'B';
  else if (marks >= 40) grade = 'C';
  else grade = 'F';

  return { name, marks, attendance, grade };
});

// 3. Reduce to calculate class average
const totalMarks = students.reduce((sum, { marks }) => sum + marks, 0);
const averageMarks = totalMarks / students.length;

// 4. Reduce to find topper
const topper = students.reduce((best, student) =>
  student.marks > best.marks ? student : best
);

// 5. Display results
console.log(`Passed Students: ${passedStudents.map(s => s.name).join(', ')}`);
console.log(" Student Reports:");
studentReports.forEach(({ name, marks, attendance, grade }) =>
  console.log(`${name} - Marks: ${marks}, Attendance: ${attendance}%, Grade: ${grade}`)
);
console.log(` Class Average Marks: ${averageMarks.toFixed(2)}`);
console.log(` Topper: ${topper.name} with ${topper.marks} marks`);



// Question 2: Shopping Cart Billing

const cart = [
  { productId: 101, name: 'Laptop', price: 55000, quantity: 2, category: 'Electronics' },
  { productId: 102, name: 'Mouse', price: 700, quantity: 2, category: 'Accessories' },
  { productId: 103, name: 'Keyboard', price: 1500, quantity: 1, category: 'Accessories' },
  { productId: 104, name: 'Monitor', price: 12000, quantity: 0, category: 'Electronics' },
  { productId: 105, name: 'USB Cable', price: 300, quantity: 3, category: 'Accessories' },
  { productId: 106, name: 'Office Chair', price: 6500, quantity: 1, category: 'Furniture' }
];

// 1. Filter out unavailable products
const availableProducts = cart.filter(({ quantity }) => quantity > 0);

// 2. Map to calculate item totals
const billedItems = availableProducts.map(({ name, price, quantity, category }) => {
  const itemTotal = price * quantity;
  return { name, price, quantity, itemTotal, category };
});

// 3. Reduce to calculate subtotal
const subtotal = billedItems.reduce((sum, { itemTotal }) => sum + itemTotal, 0);

// 4. Apply discount
const discount = subtotal > 50000 ? subtotal * 0.10 : 0;
const afterDiscount = subtotal - discount;

// 5. Add GST (18%)
const gst = afterDiscount * 0.18;
const finalAmount = afterDiscount + gst;

// 6. Category-wise totals
const categoryTotals = billedItems.reduce((acc, { category, itemTotal }) => {
  acc[category] = (acc[category] || 0) + itemTotal;
  return acc;
}, {});

// 7. Display bill summary
console.log(" Bill Summary:");
billedItems.forEach(({ name, quantity, price, itemTotal }) =>
  console.log(`${name} - Qty: ${quantity}, Price: ₹${price}, Total: ₹${itemTotal}`)
);
console.log(`Subtotal: ₹${subtotal}`);
console.log(`Discount: ₹${discount}`);
console.log(`After Discount: ₹${afterDiscount}`);
console.log(`GST (18%): ₹${gst}`);
console.log(`Final Payable Amount: ₹${finalAmount}`);
console.log("Category-wise Totals:", categoryTotals);
