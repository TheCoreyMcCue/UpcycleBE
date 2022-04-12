const description =
  "Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica";
const products = [
  {
    title: "Complete Element Deck with Spitfire Wheels",
    id: "1",
    image:
      "https://imgs.search.brave.com/e8XvhwcJ1pIxbd4wXj8HzEpjDsIHfCtB3ZgHQW3Hjl4/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly93d3cu/bmF0aXZlc2thdGVz/dG9yZS5jby51ay9p/bWFnZXMvZHllLXRy/aXBwaW4tY29tcGxl/dGUtc2thdGVib2Fy/ZC03LTc1LXAzNjc0/Ny05MTIxOF9pbWFn/ZS5qcGc",
    price: 120,
    rating: 4,
    description:
      "Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica",
  },
  {
    title: "Complete Custom Burton Deck",
    id: "2",
    image:
      "https://imgs.search.brave.com/bSVOiN3eN1b-3pWeyDa0jO-HMD0wfp6wOWXdytsnG7U/rs:fit:1200:757:1/g:ce/aHR0cHM6Ly93d3cu/cGV0ZXJ2ZXJkb25l/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNC8wOC9BTkRS/MDUyMC5qcGc",
    price: 85,
    rating: 5,
    description:
      "Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica",
  },

  {
    title: "Street Deck Complete",
    id: "3",
    image:
      "https://imgs.search.brave.com/vMVe7S1wzhqYOlazOXwj6X3LU3h_KSZrg58czco0G6U/rs:fit:1200:1152:1/g:ce/aHR0cHM6Ly9jb250/ZW50Lmluc3RydWN0/YWJsZXMuY29tL09S/SUcvRkVELzhZWVIv/SFpJOUJOVlkvRkVE/OFlZUkhaSTlCTlZZ/LmpwZz9mcmFtZT0x",
    price: 30,
    rating: 5,
    description:
      "Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica",
  },
  {
    title: "Old School Cruiser",
    id: "4",
    image:
      "https://imgs.search.brave.com/aEoDgPtZ-KnhNqSph3ijl7HhBEH9OpWuvkJJ6raqOYE/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly9ibG9n/LmFkYWZydWl0LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wOC9pbWdfOTE2/Mi5qcGc",
    price: 145,
    rating: 4,
    description:
      "Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica",
  },
  {
    title: "Custom Joe Mamma Deck",
    id: "5",
    image:
      "https://imgs.search.brave.com/x9BEjMesrUCKMTk0_3LgwZD6fSKz7dc3GylnG49CBMQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Ym9hcmRwdXNoZXIu/Y29tL2Jsb2cvd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMTIv/Ym9hcmRwdXNoZXIt/ZGlnaXRhbC1jYXJi/aW5lLWRlYWQtc2Ft/dXJhaS1za3VsbC1j/dXN0b20tc2thdGVi/b2FyZC1iaWcuanBn",
    price: 80,
    rating: 4,
    description:
      "Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica",
  },
  {
    title: "Custom Joe Mamma Deck",
    id: "5",
    image:
      "https://imgs.search.brave.com/x9BEjMesrUCKMTk0_3LgwZD6fSKz7dc3GylnG49CBMQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Ym9hcmRwdXNoZXIu/Y29tL2Jsb2cvd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMTIv/Ym9hcmRwdXNoZXIt/ZGlnaXRhbC1jYXJi/aW5lLWRlYWQtc2Ft/dXJhaS1za3VsbC1j/dXN0b20tc2thdGVi/b2FyZC1iaWcuanBn",
    price: 80,
    rating: 4,
    description:
      "Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica",
  },
  {
    title: "Custom Joe Mamma Deck",
    id: "5",
    image:
      "https://imgs.search.brave.com/x9BEjMesrUCKMTk0_3LgwZD6fSKz7dc3GylnG49CBMQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Ym9hcmRwdXNoZXIu/Y29tL2Jsb2cvd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMTIv/Ym9hcmRwdXNoZXIt/ZGlnaXRhbC1jYXJi/aW5lLWRlYWQtc2Ft/dXJhaS1za3VsbC1j/dXN0b20tc2thdGVi/b2FyZC1iaWcuanBn",
    price: 80,
    rating: 4,
    description:
      "Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica Lizards are a widespread group of squamate reptile with over 6,000 species,branging across all continents except Antarctica",
  },
];
module.exports = products;