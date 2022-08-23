import { useEffect, useState } from "react";
import getAllCategories from "../api/getAllCategories";
import Header from "../components/header";
import AppTabs from "../components/tabs";

function Home() {

  const [categories, setCategories] = useState([]);
  const [categoriesLoader, setCategoriesLoader] = useState(false);

  const getCategories = async () => {
    setCategoriesLoader(true);
    const result = await getAllCategories();
    setCategories(result.response.data);
    setCategoriesLoader(result.loading);

  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <>
      <Header />
      <div style={{ margin: '0px 0px 0px 25px' }}>
        <AppTabs categories={categories} categoriesLoader={categoriesLoader} />
      </div>
    </>
  );
}

export default Home;