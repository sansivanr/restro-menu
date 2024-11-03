const menuData = {
    drinks: [
        { name: "Coca Cola", description: "Refreshing cola drink.", price: "$2" },
        { name: "Lemonade", description: "Freshly squeezed lemonade.", price: "$3" },
        { name: "Iced Tea", description: "Chilled tea with a hint of lemon.", price: "$3" },
        { name: "Sparkling Water", description: "Bubbly mineral water.", price: "$2.5" },
        { name: "Orange Juice", description: "Freshly squeezed orange juice.", price: "$3.5" }
    ],
    starters: [
        { name: "Garlic Bread", description: "Toasted bread with garlic.", price: "$4" },
        { name: "Bruschetta", description: "Tomato and basil on toasted bread.", price: "$5" },
        { name: "Chicken Wings", description: "Spicy chicken wings.", price: "$6" },
        { name: "Stuffed Mushrooms", description: "Mushrooms filled with cheese.", price: "$5" },
        { name: "Spring Rolls", description: "Crispy rolls with vegetables.", price: "$4.5" }
    ],
    main_course: [
        { name: "Grilled Salmon", description: "Fresh salmon fillet.", price: "$12" },
        { name: "Beef Steak", description: "Juicy beef steak.", price: "$15" },
        { name: "Vegetable Stir Fry", description: "Mixed vegetables stir-fried.", price: "$10" },
        { name: "Pasta Primavera", description: "Pasta with seasonal vegetables.", price: "$11" },
        { name: "Chicken Alfredo", description: "Pasta with creamy Alfredo sauce.", price: "$12" }
    ],
    mocktails: [
        { name: "Virgin Mojito", description: "Minty refreshing drink.", price: "$4" },
        { name: "Shirley Temple", description: "Fizzy sweet drink.", price: "$3.5" },
        { name: "Fruit Punch", description: "Mix of tropical fruits.", price: "$4.5" },
        { name: "Pineapple Cooler", description: "Cool pineapple drink.", price: "$4" },
        { name: "Mint Lemonade", description: "Minty and zesty lemonade.", price: "$3.5" }
    ],
    desserts: [
        { name: "Chocolate Cake", description: "Rich chocolate cake.", price: "$5" },
        { name: "Cheesecake", description: "Creamy cheesecake.", price: "$5.5" },
        { name: "Tiramisu", description: "Italian coffee-flavored dessert.", price: "$6" },
        { name: "Ice Cream Sundae", description: "Ice cream with toppings.", price: "$4.5" },
        { name: "Fruit Tart", description: "Tart with fresh fruits.", price: "$5" }
    ]
  };
  
  function displayCategory(category = null) {
    const container = document.getElementById('menu-container');
    container.innerHTML = ''; // Clear existing items
  
    // If no category is selected, display all items
    const items = category ? menuData[category] : Object.values(menuData).flat();
  
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'container one';
        
        itemDiv.innerHTML = `
            <h1>${item.name} - <span style="color: #ffde59;">${item.price}</span></h1>
            <p>${item.description}</p>
        `;
        
        container.appendChild(itemDiv);
    });
  }
  
  // Show all items initially
  displayCategory();
  