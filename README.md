# 🚀 React Props Learning Project

This project is a beginner-level **React.js** demo where I learned how to use **props** to pass dynamic content such as text and images into reusable components like cards.

---

## 🚀 Live Preview 👉 [View Live](https://learn-prop-in-react.vercel.app/)



## 📚 What I Learned

### ✅ 1. Props in React
- Props allow data to be passed from a parent component to a child component.
- Each `Card` receives different props like `username`, `btnText`, `para`, and `imgurl`.

```jsx
<Card username="Raj" btnText="Click Me" para="Hi, I am Raj" imgurl={CardImage} />
```

---

### ✅ 2. Reusable Components
- Created a `Card` component that can be reused multiple times with different data.
- Promotes clean and maintainable code using the DRY (Don't Repeat Yourself) principle.

---

### ✅ 3. Passing Images via Props
- Imported an image from the local `assets` folder.
- Passed the image as a prop to dynamically render it in the component.

```jsx
import CardImage from "./assets/CardImage.jpg";

<Card imgurl={CardImage} />
```

---

### ✅ 4. Conditional Rendering
- The `Card` component uses a default image (`CardImage.jpg`) if no `imgurl` prop is passed.
- Also applies fallback text or button label if other props are missing.

---

## 📁 Project Structure

```
my-react-props-app/
├── src/
│   ├── assets/
│   │   └── CardImage.jpg
│   ├── component/
│   │   └── Card.jsx
│   ├── App.jsx
│   ├── App.css
├── README.md
├── package.json
```

---

## 🛠 Tech Stack

- ⚛️ React.js
- 💅 Tailwind CSS (for utility-based styling)
- 🔃 Props & Conditional Rendering
- 🧠 useState Hook (basic usage)

---

## 🚀 How to Run This Project

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-props-learning.git
cd react-props-learning
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev  # or npm start (if using CRA)
```

---

## 📸 Screenshot Example

If you added an image named `CardImage.jpg` to `src/assets`, it will be used like this:

```jsx
<Card imgurl={CardImage} />
```

And displayed inside the card component.



## ✅ Conclusion

This mini project helped me understand:

- How to pass data using **props** in React
- How to create reusable and dynamic **components**
- How to import and use **local assets** like images
- How to use **fallback/default values** when props are not passed

It’s a great starting point in learning **component-based architecture** in React.

# Screenshot

![image](Screenshot.png)