// async function fetchMenu() {
//     try {
//       const response = await fetch('menu.json');
      
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
      
//       const data = await response.json();
//       console.log(data); // Use your JSON data here
//     } catch (error) {
//       console.error('There has been a problem with your fetch operation:', error);
//     }
//   }

  
  
//   // Call the function
//   fetchMenu();
  
const menuData = {
    drinks: [
      { name: "Coca Cola", description: "Refreshing cola drink." },
      { name: "Lemonade", description: "Freshly squeezed lemonade." },
      { name: "Iced Tea", description: "Chilled tea with a hint of lemon." },
      { name: "Sparkling Water", description: "Bubbly mineral water." },
      { name: "Orange Juice", description: "Freshly squeezed orange juice." }
    ],
    starters: [
      { name: "Garlic Bread", description: "Toasted bread with garlic." },
      { name: "Bruschetta", description: "Tomato and basil on toasted bread." },
      { name: "Chicken Wings", description: "Spicy chicken wings." },
      { name: "Stuffed Mushrooms", description: "Mushrooms filled with cheese." },
      { name: "Spring Rolls", description: "Crispy rolls with vegetables." }
    ],
    main_course: [
      { name: "Grilled Salmon", description: "Fresh salmon fillet." },
      { name: "Beef Steak", description: "Juicy beef steak." },
      { name: "Vegetable Stir Fry", description: "Mixed vegetables stir-fried." },
      { name: "Pasta Primavera", description: "Pasta with seasonal vegetables." },
      { name: "Chicken Alfredo", description: "Pasta with creamy Alfredo sauce." }
    ],
    mocktails: [
      { name: "Virgin Mojito", description: "Minty refreshing drink." },
      { name: "Shirley Temple", description: "Fizzy sweet drink." },
      { name: "Fruit Punch", description: "Mix of tropical fruits." },
      { name: "Pineapple Cooler", description: "Cool pineapple drink." },
      { name: "Mint Lemonade", description: "Minty and zesty lemonade." }
    ],
    desserts: [
      { name: "Chocolate Cake", description: "Rich chocolate cake." },
      { name: "Cheesecake", description: "Creamy cheesecake." },
      { name: "Tiramisu", description: "Italian coffee-flavored dessert." },
      { name: "Ice Cream Sundae", description: "Ice cream with toppings." },
      { name: "Fruit Tart", description: "Tart with fresh fruits." }
    ]
  };
  
  function displayCategory(category) {
    const container = document.getElementById('menu-container');
    container.innerHTML = ''; // Clear existing items
  
    const items = menuData[category];
    items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'container one';
      
      itemDiv.innerHTML = `
        <h1>${item.name}</h1>
        <p>${item.description}</p>
      `;
      
      container.appendChild(itemDiv);
    });
  }
  