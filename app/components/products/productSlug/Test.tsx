import React, { useState } from "react";

function Test() {
  const categoriesArray = [
    {
      name: "عرقیجات",
      value: 8,
    },
    {
      name: "محصولات ویژه",
      value: 7,
    },
    {
      name: "قهوه",
      value: 5,
    },
    {
      name: "ادویه",
      value: 4,
    },
    {
      name: "دمنوش",
      value: 3,
    },
    {
      name: "روغن",
      value: 1,
    },
  ];

  const [categories, setCategories] = useState<number[]>();

  const handleCategoryChange = (event: any) => {
    const categoryId = event.target.value;
    const newCategories = [...categories!];

    if (event.target.checked) {
      newCategories.push();
    } else {
      const index = newCategories.indexOf(categoryId);
      newCategories.splice(index, 1);
    }

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("categories", newCategories.join("&"));
    window.history.pushState({}, "", `${window.location.pathname}?${searchParams.toString()}`);

    setCategories(newCategories);
  };

  return (
    <div className="App">
      <div className="categories">
        {categoriesArray.map((category) => (
          <label key={category.name}>
            <input
              type="checkbox"
              name="categories"
              value={category.value}
              onChange={handleCategoryChange}
              checked={categories?.includes(category.value)}
            />
            {category.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Test;
